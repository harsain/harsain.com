
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Bot } from 'lucide-react';
import { Logo } from '@/components/icons';
import { cn } from '@/lib/utils';
import { profileData } from '@/lib/data';

const navLinks = [
  { href: '/#home', label: 'Home' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#blog', label: 'Blog' },
  { href: '/#contact', label: 'Contact' },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const NavLink = ({ href, label, className = '' }: { href: string; label: string, className?: string; }) => (
    <Link
      href={href}
      onClick={() => setIsOpen(false)}
      className={cn(
        'transition-colors hover:text-foreground/80 text-foreground/60',
        (pathname === href || (href !== '/#home' && pathname.startsWith(href))) ? 'text-foreground' : '',
        className
      )}
    >
      {label}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block">
              {profileData.name}
            </span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            {navLinks.map((link) => (
              <NavLink key={link.href} {...link} />
            ))}
          </nav>
        </div>

        {/* Mobile Nav */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="mb-6 flex items-center space-x-2"
            >
              <Logo className="h-6 w-6" />
              <span className="font-bold">{profileData.name}</span>
            </Link>
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <NavLink key={link.href} {...link} className="text-lg" />
              ))}
               <NavLink href="/ai-content-optimizer" label="AI Optimizer" className="text-lg pt-4 border-t" />
            </div>
          </SheetContent>
        </Sheet>
        
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
             <Link href="/" className="flex items-center space-x-2 md:hidden">
                <Logo className="h-6 w-6" />
                <span className="font-bold">{profileData.name}</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-4">
            <Button asChild variant="ghost" size="icon">
              <Link href="/ai-content-optimizer" title="AI Content Optimizer">
                <Bot className="h-5 w-5" />
                <span className="sr-only">AI Content Optimizer</span>
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
