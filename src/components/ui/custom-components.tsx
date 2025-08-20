import React from 'react';
import { Card, CardContent } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { FileUpload, Image, Palette, Sliders, Download, Share2, Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

interface BlogPostProps {
  title: string;
  excerpt: string;
  slug: string;
  coverImage: string;
  date: string;
  category: string;
}

const BlogPost: React.FC<BlogPostProps> = ({
  title,
  excerpt,
  slug,
  coverImage,
  date,
  category
}) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={coverImage} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded-full">
          {category}
        </div>
      </div>
      <CardContent className="p-5">
        <div className="text-sm text-gray-500 mb-2">{date}</div>
        <h3 className="font-bold text-lg mb-2 line-clamp-2 hover:text-primary transition-colors">
          <a href={`/blog/${slug}`} className="hover:underline">{title}</a>
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
        <a 
          href={`/blog/${slug}`} 
          className="text-primary hover:underline inline-flex items-center font-medium"
        >
          Read more 
          <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </CardContent>
    </Card>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
          {icon}
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  avatar?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, role, avatar }) => {
  return (
    <Card className="border-none shadow-md">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <div className="mr-4">
            {avatar ? (
              <img src={avatar} alt={author} className="h-12 w-12 rounded-full object-cover" />
            ) : (
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">
                {author.charAt(0)}
              </div>
            )}
          </div>
          <div>
            <div className="font-semibold">{author}</div>
            <div className="text-sm text-gray-500">{role}</div>
          </div>
        </div>
        <div className="relative">
          <svg className="absolute -top-2 -left-2 h-6 w-6 text-primary/30" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className="text-gray-600 italic pl-6">{quote}</p>
        </div>
      </CardContent>
    </Card>
  );
};

interface ColorPaletteProps {
  colors: {
    code: string;
    name: string;
    hex: string;
  }[];
}

const ColorPalette: React.FC<ColorPaletteProps> = ({ colors }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
      {colors.map((color) => (
        <TooltipProvider key={color.code}>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex flex-col items-center">
                <div 
                  className="h-12 w-12 rounded-full border border-gray-200 mb-1" 
                  style={{ backgroundColor: color.hex }}
                ></div>
                <div className="text-xs font-medium">{color.code}</div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>{color.name}</p>
              <p className="text-xs">{color.hex}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  );
};

interface PatternStatsProps {
  stitchCount: number;
  colorCount: number;
  dimensions: string;
  estimatedTime: string;
}

const PatternStats: React.FC<PatternStatsProps> = ({ stitchCount, colorCount, dimensions, estimatedTime }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="bg-gray-50 p-4 rounded-lg text-center">
        <div className="text-2xl font-bold text-primary">{stitchCount.toLocaleString()}</div>
        <div className="text-sm text-gray-500">Total Stitches</div>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg text-center">
        <div className="text-2xl font-bold text-primary">{colorCount}</div>
        <div className="text-sm text-gray-500">Colors Used</div>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg text-center">
        <div className="text-2xl font-bold text-primary">{dimensions}</div>
        <div className="text-sm text-gray-500">Dimensions</div>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg text-center">
        <div className="text-2xl font-bold text-primary">{estimatedTime}</div>
        <div className="text-sm text-gray-500">Est. Time</div>
      </div>
    </div>
  );
};

interface NewsletterFormProps {
  onSubmit: (email: string) => void;
}

const NewsletterForm: React.FC<NewsletterFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = React.useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email);
    setEmail('');
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="text-lg font-semibold">Subscribe to our Newsletter</h3>
      <p className="text-gray-600">Get the latest cross stitch tips, patterns, and updates delivered to your inbox.</p>
      <div className="flex flex-col sm:flex-row gap-2">
        <Input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-grow"
        />
        <Button type="submit">Subscribe</Button>
      </div>
    </form>
  );
};

interface ContactFormProps {
  onSubmit: (data: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="subject">Subject</Label>
        <Input
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <Button type="submit" className="w-full">Send Message</Button>
    </form>
  );
};

export {
  BlogPost,
  FeatureCard,
  Testimonial,
  ColorPalette,
  PatternStats,
  NewsletterForm,
  ContactForm
};
