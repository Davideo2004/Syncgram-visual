import type { ReactNode } from "react";

export type TocItem = {
  id: string;
  label: string;
};

type BlogPostProps = {
  title: string;
  intro?: string;
  children: ReactNode;
  toc?: TocItem[];
  author?: {
    name: string;
    title?: string;
    avatar?: ReactNode;
  };
  publishedDate?: string;
};

export function BlogPost({ title, intro, children, toc, author, publishedDate }: BlogPostProps) {
  return (
    <article className="container-max grid gap-[var(--space-4)] py-[var(--space-5)] lg:grid-cols-[3fr_1fr]">
      <div className="space-y-[var(--space-3)]">
        <header className="space-y-4">
          <h1 className="text-display-lg text-text">{title}</h1>
          {intro && <p className="text-body text-muted">{intro}</p>}
          {(author || publishedDate) && (
            <div className="flex items-center gap-3 text-small text-muted">
              {author?.avatar}
              <div>
                <p className="font-medium text-text">{author?.name}</p>
                <p>{author?.title}</p>
              </div>
              {publishedDate && <time dateTime={publishedDate}>{publishedDate}</time>}
            </div>
          )}
        </header>
        <div className="prose prose-neutral max-w-none text-body text-text">{children}</div>
      </div>
      {toc && toc.length > 0 && (
        <aside className="hidden lg:block">
          <div className="sticky top-28 space-y-3 rounded-[var(--radius-base)] border border-black/10 bg-white p-[var(--space-3)] shadow-soft">
            <span className="u-alerts-typography text-small text-muted">On this page</span>
            <nav className="flex flex-col gap-2 text-body text-muted">
              {toc.map((item) => (
                <a key={item.id} href={`#${item.id}`} className="hover:text-text focus-visible:text-text">
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </aside>
      )}
    </article>
  );
}

