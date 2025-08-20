import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { Button } from './ui/button';
import { Link } from './ui/link';
import { BlogPost } from './ui/custom-components';
import { ArrowLeft } from 'lucide-react';

// Sample blog categories and tags data
const BLOG_CATEGORIES = {
  'tutorials': {
    name: 'Tutorials',
    description: 'Step-by-step guides to help you master cross stitching techniques and create beautiful projects.',
    posts: ['beginners-guide-to-cross-stitching', 'creating-custom-patterns-from-family-photos'],
    relatedCategories: ['techniques', 'materials']
  },
  'materials': {
    name: 'Materials',
    description: 'Everything you need to know about cross stitch fabrics, threads, needles, and other essential supplies.',
    posts: ['how-to-choose-the-right-fabric', 'understanding-dmc-thread-colors-and-alternatives'],
    relatedCategories: ['tutorials', 'techniques']
  },
  'design': {
    name: 'Design',
    description: 'Tips and principles for creating beautiful, balanced, and professional cross stitch patterns.',
    posts: ['color-theory-for-cross-stitch-patterns'],
    relatedCategories: ['tutorials', 'inspiration']
  },
  'techniques': {
    name: 'Techniques',
    description: 'Advanced methods and special stitches to take your cross stitch projects to the next level.',
    posts: ['advanced-techniques-backstitching'],
    relatedCategories: ['tutorials', 'materials']
  },
  'inspiration': {
    name: 'Inspiration',
    description: 'Creative ideas, project showcases, and inspiration for your next cross stitch adventure.',
    posts: ['top-10-cross-stitch-pattern-ideas-for-beginners'],
    relatedCategories: ['design', 'tutorials']
  },
  'history': {
    name: 'History',
    description: 'Explore the rich cultural heritage and fascinating history of cross stitch around the world.',
    posts: ['history-of-cross-stitch-around-the-world'],
    relatedCategories: ['inspiration']
  },
  'finishing': {
    name: 'Finishing',
    description: 'Learn how to properly finish, frame, and display your completed cross stitch projects.',
    posts: ['how-to-frame-your-finished-cross-stitch-projects'],
    relatedCategories: ['techniques', 'tutorials']
  }
};

const BLOG_TAGS = {
  'beginners': {
    name: 'Beginners',
    posts: ['beginners-guide-to-cross-stitching', 'top-10-cross-stitch-pattern-ideas-for-beginners']
  },
  'fabric': {
    name: 'Fabric',
    posts: ['how-to-choose-the-right-fabric']
  },
  'color-theory': {
    name: 'Color Theory',
    posts: ['color-theory-for-cross-stitch-patterns']
  },
  'backstitching': {
    name: 'Backstitching',
    posts: ['advanced-techniques-backstitching']
  },
  'framing': {
    name: 'Framing',
    posts: ['how-to-frame-your-finished-cross-stitch-projects']
  },
  'dmc': {
    name: 'DMC Threads',
    posts: ['understanding-dmc-thread-colors-and-alternatives']
  },
  'history': {
    name: 'History',
    posts: ['history-of-cross-stitch-around-the-world']
  }
};

// Sample blog post data - simplified version for listing
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

const BlogCategoryPage: React.FC = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const category = categorySlug ? BLOG_CATEGORIES[categorySlug as keyof typeof BLOG_CATEGORIES] : null;
  
  if (!category) {
    return (
      <div className="py-12 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Category not found</h1>
        <p className="mt-4 text-gray-600">The blog category you're looking for doesn't exist or has been moved.</p>
        <Button asChild className="mt-6">
          <Link href="/blog">Back to Blog</Link>
        </Button>
      </div>
    );
  }

  // Get posts for this category
  const categoryPosts = category.posts.map(slug => BLOG_POSTS[slug as keyof typeof BLOG_POSTS]).filter(Boolean);

  return (
    <>
      <Helmet>
        <title>{category.name} | Cross Stitch Pattern Maker Blog</title>
        <meta name="description" content={category.description} />
        <meta name="keywords" content={`cross stitch, ${category.name.toLowerCase()}, patterns, guides, tips`} />
        <link rel="canonical" href={`https://crossstitchpatternmaker.com/blog/category/${categorySlug}`} />
      </Helmet>

      {/* Category Header */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Button variant="ghost" size="sm" asChild className="mb-4 hover:bg-white/50">
              <Link href="/blog" className="flex items-center text-gray-600">
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back to Blog
              </Link>
            </Button>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{category.name}</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl">
              {category.description}
            </p>
          </div>
        </div>
      </section>

      {/* Category Posts */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {categoryPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryPosts.map((post) => (
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
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-gray-900">No articles found</h3>
              <p className="mt-2 text-gray-600">There are currently no articles in this category.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                asChild
              >
                <Link href="/blog">View all articles</Link>
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Related Categories */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Categories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {category.relatedCategories.map(relatedSlug => {
              const relatedCategory = BLOG_CATEGORIES[relatedSlug as keyof typeof BLOG_CATEGORIES];
              if (!relatedCategory) return null;
              
              return (
                <div key={relatedSlug} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold mb-2">
                    <Link href={`/blog/category/${relatedSlug}`} className="text-primary hover:underline">
                      {relatedCategory.name}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4">{relatedCategory.description}</p>
                  <Link 
                    href={`/blog/category/${relatedSlug}`} 
                    className="text-primary hover:underline inline-flex items-center font-medium"
                  >
                    View articles 
                    <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white">Stay Updated</h2>
          <p className="mt-2 text-white/90">
            Subscribe to our newsletter for the latest articles in {category.name.toLowerCase()} and other cross stitch topics.
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

export default BlogCategoryPage;
