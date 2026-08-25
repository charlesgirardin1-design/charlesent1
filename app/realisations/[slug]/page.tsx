import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import { ProjectHero } from "@/components/sections/project-hero";
import { AnimatedFeatureList } from "@/components/animated-feature-list";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div className="mx-auto max-w-3xl px-6 py-32 md:py-40">
      <Link
        href="/realisations"
        className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors mb-10"
      >
        <ArrowLeft className="w-4 h-4" />
        Retour aux réalisations
      </Link>

      <ProjectHero project={project} />

      {project.image && (
        <div className="mt-12 relative aspect-video rounded-2xl overflow-hidden border border-surface-border">
          <Image
            src={project.image}
            alt={`Aperçu du site ${project.title}`}
            fill
            sizes="(min-width: 768px) 768px, 100vw"
            className="object-cover"
          />
        </div>
      )}

      <div className="mt-14">
        <h2 className="text-lg font-semibold mb-6">Ce que propose le site</h2>
        <AnimatedFeatureList items={project.features} />
      </div>

      <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-4 rounded-2xl border border-surface-border bg-surface p-8">
        <div className="flex-1">
          <p className="text-sm text-white/50 mb-1">Un projet similaire en tête ?</p>
          <p className="text-lg font-medium">Discutons-en, sans engagement.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg">
              Visiter le site
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </a>
          <Link href="/devis">
            <Button size="lg">Estimer mon projet</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
