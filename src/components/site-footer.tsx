import { Github, Linkedin, Twitter, Logo } from './icons';
import { profileData } from '@/lib/data';

const socialLinks = [
  { name: 'GitHub', icon: Github, url: 'https://github.com/harsain' },
  { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/harsain' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/harsain' },
];

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border/40">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Logo />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {currentYear} {profileData.name}. All Rights Reserved.
          </p>
        </div>
        <div className="flex items-center space-x-4">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <social.icon className="h-6 w-6" />
              <span className="sr-only">{social.name}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
