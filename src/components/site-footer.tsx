import { Github, Twitter, Mail } from 'lucide-react';
import { Button } from './ui/button';

export function SiteFooter() {
  return (
    <footer id="contact" className="mt-20 rounded-t-2xl bg-secondary py-20 px-6 text-center">
      <div className="container mx-auto max-w-4xl">
        <h2 className="mb-8 text-4xl font-bold text-foreground">
          Let's build something great.
        </h2>
        <div className="mb-10 flex justify-center gap-4">
          <Button asChild size="lg">
            <a href="https://linkedin.com/in/harsain" target="_blank" rel="noopener noreferrer">
              Contact Me on LinkedIn
            </a>
          </Button>
        </div>
        <div className="mb-10 flex justify-center gap-8 text-foreground">
          <a href="#" className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            <Github className="h-5 w-5" />
            <span>GitHub</span>
          </a>
          <a href="#" className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            <Twitter className="h-5 w-5" />
            <span>Twitter</span>
          </a>
          <a href="mailto:test@example.com" className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            <Mail className="h-5 w-5" />
            <span>Email</span>
          </a>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Har Sain. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
