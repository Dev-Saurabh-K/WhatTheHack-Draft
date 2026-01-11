import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  X,
  Camera,
  ChevronDown,
  Upload,
  DollarSign,
  CalendarDays,
  HeartHandshake,
} from "lucide-react";

const CreatePost = () => {
  const [listingType, setListingType] = useState("sell"); // 'sell' | 'rent' | 'donate'
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    condition: "",
    description: "",
    price: "",
    pricePerDay: "",
    securityDeposit: "",
  });

  const handleImageSelect = () => {
    // Simulate image upload
    setImage(
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800"
    );
  };

  const removeImage = (e) => {
    e.stopPropagation();
    setImage(null);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-white pb-24 relative">
      {/* --- Header --- */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-100 px-4 py-3 flex items-center justify-between">
       
       <Link to={"/"}>
        <button className="p-2 -ml-2 text-slate-500 hover:bg-slate-50 rounded-full transition-colors">
          <X className="w-6 h-6" />
        </button>
        </Link>

        <h1 className="text-lg font-bold text-slate-800">List Item</h1>
        <div className="w-10"></div> {/* Spacer for alignment */}
      </header>

      <main className="p-4 space-y-6">
        {/* --- Image Upload --- */}
        <div
          onClick={handleImageSelect}
          className={`
            aspect-4/3 rounded-2xl border-2 border-dashed flex flex-col items-center justify-center cursor-pointer transition-all overflow-hidden relative group
            ${
              image
                ? "border-transparent"
                : "border-indigo-200 bg-indigo-50/50 hover:bg-indigo-50"
            }
          `}
        >
          {image ? (
            <>
              <img
                src={image}
                alt="Preview"
                className="w-full h-full object-cover"
              />
              <button
                onClick={removeImage}
                className="absolute top-3 right-3 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors backdrop-blur-sm"
              >
                <X className="w-4 h-4" />
              </button>
            </>
          ) : (
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm group-hover:scale-110 transition-transform">
                <Camera className="w-8 h-8 text-indigo-500" />
              </div>
              <p className="font-semibold text-indigo-900">Tap to add photo</p>
              <p className="text-xs text-indigo-400 mt-1">Accepts JPG, PNG</p>
            </div>
          )}
        </div>

        {/* --- Listing Type Toggle --- */}
        <section>
          <label className="block text-sm font-bold text-slate-700 mb-3">
            What are you doing?
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: "sell", label: "Sell", icon: DollarSign },
              { id: "rent", label: "Rent", icon: CalendarDays },
              { id: "donate", label: "Donate", icon: HeartHandshake },
            ].map((type) => (
              <button
                key={type.id}
                onClick={() => setListingType(type.id)}
                className={`
                  flex flex-col items-center justify-center p-3 rounded-xl border transition-all
                  ${
                    listingType === type.id
                      ? "bg-indigo-600 border-indigo-600 text-white shadow-md shadow-indigo-200"
                      : "bg-white border-slate-200 text-slate-500 hover:border-slate-300 hover:bg-slate-50"
                  }
                `}
              >
                <type.icon className="w-5 h-5 mb-1" />
                <span className="text-xs font-bold">{type.label}</span>
              </button>
            ))}
          </div>
        </section>

        {/* --- Dynamic Pricing Section --- */}
        <section className="bg-slate-50 p-4 rounded-xl border border-slate-100">
          {listingType === "sell" && (
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">
                Price
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="number"
                  name="price"
                  placeholder="0.00"
                  className="w-full pl-9 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-semibold text-slate-800"
                />
              </div>
            </div>
          )}

          {listingType === "rent" && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">
                  Price per Day
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="number"
                    name="pricePerDay"
                    placeholder="0.00"
                    className="w-full pl-9 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-semibold text-slate-800"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">
                  Security Deposit (Optional)
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="number"
                    name="securityDeposit"
                    placeholder="0.00"
                    className="w-full pl-9 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-semibold text-slate-800"
                  />
                </div>
              </div>
            </div>
          )}

          {listingType === "donate" && (
            <div className="text-center py-2">
              <HeartHandshake className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
              <p className="text-sm font-medium text-emerald-800">
                Thank you for helping a peer!
              </p>
              <p className="text-xs text-emerald-600/70">
                This item will be listed as{" "}
                <span className="font-bold">Free</span>.
              </p>
            </div>
          )}
        </section>

        {/* --- Item Details --- */}
        <section className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">
              Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="e.g. Engineering Graphics Drafter"
              className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                Category
              </label>
              <div className="relative">
                <select className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm appearance-none text-slate-600">
                  <option value="">Select</option>
                  <option value="books">Books</option>
                  <option value="electronics">Electronics</option>
                  <option value="lab">Lab Gear</option>
                  <option value="other">Other</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                Condition
              </label>
              <div className="relative">
                <select className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm appearance-none text-slate-600">
                  <option value="">Select</option>
                  <option value="new">New</option>
                  <option value="like-new">Like New</option>
                  <option value="used">Used</option>
                  <option value="heavily-used">Heavily Used</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">
              Description
            </label>
            <textarea
              name="description"
              rows="4"
              placeholder="Tell us about the condition, age, and why you are selling..."
              className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm resize-none"
            ></textarea>
          </div>
        </section>
      </main>

      {/* --- Sticky Submit Button --- */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 z-50 pb-safe shadow-[0_-4px_10px_rgba(0,0,0,0.02)]">
        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-indigo-200 active:scale-95 transition-all flex items-center justify-center">
          <Upload className="w-5 h-5 mr-2" />
          Post Listing
        </button>
      </div>
      
    </div>
  );
};

export default CreatePost;
