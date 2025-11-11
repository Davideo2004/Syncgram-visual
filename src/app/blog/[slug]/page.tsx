import type { Metadata } from "next";

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: params.slug.replace(/-/g, " "),
    description: "Blog post",
  };
}

export default function BlogPostPage({ params }: Props) {
  return (
    <article className="container-max py-[var(--space-5)]">
      <h1 className="text-h1 capitalize">{params.slug.replace(/-/g, " ")}</h1>
      <p className="mt-3 text-body text-muted">Post content placeholder.</p>
    </article>
  );
}

