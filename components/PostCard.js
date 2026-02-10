import Link from 'next/link';

export default function PostCard({ post }) {
  return (
    <Link href={`/read/${post.slug}`} className="no-underline block group">
      <article className="bg-brand-card rounded-2xl overflow-hidden border border-accent/10 transition-all duration-400 group-hover:-translate-y-1.5 group-hover:border-accent/30 group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
        <div className="h-[200px] bg-gradient-to-br from-brand-section to-accent/15 flex items-center justify-center">
          {post.image ? (
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          ) : (
            <span className="font-heading text-[11px] tracking-[2px] uppercase text-brand-muted/50">Image Placeholder</span>
          )}
        </div>
        <div className="p-6">
          <span className="font-body text-xs text-brand-muted">
            {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
          </span>
          <div className="flex gap-2 flex-wrap mt-2.5 mb-3.5">
            {post.categories.map((cat) => (
              <span key={cat} className="text-[10px] font-heading tracking-[1px] uppercase text-accent-light bg-accent/10 px-2.5 py-1 rounded">{cat}</span>
            ))}
          </div>
          <h3 className="font-heading text-[17px] font-bold leading-snug mb-2.5 text-brand-text group-hover:text-accent-light transition-colors duration-300">{post.title}</h3>
          <p className="font-body text-sm leading-relaxed text-brand-muted">{post.excerpt}</p>
          <span className="inline-block mt-4 font-heading text-[11px] font-semibold tracking-[2px] uppercase text-accent-light">Read More →</span>
        </div>
      </article>
    </Link>
  );
}
