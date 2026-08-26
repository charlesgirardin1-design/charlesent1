import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/data";
import { BlogContent } from "@/components/blog-content";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/magnetic";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "ProfessionalService", name: siteConfig.name, url: siteConfig.url },
    publisher: { "@type": "ProfessionalService", name: siteConfig.name, url: siteConfig.url },
    url: `${siteConfig.url}/blog/${post.slug}`,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteConfig.url}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${siteConfig.url}/blog/${post.slug}` },
    ],
  };

  return (
    <div className="mx-auto max-w-3xl px-6 py-32 md:py-40">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm text-foreground/50 hover:text-foreground transition-colors mb-10"
      >
        <ArrowLeft className="w-4 h-4" />
        Retour au blog
      </Link>

      <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-wider text-accent-blue mb-4">
        <span>{post.category}</span>
        <span className="text-foreground/30">·</span>
        <span className="text-foreground/40">{formatDate(post.date)}</span>
        <span className="text-foreground/30">·</span>
        <span className="text-foreground/40">{post.readingTime}</span>
      </div>

      <h1 className="text-[clamp(1.8rem,4.5vw,3rem)] font-semibold tracking-tight mb-10">
        {post.title}
      </h1>

      <BlogContent blocks={post.content} />

      <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-4 rounded-2xl border border-surface-border bg-surface p-8">
        <div className="flex-1">
          <p className="text-sm text-foreground/50 mb-1">Un projet en tête ?</p>
          <p className="text-lg font-medium">Discutons-en, sans engagement.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Magnetic>
            <Link href="/devis">
              <Button size="lg">
                Estimer mon projet
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </Magnetic>
          <Link href="/contact">
            <Button variant="outline" size="lg">
              Me contacter
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
