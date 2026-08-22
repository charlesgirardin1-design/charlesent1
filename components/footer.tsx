import { LinkedinIcon, GithubIcon, InstagramIcon } from "@/components/social-icons";
import { siteConfig, navLinks } from "@/lib/data";

const socials = [
  { icon: LinkedinIcon, href: "https://linkedin.com/company/kodarium", label: "LinkedIn" },
  { icon: GithubIcon, href: "https://github.com/kodarium", label: "GitHub" },
  { icon: InstagramIcon, href: "https://instagram.com/kodarium", label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-surface-border py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-10">
          <a href="#top" className="text-2xl font-semibold tracking-tight">
            {siteConfig.name}
            <span className="text-accent-blue">.</span>dev
          </a>
          <nav className="flex flex-wrap gap-6">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-white/50 hover:text-white transition-colors">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-10 h-10 rounded-full border border-surface-border flex items-center justify-center hover:border-accent-blue/50 hover:text-accent-blue transition-colors"
              >
                <s.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
        <div className="pt-8 border-t border-surface-border flex flex-col sm:flex-row justify-between gap-3 text-sm text-white/40">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Tous droits réservés. — Studio indépendant, micro-entreprise.
          </p>
          <a href="#mentions-legales" className="hover:text-white transition-colors">
            Mentions légales
          </a>
        </div>
      </div>
    </footer>
  );
}
