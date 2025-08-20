import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from './ui/link';
import { Button } from './ui/button';
import { BlogPost } from './ui/custom-components';
import { Search, Filter, ArrowRight } from 'lucide-react';

// Sample blog post data - in a real implementation, this would come from a database or API
const BLOG_POSTS = {
  'beginners-guide-to-cross-stitching': {
    title: "Beginner's Guide to Cross Stitching",
    excerpt: "Learn the basics of cross stitching with our comprehensive guide for beginners. We cover everything from choosing materials to completing your first project.",
    slug: "beginners-guide-to-cross-stitching",
    coverImage: "/images/blog/beginners-guide.jpg",
    date: "June 15, 2025",
    author: "Sarah Johnson",
    category: "Tutorials",
    tags: ["beginners", "tutorial", "basics", "getting started"]
  },
  'how-to-choose-the-right-fabric': {
    title: "How to Choose the Right Fabric for Your Cross Stitch Project",
    excerpt: "Discover the different types of fabrics and how to select the best one for your cross stitch project. We compare Aida, evenweave, and linen options.",
    slug: "how-to-choose-the-right-fabric",
    coverImage: "/images/blog/fabric-guide.jpg",
    date: "June 10, 2025",
    author: "Emma Williams",
    category: "Materials",
    tags: ["fabric", "aida", "evenweave", "linen", "materials"]
  },
  'color-theory-for-cross-stitch-patterns': {
    title: "Color Theory for Cross Stitch Patterns",
    excerpt: "Understanding color theory can help you create more vibrant and harmonious cross stitch patterns. Learn about color wheels, schemes, and combinations.",
    slug: "color-theory-for-cross-stitch-patterns",
    coverImage: "/images/blog/color-theory.jpg",
    date: "June 5, 2025",
    author: "Michael Chen",
    category: "Design",
    tags: ["color theory", "design", "color schemes", "pattern design"]
  },
  'advanced-techniques-backstitching': {
    title: "Advanced Techniques: Backstitching",
    excerpt: "Take your cross stitch projects to the next level with these backstitching techniques. Learn how to add detail and definition to your designs.",
    slug: "advanced-techniques-backstitching",
    coverImage: "/images/blog/backstitching.jpg",
    date: "May 28, 2025",
    author: "Emma Williams",
    category: "Techniques",
    tags: ["backstitching", "advanced", "techniques", "detailing"]
  },
  'creating-custom-patterns-from-family-photos': {
    title: "Creating Custom Patterns from Family Photos",
    excerpt: "Transform your cherished family photos into meaningful cross stitch patterns. This guide walks you through the process step by step.",
    slug: "creating-custom-patterns-from-family-photos",
    coverImage: "/images/blog/family-photos.jpg",
    date: "May 20, 2025",
    author: "Sarah Johnson",
    category: "Tutorials",
    tags: ["photos", "custom patterns", "family", "personalization"]
  },
  'history-of-cross-stitch-around-the-world': {
    title: "The History of Cross Stitch Around the World",
    excerpt: "Explore the rich history of cross stitch across different cultures and time periods. From ancient Egypt to modern day crafting.",
    slug: "history-of-cross-stitch-around-the-world",
    coverImage: "/images/blog/history.jpg",
    date: "May 15, 2025",
    author: "David Rodriguez",
    category: "History",
    tags: ["history", "cultural", "traditional", "heritage"]
  },
  'top-10-cross-stitch-pattern-ideas-for-beginners': {
    title: "Top 10 Cross Stitch Pattern Ideas for Beginners",
    excerpt: "Looking for your first project? Here are 10 simple yet rewarding cross stitch patterns perfect for beginners to build confidence and skills.",
    slug: "top-10-cross-stitch-pattern-ideas-for-beginners",
    coverImage: "/images/blog/beginner-patterns.jpg",
    date: "May 8, 2025",
    author: "Sarah Johnson",
    category: "Inspiration",
    tags: ["beginners", "patterns", "ideas", "projects"]
  },
  'how-to-frame-your-finished-cross-stitch-projects': {
    title: "How to Frame Your Finished Cross Stitch Projects",
    excerpt: "Learn professional framing techniques to display your finished cross stitch projects. From selecting frames to proper mounting methods.",
    slug: "how-to-frame-your-finished-cross-stitch-projects",
    coverImage: "/images/blog/framing.jpg",
    date: "May 1, 2025",
    author: "Michael Chen",
    category: "Finishing",
    tags: ["framing", "finishing", "display", "preservation"]
  },
  'understanding-dmc-thread-colors-and-alternatives': {
    title: "Understanding DMC Thread Colors and Alternatives",
    excerpt: "A comprehensive guide to DMC thread colors and how they compare to other brands like Anchor and Madeira. Find the perfect match for your projects.",
    slug: "understanding-dmc-thread-colors-and-alternatives",
    coverImage: "/images/blog/thread-colors.jpg",
    date: "April 25, 2025",
    author: "Emma Williams",
    category: "Materials",
    tags: ["dmc", "threads", "colors", "anchor", "madeira"]
  }
};

// Sample blog categories
const BLOG_CATEGORIES = {
  'tutorials': {
    name: 'Tutorials',
    description: 'Step-by-step guides to help you master cross stitching techniques and create beautiful projects.'
  },
  'materials': {
    name: 'Materials',
    description: 'Everything you need to know about cross stitch fabrics, threads, needles, and other essential supplies.'
  },
  'design': {
    name: 'Design',
    description: 'Tips and principles for creating beautiful, balanced, and professional cross stitch patterns.'
  },
  'techniques': {
    name: 'Techniques',
    description: 'Advanced methods and special stitches to take your cross stitch projects to the next level.'
  },
  'inspiration': {
    name: 'Inspiration',
    description: 'Creative ideas, project showcases, and inspiration for your next cross stitch adventure.'
  },
  'history': {
    name: 'History',
    description: 'Explore the rich cultural heritage and fascinating history of cross stitch around the world.'
  },
  'finishing': {
    name: 'Finishing',
    description: 'Learn how to properly finish, frame, and display your completed cross stitch projects.'
  }
};

const BlogPage: React.FC = () => {
  const postsArray = Object.values(BLOG_POSTS);
  const categoriesArray = Object.entries(BLOG_CATEGORIES);
  
  // Get featured posts (most recent 3)
  const featuredPosts = [...postsArray].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  }).slice(0, 3);
  
  // Get remaining posts
  const remainingPosts = [...postsArray].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  }).slice(3);

  return (
    <>
      <Helmet>
        <title>Cross Stitch Blog | Tips, Tutorials & Inspiration | Cross Stitch Pattern Maker</title>
        <meta name="description" content="Explore our cross stitch blog for beginner tutorials, advanced techniques, design tips, and inspiration for your next project." />
        <meta name="keywords" content="cross stitch blog, cross stitch tutorials, cross stitch patterns, DMC threads, cross stitch techniques" />
        <link rel="canonical" href="https://crossstitchpatternmaker.com/blog" />
      </Helmet>

      {/* Blog Header */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Cross Stitch Blog</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Tutorials, tips, and inspiration to help you create beautiful cross stitch projects.
            </p>
            
            {/* Search Bar */}
            <div className="mt-8 max-w-md mx-auto">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm"
                  placeholder="Search articles..."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <BlogPost
                key={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                slug={post.slug}
                coverImage={post.coverImage}
                date={post.date}
                category={post.category}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Categories</h2>
            <Button variant="ghost" size="sm" className="text-primary">
              View All
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoriesArray.slice(0, 4).map(([slug, category]) => (
              <div key={slug} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-2">
                  <Link href={`/blog/category/${slug}`} className="text-primary hover:underline">
                    {category.name}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{category.description}</p>
                <Link 
                  href={`/blog/category/${slug}`} 
                  className="text-primary hover:underline inline-flex items-center font-medium"
                >
                  View articles 
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Latest Articles</h2>
            <div className="flex items-center">
              <Button variant="outline" size="sm" className="flex items-center mr-2">
                <Filter className="h-4 w-4 mr-1" />
                Filter
              </Button>
              <select className="border border-gray-300 rounded-md text-sm px-3 py-1.5">
                <option>Most Recent</option>
                <option>Most Popular</option>
                <option>A-Z</option>
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {remainingPosts.map((post) => (
              <BlogPost
                key={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                slug={post.slug}
                coverImage={post.coverImage}
                date={post.date}
                category={post.category}
              />
            ))}
          </div>
          
          <div className="mt-12 flex justify-center">
            <Button variant="outline">Load More Articles</Button>
          </div>
        </div>
      </section>

      {/* Popular Tags */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Tags</h2>
          
          <div className="flex flex-wrap gap-3">
            <Link href="/blog/tag/beginners" className="bg-white hover:bg-gray-100 text-gray-800 px-4 py-2 rounded-full border border-gray-200 transition-colors">
              #beginners
            </Link>
            <Link href="/blog/tag/fabric" className="bg-white hover:bg-gray-100 text-gray-800 px-4 py-2 rounded-full border border-gray-200 transition-colors">
              #fabric
            </Link>
            <Link href="/blog/tag/dmc" className="bg-white hover:bg-gray-100 text-gray-800 px-4 py-2 rounded-full border border-gray-200 transition-colors">
              #dmc
            </Link>
            <Link href="/blog/tag/patterns" className="bg-white hover:bg-gray-100 text-gray-800 px-4 py-2 rounded-full border border-gray-200 transition-colors">
              #patterns
            </Link>
            <Link href="/blog/tag/techniques" className="bg-white hover:bg-gray-100 text-gray-800 px-4 py-2 rounded-full border border-gray-200 transition-colors">
              #techniques
            </Link>
            <Link href="/blog/tag/tutorials" className="bg-white hover:bg-gray-100 text-gray-800 px-4 py-2 rounded-full border border-gray-200 transition-colors">
              #tutorials
            </Link>
            <Link href="/blog/tag/framing" className="bg-white hover:bg-gray-100 text-gray-800 px-4 py-2 rounded-full border border-gray-200 transition-colors">
              #framing
            </Link>
            <Link href="/blog/tag/color-theory" className="bg-white hover:bg-gray-100 text-gray-800 px-4 py-2 rounded-full border border-gray-200 transition-colors">
              #color-theory
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white">Join Our Newsletter</h2>
          <p className="mt-2 text-white/90">
            Subscribe to get the latest cross stitch tips, patterns, and tutorials delivered straight to your inbox.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-2 rounded-md border-0 focus:ring-2 focus:ring-white"
            />
            <Button variant="secondary">Subscribe</Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
