import { Link } from 'wouter';
import { Leaf } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground mt-16">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <Link href="/" className="flex items-center gap-2 font-bold text-lg mb-4 hover:opacity-80 transition-opacity">
              <Leaf className="w-6 h-6" />
              <span>ZooThesis Nepal</span>
            </Link>
            <p className="text-primary-foreground/80 text-sm">
              Helping B.Sc and M.Sc Zoology students discover suitable thesis topics tailored to their research constraints.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-primary-foreground/80 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/proposal-guide" className="hover:text-primary-foreground/80 transition-colors">
                  Proposal Guide
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-primary-foreground/80 transition-colors">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.cdztu.edu.np/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-foreground/80 transition-colors"
                >
                  CDZ Tribhuvan University
                </a>
              </li>
              <li>
                <a
                  href="https://www.nepjol.info/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-foreground/80 transition-colors"
                >
                  NepJOL
                </a>
              </li>
              <li>
                <a
                  href="https://scholar.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-foreground/80 transition-colors"
                >
                  Google Scholar
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-sm text-primary-foreground/80">
            © {currentYear} Nepal Zoology Thesis Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
