import { useState, useEffect } from 'react';
import { FaUser, FaComments, FaChevronLeft, FaChevronRight, FaAngleDoubleUp, FaSearch, FaComment } from 'react-icons/fa';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredPosts, setFilteredPosts] = useState([]);
  const postsPerPage = 3;

  // All blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "The Rise of Sustainable Luxury Fashion",
      excerpt: "How top luxury brands are embracing sustainability without compromising on style and exclusivity.",
      date: "15",
      month: "Jan",
      image: "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      categories: ["Sustainability", "Luxury"],
      comments: 12,
      tags: ["luxury", "sustainable"]
    },
    {
      id: 2,
      title: "2023 Fall/Winter Fashion Trends You Need to Know",
      excerpt: "From oversized blazers to bold prints, discover the key trends dominating this season's runways.",
      date: "14",
      month: "Jan",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      categories: ["Trends", "Seasonal"],
      comments: 8,
      tags: ["trends", "seasonal"]
    },
    {
      id: 3,
      title: "Behind the Scenes: Crafting a Chanel Handbag",
      excerpt: "An exclusive look at the meticulous craftsmanship that goes into creating each iconic Chanel piece.",
      date: "12",
      month: "Jan",
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      categories: ["Luxury", "Craftsmanship"],
      comments: 15,
      tags: ["luxury", "craftsmanship"]
    },
    {
      id: 4,
      title: "Street Style Meets High Fashion: The New Era",
      excerpt: "How streetwear has influenced luxury fashion houses and created a new hybrid style movement.",
      date: "10",
      month: "Jan",
      image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      categories: ["Streetwear", "Trends"],
      comments: 5,
      tags: ["streetwear", "trends"]
    },
    {
      id: 5,
      title: "The Most Iconic Fashion Collaborations of All Time",
      excerpt: "From Louis Vuitton x Supreme to H&M x Balmain, we look back at the collaborations that changed fashion.",
      date: "08",
      month: "Jan",
      image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      categories: ["Collaborations", "History"],
      comments: 20,
      tags: ["collaborations", "history"]
    },
    {
      id: 6,
      title: "The Evolution of the Little Black Dress",
      excerpt: "Tracing the history of the most iconic fashion staple from Coco Chanel to modern reinterpretations.",
      date: "05",
      month: "Jan",
      image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      categories: ["History", "Luxury"],
      comments: 7,
      tags: ["history", "luxury"]
    },
    {
      id: 7,
      title: "Men's Fashion Week Highlights",
      excerpt: "The standout collections and trends from the latest Men's Fashion Week in Paris and Milan.",
      date: "03",
      month: "Jan",
      image: "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      categories: ["Trends", "Menswear"],
      comments: 9,
      tags: ["trends", "menswear"]
    },
    {
      id: 8,
      title: "How to Style Statement Jewelry",
      excerpt: "Expert tips on incorporating bold jewelry pieces into your everyday wardrobe.",
      date: "01",
      month: "Jan",
      image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      categories: ["Accessories", "Style Tips"],
      comments: 4,
      tags: ["accessories", "style"]
    },
    {
      id: 9,
      title: "The Return of 90s Fashion",
      excerpt: "Why 90s fashion is making a comeback and how to wear it with a modern twist.",
      date: "28",
      month: "Dec",
      image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      categories: ["Trends", "Vintage"],
      comments: 11,
      tags: ["trends", "vintage"]
    }
  ];

  const categories = [
    { name: "All", count: blogPosts.length },
    { name: "Luxury", count: blogPosts.filter(post => post.categories.includes("Luxury")).length },
    { name: "Trends", count: blogPosts.filter(post => post.categories.includes("Trends")).length },
    { name: "Sustainability", count: blogPosts.filter(post => post.categories.includes("Sustainability")).length },
    { name: "Streetwear", count: blogPosts.filter(post => post.categories.includes("Streetwear")).length },
    { name: "Accessories", count: blogPosts.filter(post => post.categories.includes("Accessories")).length },
    { name: "History", count: blogPosts.filter(post => post.categories.includes("History")).length }
  ];

  const recentPosts = [
    {
      title: "The Evolution of the Little Black Dress",
      date: "January 15, 2023",
      image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
    },
    {
      title: "Men's Fashion Week Highlights",
      date: "January 12, 2023",
      image: "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
    },
    {
      title: "How to Style Statement Jewelry",
      date: "January 10, 2023",
      image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
    },
    {
      title: "The Return of 90s Fashion",
      date: "January 8, 2023",
      image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
    }
  ];

  const tags = ["luxury", "trends", "sustainable", "streetwear", "accessories", "designer", "runway", "vintage", "craftsmanship", "history", "collaborations", "style"];

  const instagramPosts = [
    "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
  ];

  // Filter posts based on search query and active category
  useEffect(() => {
    let result = [...blogPosts];
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(post => 
        post.title.toLowerCase().includes(query) || 
        post.excerpt.toLowerCase().includes(query) ||
        post.categories.some(cat => cat.toLowerCase().includes(query)) ||
        post.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    // Filter by category
    if (activeCategory !== 'All') {
      result = result.filter(post => post.categories.includes(activeCategory));
    }
    
    setFilteredPosts(result);
    setCurrentPage(1); // Reset to first page when filters change
  }, [searchQuery, activeCategory]);

  // Handle search form submission
  const handleSearch = (e) => {
    e.preventDefault();
    // The useEffect will handle the filtering
  };

  // Handle category click
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  // Handle subscribe form submission
  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 3000);
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Get current posts for pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  return (
    <div className="bg-white text-gray-900">
      <Header />
      
      {/* Blog Header */}
      <header className="py-10 text-center bg-[#f3ead0]">
        <h1 className="text-3xl font-semibold">Fashion Blog</h1>
        <nav className="text-xs text-[#6b5e3c] mt-1">
          <ul className="inline-flex space-x-2 justify-center items-center">
            <li><a className="hover:text-red-400 transition-colors duration-200" href="/">Home</a></li>
            <li>|</li>
            <li><a className="hover:text-red-400 transition-colors duration-200" href="#">Blog</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content Area */}
      <div className="max-w-[full] ml-40 mr-40 px-4 sm:px-6 lg:px-8 py-10 flex flex-col lg:flex-row gap-10">
        <main className="flex-1 lg:col-span-8 space-y-10">
          {/* Blog posts */}
          {currentPosts.length > 0 ? (
            currentPosts.map((post) => (
              <article key={post.id} className="bg-white shadow-sm rounded-md overflow-hidden">
                <div className="relative">
                  <img 
                    alt={post.title} 
                    className="w-full h-96 object-cover" 
                    src={post.image}
                  />
                  <div className="absolute bottom-6 left-6 bg-red-600 text-white rounded-md w-16 h-20 flex flex-col items-center justify-center font-semibold">
                    <span className="text-2xl leading-none">{post.date}</span>
                    <span className="text-xs leading-none">{post.month}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="font-bold text-lg text-gray-900 mb-2">{post.title}</h2>
                  <p className="text-gray-700 text-sm mb-6">{post.excerpt}</p>
                  <div className="flex items-center text-gray-400 text-xs space-x-3">
                    <div className="flex items-center space-x-1">
                      <FaUser className="text-xs" />
                      <span>{post.categories.join(", ")}</span>
                    </div>
                    <span>|</span>
                    <div className="flex items-center space-x-1">
                      <FaComments className="text-xs" />
                      <span>{post.comments} Comments</span>
                    </div>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="text-center py-10">
              <p className="text-gray-500">No blog posts found matching your criteria.</p>
            </div>
          )}

          {/* Pagination */}
          {filteredPosts.length > postsPerPage && (
            <nav aria-label="Pagination" className="flex justify-center items-center space-x-2 mt-20 text-gray-400 text-sm select-none">
              <button 
                aria-label="Previous" 
                className={`border border-gray-200 rounded px-3 py-2 ${currentPage === 1 ? 'text-gray-300 cursor-not-allowed' : 'hover:text-gray-600'}`}
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
              >
                <FaChevronLeft />
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button 
                  key={page}
                  aria-current={currentPage === page ? "page" : undefined}
                  className={`border border-gray-200 rounded px-4 py-2 ${currentPage === page ? 'bg-white text-gray-600 font-semibold' : 'hover:bg-gray-50 hover:text-gray-600'}`}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              ))}
              
              <button 
                aria-label="Next" 
                className={`border border-gray-200 rounded px-3 py-2 ${currentPage === totalPages ? 'text-gray-300 cursor-not-allowed' : 'hover:text-gray-600'}`}
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
              >
                <FaChevronRight />
              </button>
            </nav>
          )}
        </main>

        {/* Sidebar */}
        <aside className="w-full max-w-md lg:max-w-sm space-y-8 lg:space-y-10">
          {/* Search */}
          <div className="bg-[#faf9ff] p-6 rounded-md">
            <form className="flex" onSubmit={handleSearch}>
              <input 
                className="flex-grow px-4 py-3 text-xs text-gray-700 border border-transparent focus:outline-none" 
                placeholder="Search Keyword" 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="bg-red-600 text-white px-6 py-3 text-xs font-semibold" type="submit">
                <FaSearch />
              </button>
            </form>
          </div>

          {/* Categories */}
          <div className="bg-[#faf9ff] p-6 rounded-md">
            <h3 className="font-semibold text-gray-900 mb-4">Category</h3>
            <ul className="text-xs text-gray-700 space-y-4">
              {categories.map((category, index) => (
                <li 
                  key={index} 
                  className={`border-b border-gray-200 pb-2 flex justify-between cursor-pointer ${activeCategory === category.name ? 'text-red-600 font-semibold' : ''}`}
                  onClick={() => handleCategoryClick(category.name)}
                >
                  <span>{category.name}</span>
                  <span>({category.count})</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <section className="bg-[#faf8ff] p-6 rounded-md">
            <h3 className="font-semibold text-gray-900 mb-6">Recent Post</h3>
            <ul className="flex flex-col gap-5">
              {recentPosts.map((post, index) => (
                <li key={index} className="flex gap-4">
                  <img 
                    alt={post.title} 
                    className="w-14 h-14 object-cover rounded" 
                    src={post.image}
                  />
                  <div>
                    <p className="font-semibold text-sm text-gray-900 leading-tight">{post.title}</p>
                    <p className="text-xs text-gray-600 mt-1">{post.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Tags */}
          <section className="bg-[#faf8ff] p-6 rounded-md">
            <h3 className="font-semibold text-base mb-4 border-b border-gray-200 pb-2">Tag Clouds</h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <button 
                  key={index} 
                  className={`text-xs text-gray-600 border border-gray-300 rounded px-3 py-1 hover:bg-gray-100 ${searchQuery === tag ? 'bg-gray-100 font-semibold' : ''}`}
                  onClick={() => {
                    setSearchQuery(tag);
                    setActiveCategory('All');
                  }}
                >
                  {tag}
                </button>
              ))}
            </div>
          </section>

          {/* Instagram Feed */}
          <section className="bg-[#faf8ff] p-6 rounded-md">
            <h3 className="font-semibold text-base mb-4 border-b border-gray-200 pb-2">Instagram Feeds</h3>
            <div className="grid grid-cols-3 gap-3">
              {instagramPosts.map((post, index) => (
                <img 
                  key={index} 
                  alt={`Instagram post ${index + 1}`} 
                  className="w-full h-20 object-cover rounded-sm" 
                  src={post}
                />
              ))}
            </div>
          </section>

          {/* Newsletter */}
          <section className="bg-[#faf8ff] p-6 rounded-md">
            <h3 className="font-semibold text-sm mb-4">Newsletter</h3>
            <hr className="border-gray-300 mb-4"/>
            {subscribed ? (
              <div className="text-green-600 text-sm text-center py-4">
                Thank you for subscribing to our newsletter!
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubscribe}>
                <input 
                  className="w-full border border-gray-300 rounded-md px-4 py-2 text-xs placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-red-600" 
                  placeholder="Enter email" 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button 
                  className="w-full border border-red-600 text-red-600 text-xs py-3 rounded-md font-semibold hover:bg-red-600 hover:text-white transition" 
                  type="submit"
                >
                  SUBSCRIBE
                </button>
              </form>
            )}
          </section>
        </aside>
      </div>
      
      <Footer />
    </div>
  );
};

export default Blog;