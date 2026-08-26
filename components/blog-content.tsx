import { Check } from "lucide-react";
import type { BlogContentBlock } from "@/lib/blog";

export function BlogContent({ blocks }: { blocks: BlogContentBlock[] }) {
  return (
    <div className="space-y-6 text-foreground/70 text-lg leading-relaxed">
      {blocks.map((block, i) => {
        if (block.type === "h2") {
          return (
            <h2 key={i} className="!mt-12 text-2xl font-semibold text-foreground tracking-tight">
              {block.text}
            </h2>
          );
        }
        if (block.type === "ul") {
          return (
            <ul key={i} className="space-y-3">
              {block.items.map((item, j) => (
                <li key={j} className="flex items-start gap-3">
                  <span className="mt-1.5 flex-shrink-0 w-4 h-4 rounded-full bg-accent-blue/15 border border-accent-blue/30 flex items-center justify-center">
                    <Check className="w-2.5 h-2.5 text-accent-blue" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          );
        }
        return <p key={i}>{block.text}</p>;
      })}
    </div>
  );
}
