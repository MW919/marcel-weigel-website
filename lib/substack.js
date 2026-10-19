import siteConfig from '@/lib/siteConfig';

/**
 * Fetch latest posts from the Substack RSS feed.
 * Runs at build time (static export), so new posts appear after the next rebuild.
 * Returns the same shape the old Ghost helper returned, so the pages need no other changes.
 * @param {number} limit - Number of posts to return
 * @returns {Promise<Array>} Array of post objects
 */
export async function getLatestPosts(limit = 3) {
  try {
    const res = await fetch(siteConfig.newsletter.feedUrl, {
      headers: { 'User-Agent': 'marcel-weigel.com build' },
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.error('Substack feed error:', res.status);
      return getFallbackPosts().slice(0, limit);
    }

    const xml = await res.text();
    const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map((m) => m[1]);

    if (items.length === 0) {
      console.error('Substack feed returned no posts');
      return getFallbackPosts().slice(0, limit);
    }

    return items.slice(0, limit).map((item) => {
      const title = stripHtml(readTag(item, 'title'));
      const description = stripHtml(readTag(item, 'description'));
      const body = readTag(item, 'content:encoded');
      const pubDate = readTag(item, 'pubDate');
      const image = item.match(/<enclosure[^>]*url="([^"]+)"/)?.[1] || null;

      // Use the subtitle as excerpt; fall back to the start of the post text.
      const excerptSource = description || stripHtml(body);

      return {
        title,
        excerpt: shorten(excerptSource, 160),
        date: formatDate(pubDate),
        url: readTag(item, 'link'),
        membersOnly: false,
        featureImage: image ? decodeEntities(image) : null,
      };
    });
  } catch (error) {
    console.error('Substack fetch failed:', error);
    return getFallbackPosts().slice(0, limit);
  }
}

/** Read the text of an XML tag, with or without CDATA. */
function readTag(xml, tag) {
  const match = xml.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`));
  if (!match) return '';
  const raw = match[1].trim();
  const cdata = raw.match(/^<!\[CDATA\[([\s\S]*?)\]\]>$/);
  return decodeEntities(cdata ? cdata[1].trim() : raw);
}

function stripHtml(html) {
  return decodeEntities(html.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
}

function decodeEntities(text) {
  return text
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCharCode(parseInt(n, 16)))
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');
}

function shorten(text, max) {
  if (!text) return '';
  if (text.length <= max) return text;
  return text.slice(0, max).replace(/\s+\S*$/, '') + '…';
}

function formatDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '';
  return date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
}

/**
 * Fallback posts if the feed is unavailable during the build
 */
function getFallbackPosts() {
  const base = siteConfig.newsletter.url;
  return [
    {
      title: 'When the org chart becomes an architecture decision',
      excerpt: 'Jack Dorsey and Roelof Botha recently argued that corporate hierarchy was never a management philosophy but a workaround.',
      date: '17 Jul 2026',
      url: `${base}/p/when-the-org-chart-becomes-an-architecture-decision`,
      membersOnly: false,
      featureImage: 'https://substack-post-media.s3.amazonaws.com/public/images/ce0c3ad0-b04e-4bea-bd38-0217449b0ea4_1584x891.png',
    },
    {
      title: 'Why AI needs to know what your data means. Not just where it lives.',
      excerpt: 'A plain-language guide to knowledge graphs, semantic layers, and why Enterprise Architecture was on the right path…',
      date: '04 May 2026',
      url: `${base}/p/why-ai-needs-to-know-what-your-data-means-not-just-where-it-lives`,
      membersOnly: false,
      featureImage: 'https://substack-post-media.s3.amazonaws.com/public/images/2c30a736-75b2-4d85-ad2c-a1af08a24c7a_1584x891.png',
    },
    {
      title: 'The EA Value Cycle: Why closing the circle matters',
      excerpt: 'Enterprise Architecture has a persistent credibility problem.',
      date: '27 Mar 2026',
      url: `${base}/p/the-ea-value-cycle`,
      membersOnly: false,
      featureImage: 'https://substack-post-media.s3.amazonaws.com/public/images/0223425d-1130-446e-bd71-c9ef9aaa60e3_1584x891.png',
    },
  ];
}
