import React, { useState, useMemo } from 'react';
import { Search, Menu, X, Sun, Moon, Clock, User, Calendar, Eye, ChevronRight, Star, TrendingUp, BookOpen, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLocalStorage } from 'react-use';

// Import images
import heroTechImage from '@/assets/hero-tech.jpg';
import heroWritingImage from '@/assets/hero-writing.jpg';
import heroDesignImage from '@/assets/hero-design.jpg';
import postTechTipsImage from '@/assets/post-tech-tips.jpg';
import postWritingGuideImage from '@/assets/post-writing-guide.jpg';
import postDesignTrendsImage from '@/assets/post-design-trends.jpg';

// Blog post data structure
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  publishDate: string;
  readTime: number;
  viewCount: number;
  category: string;
  image: string;
  featured: boolean;
  tags: string[];
}

// Sample blog data
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "10 Essential Writing Tips for Modern Bloggers",
    excerpt: "Master the art of engaging content creation with these proven techniques that will transform your writing and captivate your audience.",
    author: "Sarah Chen",
    publishDate: "2024-01-20",
    readTime: 8,
    viewCount: 2847,
    category: "Writing Tips",
    image: postWritingGuideImage,
    featured: true,
    tags: ["writing", "blogging", "content", "tips"]
  },
  {
    id: 2,
    title: "The Future of Web Design: Trends Shaping 2024",
    excerpt: "Explore the cutting-edge design trends that are revolutionizing user experiences and setting new standards for digital creativity.",
    author: "Alex Rodriguez",
    publishDate: "2024-01-18",
    readTime: 12,
    viewCount: 3521,
    category: "Design",
    image: postDesignTrendsImage,
    featured: true,
    tags: ["design", "trends", "UX", "UI"]
  },
  {
    id: 3,
    title: "Building Your Personal Brand as a Writer",
    excerpt: "Learn how to establish a compelling online presence that showcases your unique voice and attracts the right opportunities.",
    author: "Maya Patel",
    publishDate: "2024-01-15",
    readTime: 6,
    viewCount: 1923,
    category: "Industry News",
    image: heroWritingImage,
    featured: false,
    tags: ["branding", "writing", "marketing", "career"]
  },
  {
    id: 4,
    title: "Optimizing Your Writing Workflow with Technology",
    excerpt: "Discover the best tools and techniques to streamline your writing process and boost your productivity significantly.",
    author: "David Kim",
    publishDate: "2024-01-12",
    readTime: 10,
    viewCount: 2156,
    category: "Technology",
    image: postTechTipsImage,
    featured: true,
    tags: ["productivity", "tools", "workflow", "technology"]
  },
  {
    id: 5,
    title: "The Psychology of Reader Engagement",
    excerpt: "Understand what makes readers click, stay, and share your content with psychological insights that drive engagement.",
    author: "Dr. Emily Watson",
    publishDate: "2024-01-10",
    readTime: 9,
    viewCount: 2789,
    category: "Writing Tips",
    image: heroDesignImage,
    featured: false,
    tags: ["psychology", "engagement", "readers", "content strategy"]
  },
  {
    id: 6,
    title: "Monetizing Your Blog: A Comprehensive Guide",
    excerpt: "Transform your passion for writing into a sustainable income stream with proven monetization strategies and real-world examples.",
    author: "Jessica Martinez",
    publishDate: "2024-01-08",
    readTime: 15,
    viewCount: 4231,
    category: "Industry News",
    image: heroTechImage,
    featured: false,
    tags: ["monetization", "business", "blogging", "income"]
  }
];

const categories = ["All", "Writing Tips", "Design", "Technology", "Industry News"];

const Index = () => {
  const [isDarkMode, setIsDarkMode] = useLocalStorage('writerrr-dark-mode', false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'popular'>('newest');

  // Apply dark mode class to document
  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Filter and sort posts
  const filteredPosts = useMemo(() => {
    let filtered = blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'oldest':
          return new Date(a.publishDate).getTime() - new Date(b.publishDate).getTime();
        case 'popular':
          return b.viewCount - a.viewCount;
        case 'newest':
        default:
          return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
      }
    });
  }, [searchQuery, selectedCategory, sortBy]);

  const featuredPosts = blogPosts.filter(post => post.featured).slice(0, 3);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Writing Tips': return <BookOpen className="w-4 h-4" />;
      case 'Technology': return <Code className="w-4 h-4" />;
      case 'Design': return <Star className="w-4 h-4" />;
      case 'Industry News': return <TrendingUp className="w-4 h-4" />;
      default: return <BookOpen className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background transition-smooth">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold hero-gradient bg-clip-text text-transparent">
                writerrr
              </h1>
              <nav className="hidden md:flex space-x-6">
                <a href="#" className="text-foreground hover:text-primary transition-smooth">Home</a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">About</a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Categories</a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Contact</a>
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="transition-bounce"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 animate-slide-up">
              <nav className="flex flex-col space-y-2">
                <a href="#" className="text-foreground hover:text-primary transition-smooth p-2">Home</a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-smooth p-2">About</a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-smooth p-2">Categories</a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-smooth p-2">Contact</a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="hero-gradient py-20 md:py-32">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto animate-fade-in">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Elevate Your Writing,
                <br />
                <span className="text-primary-glow">Share Your Voice</span>
              </h2>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Discover insights, tips, and inspiration from the world's most passionate writers.
                Join our community and transform your creative journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="font-semibold">
                  Start Reading
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                  Join Newsletter
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <main className="flex-1">
            {/* Featured Articles */}
            <section className="mb-16">
              <h3 className="text-3xl font-bold mb-8 flex items-center">
                <Star className="w-8 h-8 mr-3 text-primary" />
                Featured Articles
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredPosts.map((post, index) => (
                  <Card key={post.id} className={`blog-card blog-card-hover cursor-pointer animate-fade-in`} style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover transition-smooth hover:scale-110"
                      />
                      <Badge className="absolute top-4 left-4" variant="secondary">
                        {getCategoryIcon(post.category)}
                        <span className="ml-1">{post.category}</span>
                      </Badge>
                    </div>
                    <CardContent className="p-6">
                      <h4 className="text-xl font-bold mb-3 line-clamp-2 hover:text-primary transition-smooth">
                        {post.title}
                      </h4>
                      <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center space-x-4">
                          <span className="flex items-center">
                            <User className="w-4 h-4 mr-1" />
                            {post.author}
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {post.readTime}m
                          </span>
                        </div>
                        <span className="flex items-center">
                          <Eye className="w-4 h-4 mr-1" />
                          {post.viewCount.toLocaleString()}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Search and Filters */}
            <section className="mb-8">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <Input
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                      className="transition-bounce"
                    >
                      {category !== 'All' && getCategoryIcon(category)}
                      <span className={category !== 'All' ? 'ml-1' : ''}>{category}</span>
                    </Button>
                  ))}
                </div>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                  className="px-3 py-2 border rounded-md bg-background text-foreground"
                >
                  <option value="newest">Newest</option>
                  <option value="oldest">Oldest</option>
                  <option value="popular">Most Popular</option>
                </select>
              </div>
            </section>

            {/* Blog Feed */}
            <section>
              <h3 className="text-2xl font-bold mb-8">
                All Articles ({filteredPosts.length})
              </h3>
              
              {filteredPosts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-xl text-muted-foreground">No articles found matching your criteria.</p>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('All');
                    }}
                    className="mt-4"
                  >
                    Clear Filters
                  </Button>
                </div>
              ) : (
                <div className="grid gap-8">
                  {filteredPosts.map((post, index) => (
                    <Card key={post.id} className={`blog-card blog-card-hover cursor-pointer animate-slide-up`} style={{ animationDelay: `${index * 0.05}s` }}>
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/3">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-48 md:h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none transition-smooth hover:scale-105"
                          />
                        </div>
                        <CardContent className="md:w-2/3 p-6">
                          <div className="flex items-center gap-2 mb-3">
                            <Badge variant="secondary">
                              {getCategoryIcon(post.category)}
                              <span className="ml-1">{post.category}</span>
                            </Badge>
                            {post.featured && (
                              <Badge variant="default">
                                <Star className="w-3 h-3 mr-1" />
                                Featured
                              </Badge>
                            )}
                          </div>
                          
                          <h4 className="text-2xl font-bold mb-3 hover:text-primary transition-smooth">
                            {post.title}
                          </h4>
                          
                          <p className="text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                          
                          <div className="flex items-center justify-between text-sm text-muted-foreground">
                            <div className="flex items-center space-x-4">
                              <span className="flex items-center">
                                <User className="w-4 h-4 mr-1" />
                                {post.author}
                              </span>
                              <span className="flex items-center">
                                <Calendar className="w-4 h-4 mr-1" />
                                {formatDate(post.publishDate)}
                              </span>
                              <span className="flex items-center">
                                <Clock className="w-4 h-4 mr-1" />
                                {post.readTime}m read
                              </span>
                            </div>
                            <span className="flex items-center">
                              <Eye className="w-4 h-4 mr-1" />
                              {post.viewCount.toLocaleString()} views
                            </span>
                          </div>
                          
                          <div className="flex flex-wrap gap-2 mt-4">
                            {post.tags.map((tag) => (
                              <Badge key={tag} variant="outline" className="text-xs">
                                #{tag}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </section>
          </main>

          {/* Sidebar */}
          <aside className="w-full lg:w-80 space-y-8">
            {/* Author Bio */}
            <Card className="blog-card">
              <CardHeader>
                <h4 className="font-bold text-lg">About the Team</h4>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We're a passionate team of writers, designers, and technologists dedicated to sharing knowledge and inspiring creativity in the digital age.
                </p>
                <Button variant="outline" className="w-full">
                  Meet the Team
                </Button>
              </CardContent>
            </Card>

            {/* Recent Posts */}
            <Card className="blog-card">
              <CardHeader>
                <h4 className="font-bold text-lg">Recent Posts</h4>
              </CardHeader>
              <CardContent className="space-y-4">
                {blogPosts.slice(0, 4).map((post) => (
                  <div key={post.id} className="flex space-x-3 cursor-pointer hover:bg-muted/50 p-2 rounded-lg transition-smooth">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h5 className="font-medium text-sm line-clamp-2 hover:text-primary transition-smooth">
                        {post.title}
                      </h5>
                      <p className="text-xs text-muted-foreground mt-1">
                        {formatDate(post.publishDate)}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <Card className="blog-card accent-gradient">
              <CardContent className="p-6">
                <h4 className="font-bold text-lg mb-3">Stay Updated</h4>
                <p className="text-muted-foreground mb-4 text-sm">
                  Get the latest writing tips and industry insights delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <Input placeholder="Enter your email" />
                  <Button className="w-full">
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t bg-muted/30">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4 hero-gradient bg-clip-text text-transparent">
                writerrr
              </h3>
              <p className="text-muted-foreground text-sm">
                Empowering writers with insights, tools, and inspiration for the digital age.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Writing Tips</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Design</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Technology</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Industry News</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">About</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Contact</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Privacy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Terms</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Twitter</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">LinkedIn</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Instagram</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Medium</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 writerrr. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;