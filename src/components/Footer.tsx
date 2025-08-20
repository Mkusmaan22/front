import React from 'react';
import { Link } from './ui/link';
import { Button } from './ui/button';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Cross Stitch Pattern Maker</h3>
            <p className="text-gray-300 mb-4">
              Create beautiful cross stitch patterns from your photos with our easy-to-use, professional pattern maker tool.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-300 hover:text-white">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" className="text-gray-300 hover:text-white">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" className="text-gray-300 hover:text-white">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" className="text-gray-300 hover:text-white">
                <span className="sr-only">YouTube</span>
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">Home</Link>
              </li>
              <li>
                <Link href="/pattern-maker" className="text-gray-300 hover:text-white">Pattern Maker</Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white">Blog</Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-white">FAQ</Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog/category/tutorials" className="text-gray-300 hover:text-white">Tutorials</Link>
              </li>
              <li>
                <Link href="/blog/category/materials" className="text-gray-300 hover:text-white">Materials Guide</Link>
              </li>
              <li>
                <Link href="/blog/category/design" className="text-gray-300 hover:text-white">Design Tips</Link>
              </li>
              <li>
                <Link href="/dmc-color-chart" className="text-gray-300 hover:text-white">DMC Color Chart</Link>
              </li>
              <li>
                <Link href="/blog/beginners-guide-to-cross-stitching" className="text-gray-300 hover:text-white">Beginner's Guide</Link>
              </li>
              <li>
                <Link href="/blog/category/techniques" className="text-gray-300 hover:text-white">Advanced Techniques</Link>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-gray-300 mr-2 mt-0.5" />
                <span className="text-gray-300">support@crossstitchpatternmaker.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-gray-300 mr-2 mt-0.5" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gray-300 mr-2 mt-0.5" />
                <span className="text-gray-300">123 Stitch Street, Craftville, CR 12345, United States</span>
              </li>
            </ul>
            <div className="mt-4">
              <Button asChild variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Newsletter */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold">Subscribe to our newsletter</h3>
              <p className="text-gray-300">Get the latest cross stitch tips, patterns, and tutorials.</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded-l-md border-0 focus:ring-2 focus:ring-primary w-full md:w-auto"
              />
              <Button className="rounded-l-none">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Footer */}
      <div className="bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Cross Stitch Pattern Maker. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-white text-sm">
                Terms of Service
              </Link>
              <Link href="/disclaimer" className="text-gray-400 hover:text-white text-sm">
                Disclaimer
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-white text-sm">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
