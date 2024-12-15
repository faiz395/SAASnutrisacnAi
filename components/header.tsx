"use client"

import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const { theme, setTheme } = useTheme();
  const [isMobileMenuOpen, setisMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setisMobileMenuOpen(!isMobileMenuOpen); // Toggle mobile menu visibility
  };

  return (
    <header className="  sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center max-w-7xl mx-auto max-sm:px-4 py-3">
        <div className="mr-4 hidden md:flex">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <span className="hidden font-bold sm:inline-block">NutriScan AI</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link className="transition-colors hover:text-foreground/80 text-foreground/60" href="#features">Features</Link>
            <Link className="transition-colors hover:text-foreground/80 text-foreground/60" href="#pricing">Pricing</Link>
            <Link className="transition-colors hover:text-foreground/80 text-foreground/60" href="#testimonials">Testimonials</Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end ">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            className="mr-6"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button variant="ghost" className='max-sm:hidden'>Sign In</Button>
          <Button className='max-sm:hidden'>Sign Up</Button>
          {/* Mobile Menu Toggle Button */}
          <Button onClick={toggleMobileMenu} className="md:hidden">
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <nav className="md:hidden px-4 py-2">
          <ul className="flex flex-col space-y-2">
            <li>
              <Link className="block transition-colors hover:text-foreground/80 text-foreground/60" href="#features">Features</Link>
            </li>
            <li>
              <Link className="block transition-colors hover:text-foreground/80 text-foreground/60" href="#pricing">Pricing</Link>
            </li>
            <li>
              <Link className="block transition-colors hover:text-foreground/80 text-foreground/60" href="#testimonials">Testimonials</Link>
            </li>
            <Button variant="ghost">Sign In</Button>
          <Button>Sign Up</Button>
          </ul>
        </nav>
      )}
    </header>
  )
}

