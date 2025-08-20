import React, { useState } from 'react';
import './App.css';
import ImageUploader from './components/ImageUploader';
import PatternSettings, { PatternSettings as PatternSettingsType } from './components/PatternSettings';
import PatternPreview from './components/PatternPreview';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { Button } from './components/ui/button';
import { Link } from './components/ui/link';
import { Home, Info, Mail, FileText, BookOpen } from 'lucide-react';

function App() {
  const [imageData, setImageData] = useState<string | null>(null);
  const [settings, setSettings] = useState<PatternSettingsType>({
    width: 100,
    height: 100,
    colorCount: 30,
    fabricCount: 14,
    threadType: 'dmc',
    includeBackstitch: true,
  });
  const [patternData, setPatternData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>('tool');

  const handleImageSelected = (data: string) => {
    setImageData(data);
    setPatternData(null); // Reset pattern when new image is selected
    setError(null);
  };

  const handleSettingsChange = (newSettings: PatternSettingsType) => {
    setSettings(newSettings);
    // Optionally regenerate pattern if auto-update is enabled
  };

  const generatePattern = async () => {
    if (!imageData) {
      setError('Please upload an image first');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // In production, this would be a configurable API endpoint
      const apiUrl = process.env.NODE_ENV === 'production' 
        ? '/api/generate-pattern' 
        : 'http://localhost:5000/api/generate-pattern';
        
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          imageData,
          settings,
        }),
      });

      if (!response.ok) {
        throw new Error(`Server responded with status: ${response.status}`);
      }

      const data = await response.json();
      setPatternData(data.pattern);
    } catch (err) {
      setError(`Failed to generate pattern: ${err instanceof Error ? err.message : String(err)}`);
      console.error('Error generating pattern:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow sticky top-0 z-10">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl md:text-3xl font-bold text-primary">Cross Stitch Pattern Maker</h1>
            <nav className="hidden md:flex space-x-4">
              <Link href="#" onClick={() => setActiveTab('tool')} className={activeTab === 'tool' ? 'text-primary font-medium' : 'text-gray-500 hover:text-gray-700'}>Pattern Maker</Link>
              <Link href="#" onClick={() => setActiveTab('blog')} className={activeTab === 'blog' ? 'text-primary font-medium' : 'text-gray-500 hover:text-gray-700'}>Blog</Link>
              <Link href="#" onClick={() => setActiveTab('about')} className={activeTab === 'about' ? 'text-primary font-medium' : 'text-gray-500 hover:text-gray-700'}>About</Link>
              <Link href="#" onClick={() => setActiveTab('contact')} className={activeTab === 'contact' ? 'text-primary font-medium' : 'text-gray-500 hover:text-gray-700'}>Contact</Link>
            </nav>
            <div className="md:hidden">
              <Button variant="ghost" size="sm">
                <span className="sr-only">Open menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="hidden">
            <TabsTrigger value="tool">Pattern Maker</TabsTrigger>
            <TabsTrigger value="blog">Blog</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
            <TabsTrigger value="privacy">Privacy Policy</TabsTrigger>
            <TabsTrigger value="terms">Terms</TabsTrigger>
          </TabsList>
          
          <TabsContent value="tool" className="px-4 py-6 sm:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <ImageUploader onImageSelected={handleImageSelected} />
                <PatternSettings onSettingsChange={handleSettingsChange} />
                
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative" role="alert">
                    <span className="block sm:inline">{error}</span>
                  </div>
                )}
                
                <Button
                  onClick={generatePattern}
                  disabled={!imageData || isLoading}
                  className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white 
                    ${!imageData || isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'}`}
                >
                  {isLoading ? 'Generating...' : 'Generate Pattern'}
                </Button>
              </div>
              
              <div>
                <PatternPreview patternData={patternData} isLoading={isLoading} />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="blog" className="px-4 py-6 sm:px-0">
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-6">Cross Stitch Blog</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-lg overflow-hidden">
                  <div className="h-48 bg-gray-200"></div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2">Beginner's Guide to Cross Stitching</h3>
                    <p className="text-gray-600 mb-4">Learn the basics of cross stitching with our comprehensive guide for beginners.</p>
                    <Link href="/blog/beginners-guide-to-cross-stitching" className="text-primary hover:underline">Read more →</Link>
                  </div>
                </div>
                
                <div className="border rounded-lg overflow-hidden">
                  <div className="h-48 bg-gray-200"></div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2">How to Choose the Right Fabric</h3>
                    <p className="text-gray-600 mb-4">Discover the different types of fabrics and how to select the best one for your project.</p>
                    <Link href="/blog/how-to-choose-the-right-fabric" className="text-primary hover:underline">Read more →</Link>
                  </div>
                </div>
                
                <div className="border rounded-lg overflow-hidden">
                  <div className="h-48 bg-gray-200"></div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2">Color Theory for Cross Stitch Patterns</h3>
                    <p className="text-gray-600 mb-4">Understanding color theory can help you create more vibrant and harmonious cross stitch patterns.</p>
                    <Link href="/blog/color-theory-for-cross-stitch-patterns" className="text-primary hover:underline">Read more →</Link>
                  </div>
                </div>
                
                <div className="border rounded-lg overflow-hidden">
                  <div className="h-48 bg-gray-200"></div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2">Advanced Techniques: Backstitching</h3>
                    <p className="text-gray-600 mb-4">Take your cross stitch projects to the next level with these backstitching techniques.</p>
                    <Link href="/blog/advanced-techniques-backstitching" className="text-primary hover:underline">Read more →</Link>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <Button variant="outline">View All Blog Posts</Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="about" className="px-4 py-6 sm:px-0">
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-6">About Cross Stitch Pattern Maker</h2>
              
              <div className="prose max-w-none">
                <p>Welcome to Cross Stitch Pattern Maker, the premier online tool for creating beautiful, customized cross stitch patterns from your own images.</p>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">Our Story</h3>
                <p>Cross Stitch Pattern Maker was born from a passion for needlework and technology. Our founder, an avid cross stitcher, was frustrated with the limitations of existing pattern creation tools and decided to build something better—a tool that would be powerful enough for professionals but intuitive enough for beginners.</p>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">What Makes Us Different</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Advanced color matching with DMC, Anchor, and Madeira thread colors</li>
                  <li>Intelligent image processing for clearer, more accurate patterns</li>
                  <li>Customizable settings for different fabric counts and project sizes</li>
                  <li>Symbol and color view options for easier stitching</li>
                  <li>Mobile-responsive design for creating patterns on any device</li>
                </ul>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">Our Mission</h3>
                <p>We believe that cross stitching is not just a craft but a form of artistic expression. Our mission is to provide tools that empower stitchers to bring their creative visions to life, whether they're crafting personal keepsakes or professional designs.</p>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">Join Our Community</h3>
                <p>We're more than just a pattern maker—we're a community of cross stitch enthusiasts. Follow us on social media, subscribe to our newsletter, or check out our blog for tips, tutorials, and inspiration.</p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="contact" className="px-4 py-6 sm:px-0">
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                      <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50" />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                      <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50" />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                      <input type="text" id="subject" name="subject" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50" />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                      <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"></textarea>
                    </div>
                    
                    <div>
                      <Button type="submit" className="w-full">Send Message</Button>
                    </div>
                  </form>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
                  <p className="text-gray-600 mb-6">Have questions, feedback, or need support? We're here to help! Fill out the form or reach out to us directly using the information below.</p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-primary mt-1 mr-3" />
                      <div>
                        <h4 className="font-medium">Email</h4>
                        <p className="text-gray-600">support@crossstitchpatternmaker.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Home className="h-5 w-5 text-primary mt-1 mr-3" />
                      <div>
                        <h4 className="font-medium">Address</h4>
                        <p className="text-gray-600">123 Stitch Street<br />Craftville, CR 12345<br />United States</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Info className="h-5 w-5 text-primary mt-1 mr-3" />
                      <div>
                        <h4 className="font-medium">Business Hours</h4>
                        <p className="text-gray-600">Monday - Friday: 9am - 5pm EST<br />Saturday - Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                      <a href="#" className="text-gray-400 hover:text-primary">
                        <span className="sr-only">Facebook</span>
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                        </svg>
                      </a>
                      <a href="#" className="text-gray-400 hover:text-primary">
                        <span className="sr-only">Instagram</span>
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                        </svg>
                      </a>
                      <a href="#" className="text-gray-400 hover:text-primary">
                        <span className="sr-only">Twitter</span>
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                      <a href="#" className="text-gray-400 hover:text-primary">
                        <span className="sr-only">Pinterest</span>
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 19c-.721 0-1.418-.109-2.073-.312.286-.465.713-1.227.87-1.835l.437-1.664c.229.436.895.804 1.604.804 2.111 0 3.633-1.941 3.633-4.354 0-2.312-1.888-4.042-4.316-4.042-3.021 0-4.625 2.027-4.625 4.235 0 1.027.547 2.305 1.422 2.712.132.062.203.034.234-.094l.193-.793c.017-.071.009-.132-.049-.202-.288-.35-.521-.995-.521-1.597 0-1.544 1.169-3.038 3.161-3.038 1.72 0 2.924 1.172 2.924 2.848 0 1.894-.957 3.205-2.201 3.205-.687 0-1.201-.568-1.036-1.265.197-.833.58-1.73.58-2.331 0-.537-.288-.986-.886-.986-.702 0-1.268.727-1.268 1.7 0 .621.211 1.04.211 1.04s-.694 2.934-.821 3.479c-.142.605-.086 1.454-.025 2.008-2.603-1.02-4.448-3.553-4.448-6.518 0-3.866 3.135-7 7-7s7 3.134 7 7-3.135 7-7 7z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="privacy" className="px-4 py-6 sm:px-0">
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-6">Privacy Policy</h2>
              
              <div className="prose max-w-none">
                <p>Last updated: June 24, 2025</p>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">Introduction</h3>
                <p>Cross Stitch Pattern Maker ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our pattern creation service.</p>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">Information We Collect</h3>
                <p>We collect information that you provide directly to us when you:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Create an account</li>
                  <li>Upload images for pattern creation</li>
                  <li>Contact us</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Participate in surveys or promotions</li>
                </ul>
                
                <p>This information may include:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Name and email address</li>
                  <li>Images you upload</li>
                  <li>Pattern preferences and settings</li>
                  <li>Payment information (processed by our secure payment providers)</li>
                </ul>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">How We Use Your Information</h3>
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process and complete transactions</li>
                  <li>Send you technical notices and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Develop new products and services</li>
                  <li>Monitor and analyze trends and usage</li>
                </ul>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">Cookies and Tracking Technologies</h3>
                <p>We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">Data Security</h3>
                <p>We implement appropriate technical and organizational measures to protect the security of your personal information. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure.</p>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">Your Rights</h3>
                <p>Depending on your location, you may have certain rights regarding your personal information, such as:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Access to your personal information</li>
                  <li>Correction of inaccurate information</li>
                  <li>Deletion of your information</li>
                  <li>Restriction of processing</li>
                  <li>Data portability</li>
                </ul>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">Changes to This Privacy Policy</h3>
                <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.</p>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">Contact Us</h3>
                <p>If you have any questions about this Privacy Policy, please contact us at privacy@crossstitchpatternmaker.com.</p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="terms" className="px-4 py-6 sm:px-0">
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-6">Terms of Service</h2>
              
              <div className="prose max-w-none">
                <p>Last updated: June 24, 2025</p>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">Agreement to Terms</h3>
                <p>By accessing or using Cross Stitch Pattern Maker, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">Use License</h3>
                <p>Permission is granted to temporarily use the Cross Stitch Pattern Maker for personal, non-commercial use only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose</li>
                  <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                  <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                </ul>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">User Content</h3>
                <p>When you upload images or create patterns using our service:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>You retain all ownership rights to your content</li>
                  <li>You grant us a non-exclusive license to use, store, and display your content for the purpose of providing our services</li>
                  <li>You are responsible for ensuring you have the necessary rights to upload and use any images</li>
                </ul>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">Disclaimer</h3>
                <p>The materials on Cross Stitch Pattern Maker are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">Limitations</h3>
                <p>In no event shall Cross Stitch Pattern Maker or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the website, even if we or an authorized representative has been notified orally or in writing of the possibility of such damage.</p>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">Governing Law</h3>
                <p>These terms and conditions are governed by and construed in accordance with the laws of the United States, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.</p>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">Changes to Terms</h3>
                <p>We reserve the right to modify these terms at any time. By using this website, you are agreeing to be bound by the current version of these Terms of Service.</p>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">Contact Us</h3>
                <p>If you have any questions about these Terms of Service, please contact us at terms@crossstitchpatternmaker.com.</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Cross Stitch Pattern Maker</h3>
              <p className="text-gray-600 text-sm">Create beautiful cross stitch patterns from your photos with our easy-to-use online tool.</p>
            </div>
            
            <div>
              <h3 className="text-md font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" onClick={() => setActiveTab('tool')} className="text-gray-600 hover:text-primary">Pattern Maker</Link></li>
                <li><Link href="#" onClick={() => setActiveTab('blog')} className="text-gray-600 hover:text-primary">Blog</Link></li>
                <li><Link href="#" onClick={() => setActiveTab('about')} className="text-gray-600 hover:text-primary">About Us</Link></li>
                <li><Link href="#" onClick={() => setActiveTab('contact')} className="text-gray-600 hover:text-primary">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-md font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" onClick={() => setActiveTab('privacy')} className="text-gray-600 hover:text-primary">Privacy Policy</Link></li>
                <li><Link href="#" onClick={() => setActiveTab('terms')} className="text-gray-600 hover:text-primary">Terms of Service</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-primary">Cookie Policy</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-primary">Disclaimer</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-md font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-600 text-sm mb-4">Subscribe to get updates, tips, and special offers.</p>
              <form className="flex">
                <input type="email" placeholder="Your email" className="px-3 py-2 border border-gray-300 rounded-l-md w-full focus:outline-none focus:ring-1 focus:ring-primary" />
                <Button type="submit" className="rounded-l-none">Subscribe</Button>
              </form>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">&copy; 2025 Cross Stitch Pattern Maker. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-primary">
                <span className="sr-only">Facebook</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <span className="sr-only">Instagram</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <span className="sr-only">Pinterest</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 19c-.721 0-1.418-.109-2.073-.312.286-.465.713-1.227.87-1.835l.437-1.664c.229.436.895.804 1.604.804 2.111 0 3.633-1.941 3.633-4.354 0-2.312-1.888-4.042-4.316-4.042-3.021 0-4.625 2.027-4.625 4.235 0 1.027.547 2.305 1.422 2.712.132.062.203.034.234-.094l.193-.793c.017-.071.009-.132-.049-.202-.288-.35-.521-.995-.521-1.597 0-1.544 1.169-3.038 3.161-3.038 1.72 0 2.924 1.172 2.924 2.848 0 1.894-.957 3.205-2.201 3.205-.687 0-1.201-.568-1.036-1.265.197-.833.58-1.73.58-2.331 0-.537-.288-.986-.886-.986-.702 0-1.268.727-1.268 1.7 0 .621.211 1.04.211 1.04s-.694 2.934-.821 3.479c-.142.605-.086 1.454-.025 2.008-2.603-1.02-4.448-3.553-4.448-6.518 0-3.866 3.135-7 7-7s7 3.134 7 7-3.135 7-7 7z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
