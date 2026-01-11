import React from "react";
import {
  ChevronLeft,
  Share2,
  Heart,
  MapPin,
  ShieldCheck,
  MessageCircle,
  Clock,
  CheckCircle2,
  Star,
} from "lucide-react";

// --- Mock Data ---
const ITEM = {
  id: 1,
  title: "Engineering Graphics Drafter (Omega)",
  price: "₹250/sem",
  originalPrice: "₹850",
  type: "RENT",
  description:
    "Ideally suited for 1st year engineering students. The drafter is in excellent condition with no loose hinges. Comes with the original cover case. I can also throw in a few drawing sheets if you need them!",
  images: [
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
  ],
  meta: {
    condition: "Used - Good",
    age: "2 years old",
    posted: "2h ago",
  },
  location: "Near Central Library",
  seller: {
    name: "Rahul Kumar",
    avatar: "https://i.pravatar.cc/150?u=rahul",
    rating: 4.8,
    reviews: 12,
    verified: true,
    responseTime: "~10 mins",
  },
};

const ItemDetails = () => {
  return (
    <div className="min-h-screen bg-slate-50 pb-24 relative">
      {/* --- Overlay Header --- */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4">
        <button className="p-2 bg-white/80 backdrop-blur-md rounded-full text-slate-700 shadow-sm hover:bg-white transition-all">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="flex gap-3">
          <button className="p-2 bg-white/80 backdrop-blur-md rounded-full text-slate-700 shadow-sm hover:bg-white transition-all hover:text-indigo-600">
            <Share2 className="w-5 h-5" />
          </button>
          <button className="p-2 bg-white/80 backdrop-blur-md rounded-full text-slate-700 shadow-sm hover:bg-white transition-all hover:text-red-500">
            <Heart className="w-5 h-5" />
          </button>
        </div>
      </header>

      <main>
        {/* --- Hero Image --- */}
        <div className="relative aspect-[4/3] sm:aspect-video w-full">
          <img
            src={ITEM.images[0]}
            alt={ITEM.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />

          {/* Status Badge */}
          <div className="absolute bottom-4 left-4">
            <span
              className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-bold text-white shadow-lg backdrop-blur-md ${
                ITEM.type === "RENT" ? "bg-blue-600/90" : "bg-emerald-600/90"
              }`}
            >
              {ITEM.type === "RENT" ? "🔵 Rent" : "🟢 Buy"}: {ITEM.price}
            </span>
          </div>
        </div>

        {/* --- Product Info Container --- */}
        <div className="relative -mt-6 bg-slate-50 rounded-t-3xl px-5 pt-8 pb-4 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
          {/* Drag Handle Indicator */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-slate-200 rounded-full" />

          <h1 className="text-2xl font-bold text-slate-800 leading-tight mb-2">
            {ITEM.title}
          </h1>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-medium text-slate-500 mb-6">
            <span className="bg-slate-200/50 px-2 py-1 rounded text-slate-600">
              {ITEM.meta.condition}
            </span>
            <span>•</span>
            <span>{ITEM.meta.age}</span>
            <span>•</span>
            <span className="flex items-center text-indigo-600">
              <Clock className="w-3 h-3 mr-1" />
              Posted {ITEM.meta.posted}
            </span>
          </div>

          <div className="flex items-center text-slate-600 mb-6 bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
            <MapPin className="w-5 h-5 text-indigo-500 mr-2" />
            <span className="font-medium text-sm">{ITEM.location}</span>
          </div>

          <div className="mb-8">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2 opacity-80">
              Description
            </h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              {ITEM.description}
            </p>
          </div>

          {/* --- Trust Seller Card --- */}
          <div className="bg-white border border-slate-200 rounded-2xl p-4 mb-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-indigo-50 rounded-bl-full -mr-10 -mt-10 z-0" />

            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center">
                <div className="relative">
                  <img
                    src={ITEM.seller.avatar}
                    alt={ITEM.seller.name}
                    className="w-12 h-12 rounded-full border-2 border-white shadow-sm"
                  />
                  {ITEM.seller.verified && (
                    <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm">
                      <CheckCircle2
                        className="w-4 h-4 text-emerald-500"
                        fill="currentColor"
                        stroke="white"
                      />
                    </div>
                  )}
                </div>
                <div className="ml-3">
                  <h3 className="font-bold text-slate-800 text-sm flex items-center">
                    {ITEM.seller.name}
                  </h3>
                  <p className="text-xs text-slate-500">
                    Response time:{" "}
                    <span className="text-emerald-600 font-medium">
                      {ITEM.seller.responseTime}
                    </span>
                  </p>
                </div>
              </div>

              <div className="text-right">
                <div className="flex items-center justify-end text-amber-500 font-bold text-sm">
                  <Star className="w-4 h-4 mr-1 fill-current" />
                  {ITEM.seller.rating}
                </div>
                <p className="text-[10px] text-slate-400 font-medium">
                  {ITEM.seller.reviews} reviews
                </p>
              </div>
            </div>
          </div>

          {/* --- Safety Notice --- */}
          <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-amber-800 mb-0.5">
                Campus Safety Tip
              </h4>
              <p className="text-xs text-amber-700/80 leading-snug">
                Always meet in public places like the <strong>Library</strong>{" "}
                or <strong>Canteen</strong>. Inspect the item before paying.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* --- Sticky Bottom Action Bar --- */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 px-6 z-50 flex items-center justify-between shadow-[0_-4px_10px_rgba(0,0,0,0.05)] pb-safe">
        <div className="flex flex-col">
          <span className="text-xs text-slate-400 font-medium line-through">
            {ITEM.originalPrice}
          </span>
          <span className="text-2xl font-bold text-slate-800">
            {ITEM.price}
          </span>
        </div>

        <button className="flex items-center px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-lg shadow-indigo-200 active:scale-95 transition-all">
          <MessageCircle className="w-5 h-5 mr-2" />
          Chat with Seller
        </button>
      </div>
    </div>
  );
};

export default ItemDetails;
