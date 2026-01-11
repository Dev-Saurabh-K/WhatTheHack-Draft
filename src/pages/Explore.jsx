import React from "react";
import {
  Search,
  SlidersHorizontal,
  BookOpen,
  Cpu,
  Shirt,
  Ruler,
  Music,
  Gamepad2,
  Clock,
  TrendingUp,
  MapPin,
  ChevronRight,
} from "lucide-react";

// --- Mock Data ---
const CATEGORIES = [
  {
    id: "books",
    label: "Books",
    icon: BookOpen,
    color: "bg-blue-50 text-blue-600",
  },
  {
    id: "electronics",
    label: "Electronics",
    icon: Cpu,
    color: "bg-indigo-50 text-indigo-600",
  },
  {
    id: "fashion",
    label: "Fashion",
    icon: Shirt,
    color: "bg-pink-50 text-pink-600",
  },
  {
    id: "stationary",
    label: "Stationary",
    icon: Ruler,
    color: "bg-amber-50 text-amber-600",
  },
  {
    id: "instruments",
    label: "Music",
    icon: Music,
    color: "bg-purple-50 text-purple-600",
  },
  {
    id: "gaming",
    label: "Gaming",
    icon: Gamepad2,
    color: "bg-emerald-50 text-emerald-600",
  },
];

const TRENDING_TAGS = [
  "Scientific Calculator",
  "Drafter",
  "Lab Coat",
  "Blue Apron",
  "Cycle",
  "Goggles",
  "Geometry Box",
  "Physics Halliday",
];

const NEW_ARRIVALS = [
  {
    id: 101,
    title: "Casio FX-991EX Classwiz",
    price: "₹850",
    time: "2 hours ago",
    image:
      "https://images.unsplash.com/photo-1574607383476-f517f260d30b?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 102,
    title: "Engineering Drawing Board (A2)",
    price: "₹450",
    time: "4 hours ago",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 103,
    title: "Redmi Note 10 Pro (Used)",
    price: "₹8,000",
    time: "5 hours ago",
    image:
      "https://images.unsplash.com/photo-1598327105666-5b89351aff23?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 104,
    title: "Guitar (Acoustic)",
    price: "₹2,500",
    time: "1 day ago",
    image:
      "https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?auto=format&fit=crop&q=80&w=200",
  },
];

const Explore = () => {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* --- Sticky Header --- */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm px-4 py-3 shadow-sm border-b border-gray-100">
        <label className="text-xs font-semibold text-slate-500 mb-2 block uppercase tracking-wider">
          Find what you need
        </label>
        <div className="flex gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search for 'Lab Coat', 'Geometry Box'..."
              className="w-full bg-slate-50 pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 text-sm transition-all"
            />
          </div>
          <button className="p-3 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 active:scale-95 transition-all text-slate-600">
            <SlidersHorizontal className="w-5 h-5" />
          </button>
        </div>
      </header>

      <main className="px-4 pt-6 space-y-8">
        {/* --- Browse by Category --- */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-indigo-600" />
              Browse by Category
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                className={`flex flex-col items-center justify-center p-4 rounded-2xl ${cat.color} bg-opacity-30 hover:bg-opacity-50 transition-all border border-transparent hover:border-current active:scale-95`}
              >
                <cat.icon className="w-8 h-8 mb-2" />
                <span className="font-medium text-sm text-slate-700">
                  {cat.label}
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* --- Trending --- */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-rose-500" />
              Popular Searches
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {TRENDING_TAGS.map((tag, index) => (
              <button
                key={index}
                className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm text-slate-600 hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>
        </section>

        {/* --- New Arrivals --- */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
              <Clock className="w-5 h-5 text-emerald-600" />
              New Arrivals
            </h2>
            <button className="text-indigo-600 text-sm font-medium flex items-center hover:underline">
              View All <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>

          <div className="space-y-3">
            {NEW_ARRIVALS.map((item) => (
              <div
                key={item.id}
                className="flex items-center p-2 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 rounded-lg object-cover bg-slate-100"
                />
                <div className="ml-3 flex-1 min-w-0">
                  <h3 className="font-semibold text-slate-800 truncate text-sm">
                    {item.title}
                  </h3>
                  <p className="text-indigo-600 font-bold text-sm mt-0.5">
                    {item.price}
                  </p>
                </div>
                <div className="text-xs text-slate-400 whitespace-nowrap self-start mt-1 mr-1">
                  {item.time}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* --- Footer Links (Optional) --- */}
      <div className="p-8 text-center text-slate-400 text-sm">
        <p>End of Explore</p>
      </div>
    </div>
  );
};

export default Explore;
