import AnimatedSection from '@/components/AnimatedSection';
import PostCard from '@/components/PostCard';
import { getAllPosts } from '@/lib/posts';
import siteConfig from '@/lib/siteConfig';

export const metadata = {
  title: 'Architecture Experience — Read | Marcel Weigel',
  description: 'Articles on Enterprise Architecture, Digital Strategy, AI, and architecture thinking by Marcel Weigel.',
};

export default function ReadPage() {
  const posts = getAllPosts();

  return (
    <section className="min-h-screen pt-32 pb-20 px-4 md:px-8 lg:px-12">
      <div className="max-w-[1200px] mx-auto">
        <AnimatedSection>
          <span className="font-heading text-xs font-semibold tracking-[4px] uppercase text-accent-light block mb-2">
            {siteConfig.contentBrand}
          </span>
          <h1 className="font-heading text-[clamp(2.5rem,5vw,3.5rem)] font-extrabold mb-4">
            Read
          </h1>
          <p className="font-body text-base text-brand-muted max-w-[600px] mb-12 leading-relaxed">
            Articles, frameworks, and insights on Enterprise Architecture, Digital Strategy, and AI Transformation.
          </p>
        </AnimatedSection>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <AnimatedSection key={post.slug} delay={i * 0.1}>
                <PostCard post={post} />
              </AnimatedSection>
            ))}
          </div>
        ) : (
          <AnimatedSection>
            <div className="text-center py-20">
              <p className="font-body text-lg text-brand-muted">New articles coming soon. Stay tuned.</p>
            </div>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
}
