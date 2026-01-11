import React, { useState } from 'react';
import {
  SlidersHorizontal,
  MessageCircle,
  Heart,
  Share2,
  CheckCircle,
  MapPin,
  Clock
} from 'lucide-react';

const mockPosts = [
  {
    id: 1,
    user: {
      name: "Aravind K.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aravind",
      verified: true,
      location: "North Campus Hostel",
      time: "2h ago"
    },
    intent: "rent",
    price: "₹50/day",
    image: "https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&q=80&w=800",
    title: "Engineering Drawing Kit - Complete Set",
    description: "Used only for one semester. Everything included: Drafter, compass set, and scale. Perfect condition.",
  },
  {
    id: 2,
    user: {
      name: "Sneha P.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sneha",
      verified: true,
      location: "Girls Hostel Block A",
      time: "4h ago"
    },
    intent: "sell",
    price: "₹800",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800",
    title: "Scientific Calculator fx-991EX",
    description: "Classwiz model. Essential for exams. Selling because I upgraded. Works perfectly.",
  },
  {
    id: 3,
    user: {
      name: "Rahul M.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul",
      verified: false,
      location: "Library Reading Room",
      time: "5h ago"
    },
    intent: "rent",
    price: "₹100/week",
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=800",
    title: "Clean Code by Robert C. Martin",
    description: "Great book for CS students. Don't buy new, just rent it for your project week!",
  },
  {
    id: 4,
    user: {
      name: "Priya S.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
      verified: true,
      location: "Main Gate Layer",
      time: "1d ago"
    },
    intent: "sell",
    price: "₹500",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800",
    title: "Table Lamp - Adjustable",
    description: "Moving out so selling this interaction lamp. Brightness adjustable. USB powered.",
  }
];

const Feed = () => {
  const [filter, setFilter] = useState('all'); // all, rent, sell

  const filteredPosts = mockPosts.filter(post => {
    if (filter === 'all') return true;
    return post.intent === filter;
  });

  const toggleFilter = () => {
    if (filter === 'all') setFilter('rent');
    else if (filter === 'rent') setFilter('sell');
    else setFilter('all');
  };

  const getFilterLabel = () => {
    if (filter === 'all') return 'Show All';
    if (filter === 'rent') return 'Rentals Only';
    return 'Sales Only';
  };

  return (
    <div className="min-h-screen bg-gray-100 pb-20">
      {/* Top Bar */}
      <div className="sticky top-0 z-10 bg-white shadow-sm px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">Campus Feed</h1>
        <button
          onClick={toggleFilter}
          className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors"
        >
          <span className="font-medium">{getFilterLabel()}</span>
          <SlidersHorizontal size={16} />
        </button>
      </div>

      {/* Feed List */}
      <div className="max-w-md mx-auto p-4 space-y-4">
        {filteredPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">

            {/* Header: The Trust Layer */}
            <div className="p-3 flex items-center gap-3">
              <img
                src={post.user.avatar}
                alt={post.user.name}
                className="w-10 h-10 rounded-full bg-gray-100 border border-gray-100"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1">
                  <h3 className="font-semibold text-gray-900 truncate">{post.user.name}</h3>
                  {post.user.verified && (
                    <CheckCircle size={14} className="text-blue-500 fill-blue-50" />
                  )}
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span className="flex items-center gap-0.5">
                    <Clock size={10} /> {post.user.time}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-0.5 truncate">
                    <MapPin size={10} /> {post.user.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Context Banner */}
            <div className={`px-4 py-1.5 flex items-center gap-2 text-sm font-medium ${post.intent === 'rent'
                ? 'bg-blue-50 text-blue-700'
                : 'bg-green-50 text-green-700'
              }`}>
              <span className="text-xs">
                {post.intent === 'rent' ? '🔵' : '🟢'}
              </span>
              {post.intent === 'rent' ? `Lending for ${post.price}` : `Selling for ${post.price}`}
            </div>

            {/* Main Content */}
            <div className="relative aspect-[4/3] w-full bg-gray-100">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Action Bar */}
            <div className="px-3 py-3 flex items-center justify-between border-b border-gray-50">
              <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors active:scale-[0.98]">
                <MessageCircle size={18} />
                <span>Chat</span>
              </button>
              <div className="flex items-center gap-1 ml-3">
                <button className="p-2.5 text-gray-600 hover:bg-gray-50 rounded-full transition-colors">
                  <Heart size={22} />
                </button>
                <button className="p-2.5 text-gray-600 hover:bg-gray-50 rounded-full transition-colors">
                  <Share2 size={22} />
                </button>
              </div>
            </div>

            {/* Caption/Details */}
            <div className="p-4 pt-3">
              <h2 className="font-bold text-gray-900 text-lg leading-tight mb-1">
                {post.title}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                {post.description}
              </p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;