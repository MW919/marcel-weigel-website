import { notFound } from 'next/navigation';
import Link from 'next/link';
import { marked } from 'marked';
import AnimatedSection from '@/components/AnimatedSection';
import { getAllPosts, getPostBySlug } from '@/lib/posts';

// Generate static paths at build time
export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

// Dynamic metadata
export function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: 'Not Found' };
  return {
    title: `${post.title} — Architecture Experience`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const htmlContent = marked(post.content);
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="min-h-screen pt-32 pb-20 px-4 md:px-8">
      <div className="max-w-[750px] mx-auto">
        {/* Back link */}
        <AnimatedSection>
          <Link
            href="/read"
            className="inline-flex items-center gap-2 font-heading text-[11px] tracking-[2px] uppercase text-brand-muted hover:text-accent-light transition-colors duration-300 no-underline mb-8"
          >
            ← Back to all articles
          </Link>
        </AnimatedSection>

        {/* Header */}
        <AnimatedSection delay={0.1}>
          <div className="flex gap-2 flex-wrap mb-4">
            {post.categories.map((cat) => (
              <span
                key={cat}
                className="text-[10px] font-heading tracking-[1px] uppercase text-accent-light bg-accent/10 px-2.5 py-1 rounded"
              >
                {cat}
              </span>
            ))}
          </div>

          <h1 className="font-heading text-[clamp(2rem,5vw,3rem)] font-extrabold leading-tight mb-4">
            {post.title}
          </h1>

          <p className="font-body text-sm text-brand-muted mb-8">
            {formattedDate}
          </p>

          {/* Divider */}
          <div className="w-16 h-px bg-gradient-to-r from-accent to-transparent mb-10" />
        </AnimatedSection>

        {/* Content */}
        <AnimatedSection delay={0.2}>
          <div
            className="prose-brand font-body text-base"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </AnimatedSection>

        {/* Bottom nav */}
        <AnimatedSection delay={0.3}>
          <div className="mt-16 pt-8 border-t border-accent/10">
            <Link
              href="/read"
              className="font-heading text-[11px] tracking-[2px] uppercase text-accent-light hover:text-accent transition-colors duration-300 no-underline"
            >
              ← Back to all articles
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </article>
  );
}
