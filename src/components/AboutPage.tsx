import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from './ui/link';
import { Button } from './ui/button';
import { FeatureCard } from './ui/custom-components';
import { Users, BookOpen, Award, History } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Cross Stitch Pattern Maker</title>
        <meta name="description" content="Learn about the team behind Cross Stitch Pattern Maker, our mission, and what makes our pattern creation tool unique." />
        <meta name="keywords" content="cross stitch pattern maker, about us, cross stitch tool, pattern creator team" />
      </Helmet>

      {/* About Header */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">About Cross Stitch Pattern Maker</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              The story behind our mission to create the best cross stitch pattern tool for crafters around the world.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full"></div>
              <div className="relative bg-white p-2 rounded-lg shadow-xl">
                <img 
                  src="/images/about/team-photo.jpg" 
                  alt="Our team" 
                  className="w-full h-auto rounded"
                />
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
              <p className="text-lg text-gray-600">
                Cross Stitch Pattern Maker was born from a passion for needlework and technology. Our founder, an avid cross stitcher, was frustrated with the limitations of existing pattern creation tools and decided to build something better—a tool that would be powerful enough for professionals but intuitive enough for beginners.
              </p>
              <p className="text-lg text-gray-600">
                What started as a personal project in 2020 quickly grew into a team effort as other crafters and developers joined the mission. Today, our diverse team combines expertise in software development, design, and traditional crafts to create the most user-friendly and powerful cross stitch pattern maker available.
              </p>
              <p className="text-lg text-gray-600">
                We're proud to have helped thousands of stitchers around the world bring their creative visions to life, from personal keepsakes to professional designs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              We believe that cross stitching is not just a craft but a form of artistic expression and a way to preserve memories and traditions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<Users className="h-6 w-6" />}
              title="Empower Creators"
              description="We provide tools that empower stitchers of all skill levels to bring their creative visions to life."
            />
            <FeatureCard 
              icon={<BookOpen className="h-6 w-6" />}
              title="Share Knowledge"
              description="We're committed to sharing tutorials, tips, and resources to help the cross stitch community grow and thrive."
            />
            <FeatureCard 
              icon={<Award className="h-6 w-6" />}
              title="Ensure Quality"
              description="We strive for excellence in every pattern, with accurate color matching and clear, easy-to-follow designs."
            />
            <FeatureCard 
              icon={<History className="h-6 w-6" />}
              title="Preserve Tradition"
              description="We honor the rich history of cross stitch while embracing modern technology to keep the craft vibrant and relevant."
            />
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Meet Our Team</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Our diverse team combines expertise in software development, design, and traditional crafts.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="relative mx-auto w-40 h-40 rounded-full overflow-hidden mb-4">
                <img 
                  src="/images/about/team-member-1.jpg" 
                  alt="Sarah Johnson" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Sarah Johnson</h3>
              <p className="text-primary font-medium">Founder & CEO</p>
              <p className="mt-2 text-gray-600">
                Cross stitch enthusiast with 15+ years of experience and a background in software development.
              </p>
            </div>
            
            {/* Team Member 2 */}
            <div className="text-center">
              <div className="relative mx-auto w-40 h-40 rounded-full overflow-hidden mb-4">
                <img 
                  src="/images/about/team-member-2.jpg" 
                  alt="Michael Chen" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Michael Chen</h3>
              <p className="text-primary font-medium">Lead Developer</p>
              <p className="mt-2 text-gray-600">
                Full-stack developer with a passion for creating intuitive, user-friendly interfaces.
              </p>
            </div>
            
            {/* Team Member 3 */}
            <div className="text-center">
              <div className="relative mx-auto w-40 h-40 rounded-full overflow-hidden mb-4">
                <img 
                  src="/images/about/team-member-3.jpg" 
                  alt="Emma Williams" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Emma Williams</h3>
              <p className="text-primary font-medium">Pattern Designer</p>
              <p className="mt-2 text-gray-600">
                Professional pattern designer with a degree in textile arts and 10+ years in the industry.
              </p>
            </div>
            
            {/* Team Member 4 */}
            <div className="text-center">
              <div className="relative mx-auto w-40 h-40 rounded-full overflow-hidden mb-4">
                <img 
                  src="/images/about/team-member-4.jpg" 
                  alt="David Rodriguez" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">David Rodriguez</h3>
              <p className="text-primary font-medium">Customer Support</p>
              <p className="mt-2 text-gray-600">
                Dedicated to helping users get the most out of their cross stitch pattern maker experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Our Values</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold">Quality</h3>
                    <p className="text-gray-600">We're committed to creating the highest quality patterns with accurate colors and clear symbols.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold">Innovation</h3>
                    <p className="text-gray-600">We continuously improve our tools and features to meet the evolving needs of cross stitchers.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold">Community</h3>
                    <p className="text-gray-600">We foster a supportive community where stitchers can share ideas, get help, and celebrate their work.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold">Accessibility</h3>
                    <p className="text-gray-600">We strive to make our tools accessible to everyone, regardless of technical skill level or experience.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-white p-2 rounded-lg shadow-md">
                <img 
                  src="/images/about/value-1.jpg" 
                  alt="Quality cross stitch pattern" 
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <div className="aspect-square bg-white p-2 rounded-lg shadow-md">
                <img 
                  src="/images/about/value-2.jpg" 
                  alt="Innovation in cross stitch" 
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <div className="aspect-square bg-white p-2 rounded-lg shadow-md">
                <img 
                  src="/images/about/value-3.jpg" 
                  alt="Cross stitch community" 
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <div className="aspect-square bg-white p-2 rounded-lg shadow-md">
                <img 
                  src="/images/about/value-4.jpg" 
                  alt="Accessible cross stitch tools" 
                  className="w-full h-full object-cover rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Join Our Community</h2>
          <p className="mt-4 text-xl text-white/90 max-w-3xl mx-auto">
            Be part of our growing community of cross stitch enthusiasts. Create beautiful patterns, share your work, and connect with fellow stitchers.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary">
              Create Your First Pattern
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
