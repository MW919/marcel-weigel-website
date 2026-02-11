const GHOST_URL = 'https://architecture-experience.ghost.io';
const GHOST_KEY = '05d88196caa8224ab9e00737bb';

/**
 * Fetch latest posts from Ghost Content API
 * @param {number} limit - Number of posts to fetch
 * @returns {Promise<Array>} Array of post objects
 */
export async function getLatestPosts(limit = 3) {
  try {
    const res = await fetch(
      `${GHOST_URL}/ghost/api/content/posts/?key=${GHOST_KEY}&limit=${limit}&fields=id,title,slug,excerpt,published_at,url,visibility,feature_image&order=published_at%20desc`,
      { next: { revalidate: 3600 } } // revalidate every hour
    );

    if (!res.ok) {
      console.error('Ghost API error:', res.status);
      return getFallbackPosts();
    }

    const data = await res.json();

    return data.posts.map((post) => ({
      title: post.title,
      excerpt: post.excerpt?.slice(0, 160) + '…',
      date: new Date(post.published_at).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      }),
      url: post.url,
      membersOnly: post.visibility === 'members' || post.visibility === 'paid',
      featureImage: post.feature_image || null,
    }));
  } catch (error) {
    console.error('Ghost fetch failed:', error);
    return getFallbackPosts();
  }
}

/**
 * Fallback posts if API is unavailable
 */
function getFallbackPosts() {
  return [
    {
      title: 'AI - Why Architecture matters more than ever.',
      excerpt: 'How do we automate Architecture efforts with AI? Is this really the right question to ask? It sounds logical, but it rarely leads to the highest return on investment.…',
      date: '10 Feb 2026',
      url: 'https://www.architecture-experience.com/ai-why-architecture-matters-more-than-ever/',
      membersOnly: true,
      featureImage: null,
    },
    {
      title: "When digital initiatives stall, it's rarely a technology problem.",
      excerpt: 'Executives rarely wake up and decide to block progress. Yet across organizations, digital initiatives stall every day.…',
      date: '23 Dec 2025',
      url: 'https://www.architecture-experience.com/when-digital-initiatives-stall-its-rarely-a-technology-problem/',
      membersOnly: true,
      featureImage: null,
    },
    {
      title: 'Virtues for responsible architecture',
      excerpt: "These aren't rules. It is about a state of mind. Ten virtues to remind you why you design – and for whom.…",
      date: '09 Oct 2025',
      url: 'https://www.architecture-experience.com/virtues-for-responsible-architecture/',
      membersOnly: true,
      featureImage: null,
    },
  ];
}
