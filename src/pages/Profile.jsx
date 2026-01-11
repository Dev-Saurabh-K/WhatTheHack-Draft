import React, { useState } from "react";
import {
  User,
  MapPin,
  GraduationCap,
  Star,
  LogOut,
  Settings,
  Pencil,
  Trash2,
  Clock,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

// --- Mock Data ---
const USER = {
  name: "Saurabh Kumar",
  college: "Netaji Engineering College",
  course: "3rd Year • B.Tech CSE",
  avatar: "https://i.pravatar.cc/150?u=saurabh",
  stats: {
    rating: 4.9,
    itemsLent: 12,
    returnRate: "98%",
  },
};

const MY_LISTINGS = [
  {
    id: 1,
    title: "Engineering Graphics Drafter",
    price: "₹250/sem",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=200",
    type: "RENT",
  },
  {
    id: 2,
    title: "Casio Calculator",
    price: "₹800",
    image:
      "https://images.unsplash.com/photo-1574607383476-f517f260d30b?auto=format&fit=crop&q=80&w=200",
    type: "SALE",
  },
  {
    id: 3,
    title: "DBMS Book (Korth)",
    price: "₹150",
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=200",
    type: "SALE",
  },
];

const BORROWED_ITEMS = [
  {
    id: 101,
    title: "Arduino Uno Kit",
    owner: "Rahul D.",
    due: "2 days",
    status: "due",
    image:
      "https://images.unsplash.com/photo-1553406830-ef2513450d76?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 102,
    title: "Lab Coat (M)",
    owner: "Sneha P.",
    due: "Overdue",
    status: "overdue",
    image:
      "https://images.unsplash.com/photo-1584036561566-b937e13d8009?auto=format&fit=crop&q=80&w=200",
  },
];

const Profile = () => {
  const [activeTab, setActiveTab] = useState("listings"); // 'listings' | 'borrowed'

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* --- Header & Identity --- */}
      <div className="relative mb-16">
        {/* Gradient Background */}
        <div className="h-32 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-b-[2rem] shadow-md relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/10 rounded-full -ml-5 -mb-5 blur-xl"></div>
        </div>

        {/* Avatar & Info */}
        <div className="absolute left-1/2 -translate-x-1/2 top-16 flex flex-col items-center w-full">
          <div className="relative mb-3">
            <img
              src={USER.avatar}
              alt={USER.name}
              className="w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover bg-white"
            />
            <div className="absolute bottom-1 right-1 bg-white rounded-full p-1 shadow-sm">
              <CheckCircle2
                className="w-5 h-5 text-emerald-500"
                fill="currentColor"
                stroke="white"
              />
            </div>
          </div>

          <h1 className="text-xl font-bold text-slate-800 flex items-center gap-1">
            {USER.name}
          </h1>
          <p className=" text-sm text-indigo-600 font-medium mb-1">
            {USER.course}
          </p>
          <div className="flex items-center text-xs text-slate-400">
            <GraduationCap className="w-3 h-3 mr-1" />
            {USER.college}
          </div>
        </div>
      </div>

      {/* --- Reputation Stats --- */}
      <div className="px-6 mb-6 pt-15">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 grid grid-cols-3 divide-x divide-slate-100">
          <div className="flex flex-col items-center gap-1 text-center">
            <span className="text-lg font-bold text-slate-800 flex items-center gap-1">
              {USER.stats.rating}{" "}
              <Star className="w-4 h-4 text-amber-500 fill-current" />
            </span>
            <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wide">
              Rating
            </span>
          </div>
          <div className="flex flex-col items-center gap-1 text-center">
            <span className="text-lg font-bold text-slate-800">
              {USER.stats.itemsLent}
            </span>
            <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wide">
              Lent
            </span>
          </div>
          <div className="flex flex-col items-center gap-1 text-center">
            <span className="text-lg font-bold text-emerald-600">
              {USER.stats.returnRate}
            </span>
            <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wide">
              Return Rate
            </span>
          </div>
        </div>
      </div>

      {/* --- Action Buttons --- */}
      <div className="px-6 flex gap-3 mb-8">
        <button className="flex-1 flex items-center justify-center p-2.5 rounded-xl border border-indigo-200 text-indigo-700 font-semibold text-sm hover:bg-indigo-50 transition-colors">
          <Pencil className="w-4 h-4 mr-2" />
          Edit Profile
        </button>
        <button className="flex-1 flex items-center justify-center p-2.5 rounded-xl border border-slate-200 text-red-500 font-semibold text-sm hover:bg-red-50 transition-colors">
          <LogOut className="w-4 h-4 mr-2" />
          Log Out
        </button>
      </div>

      {/* --- Tabs --- */}
      <div className="px-6 border-b border-slate-200 mb-6 flex">
        <button
          onClick={() => setActiveTab("listings")}
          className={`flex-1 pb-3 text-sm font-medium transition-all relative ${
            activeTab === "listings"
              ? "text-indigo-600"
              : "text-slate-400 hover:text-slate-600"
          }`}
        >
          My Listings
          {activeTab === "listings" && (
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 rounded-t-full" />
          )}
        </button>
        <button
          onClick={() => setActiveTab("borrowed")}
          className={`flex-1 pb-3 text-sm font-medium transition-all relative ${
            activeTab === "borrowed"
              ? "text-indigo-600"
              : "text-slate-400 hover:text-slate-600"
          }`}
        >
          Borrowed
          {activeTab === "borrowed" && (
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 rounded-t-full" />
          )}
        </button>
      </div>

      {/* --- Grid Content --- */}
      <div className="px-6">
        {activeTab === "listings" ? (
          <div className="grid grid-cols-2 gap-4">
            {MY_LISTINGS.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden group"
              >
                <div className="relative aspect-square bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 px-1.5 py-0.5 bg-black/60 backdrop-blur-md rounded text-[10px] font-bold text-white uppercase">
                    {item.type}
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="font-semibold text-slate-800 text-xs truncate mb-1">
                    {item.title}
                  </h3>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-indigo-600 text-xs">
                      {item.price}
                    </span>
                    <button className="text-slate-400 hover:text-red-500 transition-colors">
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
            {/* Add New Placeholder */}
            <button className="aspect-[4/5] rounded-xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-slate-400 hover:border-indigo-300 hover:text-indigo-500 transition-all bg-slate-50/50">
              <span className="text-2xl mb-1">+</span>
              <span className="text-xs font-medium">Add New</span>
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            {BORROWED_ITEMS.length > 0 ? (
              BORROWED_ITEMS.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm flex gap-3"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 rounded-lg object-cover bg-slate-100"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-bold text-slate-800 text-sm truncate">
                        {item.title}
                      </h3>
                      <span
                        className={`text-[10px] px-1.5 py-0.5 rounded font-bold uppercase ${
                          item.status === "overdue"
                            ? "bg-red-100 text-red-600"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {item.status === "overdue" ? "Overdue" : "Due Soon"}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mb-2">
                      From: {item.owner}
                    </p>
                    <div className="flex items-center text-xs text-slate-400">
                      <Clock className="w-3 h-3 mr-1" />
                      Due in {item.due}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-slate-400 text-sm">
                No currently borrowed items.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
