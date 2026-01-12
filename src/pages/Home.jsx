import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Bell,
  ShoppingBag,
  Search,
  Home as HomeIcon,
  Compass,
  PlusSquare,
  MessageCircle,
  User,
  MapPin,
  Heart,
} from "lucide-react";

import Logo from "./logo";
// --- Mock Data ---
const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "textbooks", label: "Textbooks" },
  { id: "electronics", label: "Electronics" },
  { id: "lab-gear", label: "Lab Gear" },
  { id: "stationary", label: "Stationary" },
  { id: "fashion", label: "Fashion" },
  { id: "others", label: "Others" },
];

const ITEMS = [
  {
    id: 1,
    title: "Engineering Graphics Drafter",
    price: "₹250/sem",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=400",
    type: "RENT",
    location: "2 mins away",
    seller: { name: "Rahul K.", avatar: "https://i.pravatar.cc/150?u=rahul" },
    category: "lab-gear",
  },
  {
    id: 2,
    title: "Casio fx-991EX Scientific Calculator",
    price: "₹800",
    image:
      "https://images.unsplash.com/photo-1574607383476-f517f260d30b?auto=format&fit=crop&q=80&w=400",
    type: "SALE",
    location: "Netaji Bhawan",
    seller: { name: "Priya S.", avatar: "https://i.pravatar.cc/150?u=priya" },
    category: "electronics",
  },
  {
    id: 3,
    title: "1st Year Physics Book (Halliday)",
    price: "₹100/mo",
    type: "RENT",
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400",
    location: "Library",
    seller: { name: "Amit J.", avatar: "https://i.pravatar.cc/150?u=amit" },
    category: "textbooks",
  },
  {
    id: 4,
    title: "Lab Coat (White, Size M)",
    price: "₹150",
    type: "SALE",
    image:
      "https://images.unsplash.com/photo-1584036561566-b937e13d8009?auto=format&fit=crop&q=80&w=400",
    location: "Hostel 3",
    seller: { name: "Sneha R.", avatar: "https://i.pravatar.cc/150?u=sneha" },
    category: "lab-gear",
  },
  {
    id: 5,
    title: "Wireless Mouse (Logitech)",
    price: "₹400",
    type: "SALE",
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80&w=400",
    location: "Main Block",
    seller: { name: "Vikram", avatar: "https://i.pravatar.cc/150?u=vikram" },
    category: "electronics",
  },
  {
    id: 6,
    title: "Architectural Scale Ruler",
    price: "₹50/week",
    type: "RENT",
    image:
      "https://images.unsplash.com/photo-1571120281206-8d6978502f4a?auto=format&fit=crop&q=80&w=400",
    location: "Design Dept",
    seller: { name: "Arjun M.", avatar: "https://i.pravatar.cc/150?u=arjun" },
    category: "stationary",
  },
];

function Home() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems =
    activeCategory === "all"
      ? ITEMS
      : ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* --- Sticky Header --- */}
      <header className="sticky top-0 z-50 bg-slate-50/95 backdrop-blur-sm px-4 pt-4 pb-2 shadow-sm border-b border-gray-200">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">
              Hi, Saurabh 👋
            </h1>
            <div className="flex items-center text-slate-500 text-sm mt-1">
              <MapPin className="w-3 h-3 mr-1" />
              <span>Netaji Eng. College</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {/* logo
            <div className="w-5 h-5">
              <Logo/>
            </div> */}

            {/* bell */}
             <Link to={"/notifications"}>
            <button className="p-2 rounded-full hover:bg-slate-200 transition-colors relative">
              <Bell className="w-6 h-6 text-slate-700" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </button>
            </Link>
            
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search for books, drafters..."
            className="w-full bg-white pl-10 pr-4 py-3 rounded-xl shadow-sm border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 text-sm"
          />
        </div>
      </header>

      {/* --- Category Filter (Scrollable) --- */}
      <div className="py-2 overflow-x-auto no-scrollbar px-4 flex gap-2 w-full bg-slate-50">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-all ${
              activeCategory === cat.id
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
                : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* --- Quick Actions --- */}
      <div className="px-4 py-4 grid grid-cols-2 gap-3">
        <button className="flex flex-col items-center justify-center bg-indigo-50 hover:bg-indigo-100 p-4 rounded-xl border border-indigo-100 transition-colors group">
          <div className="bg-white p-2 rounded-full shadow-sm mb-2 group-hover:scale-110 transition-transform">
            <Link to={"/create/post"}>
              <PlusSquare className="w-5 h-5 text-indigo-600" />
            </Link>
          </div>

          <Link to={"/create/post"}>
            <span className="font-semibold text-indigo-700 text-sm">
              Sell an Item
            </span>
          </Link>
        </button>

        <button className="flex flex-col items-center justify-center bg-emerald-50 hover:bg-emerald-100 p-4 rounded-xl border border-emerald-100 transition-colors group">
          <div className="bg-white p-2 rounded-full shadow-sm mb-2 group-hover:scale-110 transition-transform">
           
            <Link to={"/request"}>
             <Compass className="w-5 h-5 text-emerald-600" />
            </Link>
          </div>
          <Link to={"/request"}>
          <span className="font-semibold text-emerald-700 text-sm">
            Request Item
          </span>
          </Link>
        </button>
      </div>

      {/* --- The Feed --- */}
      <main className="px-4 pb-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-slate-800">
            Fresh Recommendations
          </h2>
          <button className="text-indigo-600 text-sm font-medium">
            See All
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredItems.map((item) => (
            
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow group"
            >
               <Link to={"/itemdetails"}>
              {/* Image Container */}
              <div className="relative aspect-4/3 bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Type Badge */}
                <div
                  className={`absolute top-2 left-2 px-2 py-1 rounded-md text-xs font-bold text-white shadow-sm ${
                    item.type === "RENT" ? "bg-blue-500" : "bg-emerald-500"
                  }`}
                >
                  {item.type === "RENT" ? "FOR RENT" : "FOR SALE"}
                </div>

                {/* Like Button */}
                <button className="absolute top-2 right-2 p-1.5 bg-white/80 backdrop-blur-sm rounded-full text-slate-600 hover:text-red-500 transition-colors">
                  <Heart className="w-4 h-4" />
                </button>
              </div>

              {/* Content */}
              <div className="p-3">
                <div className="flex justify-between items-start">
                  <h3 className="font-semibold text-slate-800 truncate pr-2">
                    {item.title}
                  </h3>
                  <span className="font-bold text-indigo-600 whitespace-nowrap text-sm">
                    {item.price}
                  </span>
                </div>

                <div className="flex items-center text-slate-400 text-xs mt-1 mb-3">
                  <MapPin className="w-3 h-3 mr-1" />
                  <span>{item.location}</span>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-slate-50">
                  <div className="flex items-center">
                    <img
                      src={item.seller.avatar}
                      alt={item.seller.name}
                      className="w-5 h-5 rounded-full border border-white shadow-sm mr-2"
                    />
                    <span className="text-xs text-slate-500 font-medium">
                      {item.seller.name}
                    </span>
                  </div>
                  <button className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-1 rounded transition-colors hover:bg-indigo-100">
                    View
                  </button>
                </div>
              </div>
              </Link>
            </div>
            

          ))}
        </div>
      </main>

      {/* --- Bottom Navigation --- */}
       <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-6 py-2 pb-safe z-50 flex justify-between items-center shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.02)]">
        <Link to={"/"}>
          <button className="flex flex-col items-center gap-1 p-2 text-indigo-600">
            <HomeIcon className="w-6 h-6" />
            <span className="text-[10px] font-medium">Home</span>
          </button>
        </Link>

        <Link to={"/Explore"}>
          <button className="flex flex-col items-center gap-1 p-2 text-slate-400 hover:text-slate-600">
            <Compass className="w-6 h-6" />
            <span className="text-[10px] font-medium">Explore</span>
          </button>
        </Link>

        <div className="relative -top-5">
          <Link to={"/create/post"}>
            <button className="bg-indigo-600 text-white p-4 rounded-full shadow-lg shadow-indigo-200 hover:scale-105 transition-transform">
              <PlusSquare className="w-6 h-6" />
            </button>
          </Link>
        </div>

        <Link to={"/Chat"}>
          <button className="flex flex-col items-center gap-1 p-2 text-slate-400 hover:text-slate-600">
            <MessageCircle className="w-6 h-6" />
            <span className="text-[10px] font-medium">Chat</span>
          </button>
        </Link>

        <Link to={"/Profile"}>
          <button className="flex flex-col items-center gap-1 p-2 text-slate-400 hover:text-slate-600">
            <User className="w-6 h-6" />
            <span className="text-[10px] font-medium">Profile</span>
          </button>
        </Link>
      </nav>
    </div>
  );
}

export default Home;
