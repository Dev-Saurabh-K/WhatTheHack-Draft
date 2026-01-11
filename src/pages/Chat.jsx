import React, { useState } from "react";
import {
  Search,
  Send,
  Paperclip,
  MoreVertical,
  ChevronLeft,
  CheckCircle2,
  Check,
  Image as ImageIcon,
} from "lucide-react";

// --- Mock Data ---
const MOCK_CHATS = [
  {
    id: 1,
    user: {
      name: "Rohan Das",
      avatar: "https://i.pravatar.cc/150?u=rohan",
      verified: true,
    },
    item: {
      title: "Engineering Drafter",
      price: "₹250/sem",
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=100",
    },
    lastMessage: "Is this still available?",
    time: "10m",
    unread: 2,
    messages: [
      {
        id: 1,
        text: "Hi, I saw your listing for the drafter.",
        sender: "me",
        time: "10:00 AM",
      },
      {
        id: 2,
        text: "Yes, it is available!",
        sender: "them",
        time: "10:05 AM",
      },
      {
        id: 3,
        text: "Is it in good condition?",
        sender: "me",
        time: "10:06 AM",
      },
      {
        id: 4,
        text: "Absolutely, used it for just one semester.",
        sender: "them",
        time: "10:10 AM",
      },
      {
        id: 5,
        text: "Can we meet at the library?",
        sender: "me",
        time: "10:12 AM",
      },
    ],
  },
  {
    id: 2,
    user: {
      name: "Priya Sharma",
      avatar: "https://i.pravatar.cc/150?u=priya",
      verified: true,
    },
    item: {
      title: "Casio Calculator",
      price: "₹800",
      image:
        "https://images.unsplash.com/photo-1574607383476-f517f260d30b?auto=format&fit=crop&q=80&w=100",
    },
    lastMessage: "Sure, let's meet at 5.",
    time: "1h",
    unread: 0,
    messages: [
      {
        id: 1,
        text: "Hey, would you take 700?",
        sender: "me",
        time: "9:00 AM",
      },
      { id: 2, text: "800 is fixed, sorry.", sender: "them", time: "9:30 AM" },
      { id: 3, text: "Okay, I will take it.", sender: "me", time: "9:45 AM" },
      {
        id: 4,
        text: "Sure, let's meet at 5.",
        sender: "them",
        time: "10:00 AM",
      },
    ],
  },
  {
    id: 3,
    user: {
      name: "Amit Jain",
      avatar: "https://i.pravatar.cc/150?u=amit",
      verified: false,
    },
    item: {
      title: "Physics Halliday Book",
      price: "₹100/mo",
      image:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=100",
    },
    lastMessage: "Check the photos I sent.",
    time: "2d",
    unread: 0,
    messages: [
      {
        id: 1,
        text: "Can see some more photos?",
        sender: "me",
        time: "Yesterday",
      },
      {
        id: 2,
        text: "Check the photos I sent.",
        sender: "them",
        time: "Yesterday",
      },
    ],
  },
];

const Chat = () => {
  const [activeChatId, setActiveChatId] = useState(null);
  const [messageInput, setMessageInput] = useState("");

  const activeChat = MOCK_CHATS.find((c) => c.id === activeChatId);

  // --- Render Components ---

  const SidebarItem = ({ chat }) => (
    <button
      onClick={() => setActiveChatId(chat.id)}
      className={`w-full flex items-center p-4 hover:bg-slate-50 transition-colors border-b border-slate-100 ${
        activeChatId === chat.id ? "bg-indigo-50/50" : ""
      }`}
    >
      <div className="relative">
        <img
          src={chat.user.avatar}
          alt={chat.user.name}
          className="w-12 h-12 rounded-full object-cover border border-slate-200"
        />
        {chat.user.verified && (
          <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm">
            <CheckCircle2
              className="w-3 h-3 text-emerald-500"
              fill="currentColor"
              stroke="white"
            />
          </div>
        )}
      </div>
      <div className="ml-3 flex-1 min-w-0 text-left">
        <div className="flex justify-between items-baseline mb-0.5">
          <h3 className="font-semibold text-slate-800 text-sm truncate pr-2">
            {chat.user.name}
          </h3>
          <span className="text-[10px] text-slate-400 whitespace-nowrap">
            {chat.time}
          </span>
        </div>
        <div className="flex items-center text-xs text-slate-500 mb-1">
          <span className="font-medium text-slate-600 mr-1">
            Re: {chat.item.title.split(" ")[0]}...
          </span>
        </div>
        <p
          className={`text-xs truncate ${
            chat.unread > 0 ? "font-bold text-slate-800" : "text-slate-400"
          }`}
        >
          {chat.lastMessage}
        </p>
      </div>
      {chat.unread > 0 && (
        <div className="ml-2 w-5 h-5 bg-indigo-600 rounded-full flex items-center justify-center text-[10px] font-bold text-white">
          {chat.unread}
        </div>
      )}
    </button>
  );

  return (
    <div className="h-screen bg-slate-50 flex overflow-hidden">
      {/* --- Sidebar (Conversation List) --- */}
      <aside
        className={`
        w-full md:w-80 lg:w-96 bg-white border-r border-slate-200 flex flex-col z-10
        ${activeChatId ? "hidden md:flex" : "flex"}
      `}
      >
        {/* Header */}
        <div className="p-4 border-b border-slate-100 flex justify-between items-center sticky top-0 bg-white z-10">
          <h1 className="text-xl font-bold text-slate-800">Messages</h1>
          <button className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500">
            <Search className="w-5 h-5" />
          </button>
        </div>

        {/* List */}
        <div className="flex-1 overflow-y-auto no-scrollbar">
          {MOCK_CHATS.map((chat) => (
            <SidebarItem key={chat.id} chat={chat} />
          ))}
        </div>
      </aside>

      {/* --- Main Chat Window --- */}
      <main
        className={`
        flex-1 flex flex-col bg-slate-50 relative
        ${!activeChatId ? "hidden md:flex" : "flex"}
      `}
      >
        {activeChat ? (
          <>
            {/* Header */}
            <header className="bg-white border-b border-slate-200 flex items-center justify-between px-4 py-3 sticky top-0 z-20 shadow-sm">
              <div className="flex items-center">
                <button
                  onClick={() => setActiveChatId(null)}
                  className="mr-3 md:hidden p-2 -ml-2 hover:bg-slate-100 rounded-full text-slate-600"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <div className="relative">
                  <img
                    src={activeChat.user.avatar}
                    alt={activeChat.user.name}
                    className="w-10 h-10 rounded-full border border-slate-100"
                  />
                  {activeChat.user.verified && (
                    <div className="absolute -bottom-0.5 -right-0.5 bg-white rounded-full p-0.5 shadow-sm">
                      <CheckCircle2
                        className="w-3 h-3 text-emerald-500"
                        fill="currentColor"
                        stroke="white"
                      />
                    </div>
                  )}
                </div>
                <div className="ml-3">
                  <h2 className="font-bold text-slate-800 text-sm">
                    {activeChat.user.name}
                  </h2>
                  <span className="flex items-center text-xs text-emerald-600 font-medium">
                    Online
                  </span>
                </div>
              </div>
              <button className="p-2 hover:bg-slate-100 rounded-full text-slate-400">
                <MoreVertical className="w-5 h-5" />
              </button>
            </header>

            {/* Deal Header (Critical) */}
            <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={activeChat.item.image}
                  alt={activeChat.item.title}
                  className="w-10 h-10 rounded-md object-cover bg-white shadow-sm border border-slate-200"
                />
                <div>
                  <p className="text-xs font-bold text-slate-700 clamp-1">
                    {activeChat.item.title}
                  </p>
                  <p className="text-xs font-semibold text-indigo-600">
                    {activeChat.item.price}
                  </p>
                </div>
              </div>
              <button className="px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-50 shadow-sm whitespace-nowrap">
                Mark Sold
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50">
              <div className="flex justify-center my-4">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider bg-slate-100 px-3 py-1 rounded-full">
                  Today
                </span>
              </div>

              {activeChat.messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.sender === "me" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`
                       max-w-[75%] px-4 py-2 rounded-2xl text-sm shadow-sm relative group
                       ${
                         msg.sender === "me"
                           ? "bg-indigo-600 text-white rounded-br-none"
                           : "bg-white text-slate-800 border border-slate-100 rounded-bl-none"
                       }
                     `}
                  >
                    {msg.text}
                    <span
                      className={`
                         text-[9px] block text-right mt-1 opacity-70 
                         ${
                           msg.sender === "me"
                             ? "text-indigo-100"
                             : "text-slate-400"
                         }
                       `}
                    >
                      {msg.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-slate-200 pb-safe">
              <div className="flex items-end gap-2">
                <button className="p-3 text-slate-400 hover:bg-slate-100 rounded-full transition-colors">
                  <Paperclip className="w-5 h-5" />
                </button>
                <div className="flex-1 bg-slate-100 rounded-2xl px-4 py-2 flex items-center border border-transparent focus-within:border-indigo-300 focus-within:ring-2 focus-within:ring-indigo-100 transition-all">
                  <input
                    type="text"
                    placeholder="Type a message..."
                    className="flex-1 bg-transparent border-none focus:outline-none text-sm text-slate-800 placeholder:text-slate-400 max-h-24 py-1"
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                  />
                </div>
                <button
                  className={`p-3 rounded-full transition-all shadow-md ${
                    messageInput.trim()
                      ? "bg-indigo-600 text-white hover:bg-indigo-700 hover:scale-105"
                      : "bg-slate-100 text-slate-300 cursor-not-allowed"
                  }`}
                  disabled={!messageInput.trim()}
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </>
        ) : (
          /* Desktop Placeholder */
          <div className="flex-1 flex flex-col items-center justify-center text-slate-300 p-8 text-center">
            <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mb-4">
              <MessageCircle className="w-10 h-10 text-slate-300" />
            </div>
            <h3 className="text-xl font-bold text-slate-400 mb-2">
              Your Messages
            </h3>
            <p className="max-w-xs text-sm">
              Select a conversation from the left to start chatting about an
              item.
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

// Helper icon for placeholder
import { MessageCircle } from "lucide-react";

export default Chat;
