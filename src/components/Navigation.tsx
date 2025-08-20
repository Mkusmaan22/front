import React, { useState } from 'react';
import { Link } from './ui/link';
import { Button } from './ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isToolsDropdownOpen, setIsToolsDropdownOpen] = useState(false);
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and primary navigation */}
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center">
                <img 
                  className="h-8 w-auto" 
                  src="/images/logo.svg" 
                  alt="Cross Stitch Pattern Maker" 
                />
                <span className="ml-2 text-lg font-bold text-gray-900">Cross Stitch Pattern Maker</span>
              </Link>
            </div>
            
            {/* Desktop navigation */}
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link 
                href="/" 
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:border-primary hover:text-gray-700"
              >
                Home
              </Link>
              
              {/* Tools dropdown */}
              <div className="relative">
                <button
                  className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:border-primary hover:text-gray-700"
                  onClick={() => setIsToolsDropdownOpen(!isToolsDropdownOpen)}
                >
                  Tools
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                
                {isToolsDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1" role="menu" aria-orientation="vertical">
                      <Link 
                        href="/pattern-maker" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsToolsDropdownOpen(false)}
                      >
                        Pattern Maker
                      </Link>
                      <Link 
                        href="/color-converter" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsToolsDropdownOpen(false)}
                      >
                        DMC Color Converter
                      </Link>
                      <Link 
                        href="/fabric-calculator" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsToolsDropdownOpen(false)}
                      >
                        Fabric Calculator
                      </Link>
                      <Link 
                        href="/floss-organizer" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsToolsDropdownOpen(false)}
                      >
                        Floss Organizer
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              
              <Link 
                href="/blog" 
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:border-primary hover:text-gray-700"
              >
                Blog
              </Link>
              
              {/* Resources dropdown */}
              <div className="relative">
                <button
                  className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:border-primary hover:text-gray-700"
                  onClick={() => setIsResourcesDropdownOpen(!isResourcesDropdownOpen)}
                >
                  Resources
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                
                {isResourcesDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1" role="menu" aria-orientation="vertical">
                      <Link 
                        href="/blog/category/tutorials" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsResourcesDropdownOpen(false)}
                      >
                        Tutorials
                      </Link>
                      <Link 
                        href="/blog/category/materials" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsResourcesDropdownOpen(false)}
                      >
                        Materials Guide
                      </Link>
                      <Link 
                        href="/dmc-color-chart" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsResourcesDropdownOpen(false)}
                      >
                        DMC Color Chart
                      </Link>
                      <Link 
                        href="/faq" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsResourcesDropdownOpen(false)}
                      >
                        FAQ
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              
              <Link 
                href="/about" 
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:border-primary hover:text-gray-700"
              >
                About
              </Link>
              
              <Link 
                href="/contact" 
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:border-primary hover:text-gray-700"
              >
                Contact
              </Link>
            </div>
          </div>
          
          {/* Right side buttons */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Button variant="outline" size="sm" className="mr-2">
              Sign In
            </Button>
            <Button size="sm">
              Get Started
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link 
              href="/" 
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-primary hover:text-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            
            <button
              className="w-full text-left block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-primary hover:text-gray-800"
              onClick={() => {
                document.getElementById('mobile-tools-dropdown')?.classList.toggle('hidden');
              }}
            >
              Tools
              <ChevronDown className="inline ml-1 h-4 w-4" />
            </button>
            <div id="mobile-tools-dropdown" className="hidden pl-6 space-y-1">
              <Link 
                href="/pattern-maker" 
                className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-sm font-medium text-gray-500 hover:bg-gray-50 hover:border-primary hover:text-gray-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Pattern Maker
              </Link>
              <Link 
                href="/color-converter" 
                className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-sm font-medium text-gray-500 hover:bg-gray-50 hover:border-primary hover:text-gray-700"
                onClick={() => setIsMenuOpen(false)}
              >
                DMC Color Converter
              </Link>
              <Link 
                href="/fabric-calculator" 
                className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-sm font-medium text-gray-500 hover:bg-gray-50 hover:border-primary hover:text-gray-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Fabric Calculator
              </Link>
              <Link 
                href="/floss-organizer" 
                className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-sm font-medium text-gray-500 hover:bg-gray-50 hover:border-primary hover:text-gray-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Floss Organizer
              </Link>
            </div>
            
            <Link 
              href="/blog" 
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-primary hover:text-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            
            <button
              className="w-full text-left block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-primary hover:text-gray-800"
              onClick={() => {
                document.getElementById('mobile-resources-dropdown')?.classList.toggle('hidden');
              }}
            >
              Resources
              <ChevronDown className="inline ml-1 h-4 w-4" />
            </button>
            <div id="mobile-resources-dropdown" className="hidden pl-6 space-y-1">
              <Link 
                href="/blog/category/tutorials" 
                className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-sm font-medium text-gray-500 hover:bg-gray-50 hover:border-primary hover:text-gray-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Tutorials
              </Link>
              <Link 
                href="/blog/category/materials" 
                className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-sm font-medium text-gray-500 hover:bg-gray-50 hover:border-primary hover:text-gray-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Materials Guide
              </Link>
              <Link 
                href="/dmc-color-chart" 
                className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-sm font-medium text-gray-500 hover:bg-gray-50 hover:border-primary hover:text-gray-700"
                onClick={() => setIsMenuOpen(false)}
              >
                DMC Color Chart
              </Link>
              <Link 
                href="/faq" 
                className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-sm font-medium text-gray-500 hover:bg-gray-50 hover:border-primary hover:text-gray-700"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
            </div>
            
            <Link 
              href="/about" 
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-primary hover:text-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            
            <Link 
              href="/contact" 
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-primary hover:text-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
          
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-4">
              <Button variant="outline" size="sm" className="mr-2 w-full">
                Sign In
              </Button>
              <Button size="sm" className="w-full">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
