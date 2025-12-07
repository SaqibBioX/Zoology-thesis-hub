import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Leaf } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-primary text-primary-foreground shadow-md sticky top-0 z-50">
      <div className="container flex items-center justify-between h-16">
        {/* Logo & Brand */}
        <Link href="/" className="flex items-center gap-2 font-bold text-lg hover:opacity-80 transition-opacity">
          <Leaf className="w-6 h-6" />
          <span>ZooThesis Nepal</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="hover:text-primary-foreground/80 transition-colors">
            Home
          </Link>
          <Link href="/proposal-guide" className="hover:text-primary-foreground/80 transition-colors">
            Proposal Guide
          </Link>
          <Link href="/resources" className="hover:text-primary-foreground/80 transition-colors">
            Resources
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="sm"
            className="text-primary-foreground hover:bg-primary/90"
          >
            Menu
          </Button>
        </div>
      </div>
    </header>
  );
}
