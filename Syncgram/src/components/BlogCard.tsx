import Link from "next/link";

type BlogCardProps = {
  title: string;
  slug: string;
  excerpt: string;
  tag?: string;
  author?: string;
  publishedDate?: string;
};

export function BlogCard({ title, slug, excerpt, tag, author, publishedDate }: BlogCardProps) {
  return (
    <article className="flex h-full flex-col gap-3 rounded-[var(--radius-base)] border border-black/5 bg-white p-[var(--space-3)] shadow-soft transition hover:-translate-y-1">
      {tag && <span className="u-alerts-typography text-small text-tealsync">{tag}</span>}
      <h3 className="text-h2 text-text">
        <Link href={`/blog/${slug}`}>{title}</Link>
      </h3>
      <p className="text-body text-muted">{excerpt}</p>
      <div className="mt-auto flex items-center justify-between text-small text-muted">
        <span>{author}</span>
        <time dateTime={publishedDate}>{publishedDate}</time>
      </div>
    </article>
  );
}

