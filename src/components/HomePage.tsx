import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from './ui/button';
import { Link } from './ui/link';
import { 
  FeatureCard, 
  Testimonial, 
  NewsletterForm, 
  BlogPost 
} from './ui/custom-components';
import { 
  Image, 
  Palette, 
  Sliders, 
  Download, 
  Share2, 
  Users, 
  BookOpen,
  Sparkles
} from 'lucide-react';

const HomePage: React.FC = () => {
  const handleNewsletterSubmit = (email: string) => {
    console.log('Newsletter subscription:', email);
    // In a real implementation, this would send the email to a backend service
  };

  return (
    <>
      <Helmet>
        <title>Cross Stitch Pattern Maker | Create Beautiful Patterns from Photos</title>
        <meta name="description" content="Transform your photos into beautiful cross stitch patterns with our easy-to-use online tool. Customize colors, size, and more with our professional pattern maker." />
        <meta name="keywords" content="cross stitch pattern maker, photo to cross stitch, DMC thread colors, cross stitch design, pattern generator" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 to-primary/5 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                Transform Your Photos Into Beautiful Cross Stitch Patterns
              </h1>
              <p className="text-lg text-gray-600">
                Our professional pattern maker helps you create stunning cross stitch designs from your photos in seconds. Customize colors, size, and more with our easy-to-use tools.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="font-medium">
                  Create Your Pattern
                </Button>
                <Button variant="outline" size="lg" className="font-medium">
                  View Examples
                </Button>
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="ml-2">4.9/5 from 2,500+ reviews</span>
                </div>
                <div>10,000+ patterns created</div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full"></div>
              <div className="relative bg-white p-2 rounded-lg shadow-xl">
                <img 
                  src="/images/hero-pattern-example.jpg" 
                  alt="Cross stitch pattern example" 
                  className="w-full h-auto rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Powerful Features for Perfect Patterns</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Our cross stitch pattern maker is packed with professional tools to help you create stunning, customized patterns.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<Image className="h-6 w-6" />}
              title="Photo to Pattern"
              description="Upload any image and convert it to a cross stitch pattern with accurate DMC thread color matching."
            />
            <FeatureCard 
              icon={<Palette className="h-6 w-6" />}
              title="Color Customization"
              description="Adjust colors, reduce color count, and choose from DMC, Anchor, or Madeira thread palettes."
            />
            <FeatureCard 
              icon={<Sliders className="h-6 w-6" />}
              title="Size & Detail Control"
              description="Set your preferred fabric count and adjust pattern dimensions for the perfect level of detail."
            />
            <FeatureCard 
              icon={<Download className="h-6 w-6" />}
              title="Multiple Export Options"
              description="Download your pattern as PDF with symbols, color chart, and material requirements."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Creating your custom cross stitch pattern is easy with our simple 3-step process.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">1</div>
              <div className="h-48 bg-gray-100 rounded-md mb-4 flex items-center justify-center">
                <svg className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Upload Your Image</h3>
              <p className="text-gray-600">
                Start by uploading your favorite photo, artwork, or design. We accept JPG, PNG, and other common formats.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">2</div>
              <div className="h-48 bg-gray-100 rounded-md mb-4 flex items-center justify-center">
                <svg className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Customize Settings</h3>
              <p className="text-gray-600">
                Adjust pattern size, color count, fabric type, and other settings to match your project needs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">3</div>
              <div className="h-48 bg-gray-100 rounded-md mb-4 flex items-center justify-center">
                <svg className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Download Your Pattern</h3>
              <p className="text-gray-600">
                Generate and download your pattern as a PDF with color chart, symbols, and material list.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg">Create Your Pattern Now</Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">What Our Users Say</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Join thousands of satisfied stitchers who have created beautiful patterns with our tool.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Testimonial 
              quote="This is the best cross stitch pattern maker I've ever used. The color matching is spot on, and the patterns are so easy to follow!"
              author="Sarah Johnson"
              role="Avid Cross Stitcher"
            />
            <Testimonial 
              quote="I love how I can customize every aspect of my pattern. The ability to adjust colors and see the changes in real-time is amazing."
              author="Michael Chen"
              role="Craft Store Owner"
            />
            <Testimonial 
              quote="As a professional pattern designer, I'm impressed with the quality and accuracy. This tool has become an essential part of my workflow."
              author="Emma Williams"
              role="Pattern Designer"
            />
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Cross Stitch Blog</h2>
              <p className="mt-2 text-lg text-gray-600">
                Tips, tutorials, and inspiration for your next project.
              </p>
            </div>
            <Link href="/blog" className="text-primary hover:underline font-medium flex items-center">
              View all posts
              <svg className="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BlogPost 
              title="Beginner's Guide to Cross Stitching"
              excerpt="Learn the basics of cross stitching with our comprehensive guide for beginners. We cover everything from choosing materials to completing your first project."
              slug="beginners-guide-to-cross-stitching"
              coverImage="/images/blog/beginners-guide.jpg"
              date="June 15, 2025"
              category="Tutorials"
            />
            <BlogPost 
              title="How to Choose the Right Fabric"
              excerpt="Discover the different types of fabrics and how to select the best one for your cross stitch project. We compare Aida, evenweave, and linen options."
              slug="how-to-choose-the-right-fabric"
              coverImage="/images/blog/fabric-guide.jpg"
              date="June 10, 2025"
              category="Materials"
            />
            <BlogPost 
              title="Color Theory for Cross Stitch Patterns"
              excerpt="Understanding color theory can help you create more vibrant and harmonious cross stitch patterns. Learn about color wheels, schemes, and combinations."
              slug="color-theory-for-cross-stitch-patterns"
              coverImage="/images/blog/color-theory.jpg"
              date="June 5, 2025"
              category="Design"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white">Ready to Create Your Custom Pattern?</h2>
              <p className="mt-4 text-lg text-white/90">
                Join thousands of stitchers who have transformed their photos into beautiful cross stitch patterns.
              </p>
              <div className="mt-8">
                <Button size="lg" variant="secondary">
                  Start Creating Now
                </Button>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <NewsletterForm onSubmit={handleNewsletterSubmit} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
