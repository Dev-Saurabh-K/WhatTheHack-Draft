import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Bell,
  Check,
  Heart,
  Star,
  User,
  BellOff,
  Clock,
  CheckCircle2,
  X,
} from "lucide-react";

// Mock Data
const INITIAL_NOTIFICATIONS = [
  {
    id: 1,
    type: "REQUEST",
    priority: "HIGH",
    user: {
      name: "Rahul",
      avatar: "https://i.pravatar.cc/150?u=rahul",
    },
    content: "Rahul requested to borrow your **Engineering Drafter**.",
    time: "2 mins ago",
    isRead: false,
    status: "PENDING", // PENDING, ACCEPTED, DECLINED
  },
  {
    id: 2,
    type: "SYSTEM",
    color: "text-green-600",
    bgColor: "bg-green-100",
    icon: CheckCircle2,
    content:
      "Your rental period for **Physics Textbook** has started. Return due in 7 days.",
    time: "1 hour ago",
    isRead: false,
  },
  {
    id: 3,
    type: "SOCIAL",
    icon: Heart,
    color: "text-red-500",
    bgColor: "bg-red-100",
    content: "Sita liked your listing for **Lab Coat**.",
    time: "3 hours ago",
    isRead: true,
  },
  {
    id: 4,
    type: "SOCIAL",
    icon: Star,
    color: "text-yellow-500",
    bgColor: "bg-yellow-100",
    content: "You received a 5-star rating for the **Calculator** transaction.",
    time: "1 day ago",
    isRead: true,
  },
];

const Notifications = () => {
  const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS);

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })));
  };

  const handleAccept = (id) => {
    console.log("Request Accepted");
    setNotifications((prev) =>
      prev.map((n) =>
        n.id === id ? { ...n, status: "ACCEPTED", isRead: true } : n
      )
    );
    // In a real app, this would trigger an API call
  };

  const handleDecline = (id) => {
    setNotifications((prev) =>
      prev.map((n) =>
        n.id === id ? { ...n, status: "DECLINED", isRead: true } : n
      )
    );
  };

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  // Grouping
  const newNotifications = notifications.filter((n) => !n.isRead);
  const earlierNotifications = notifications.filter((n) => n.isRead);

  const renderContent = (text) => {
    // Basic bold parsing for **text**
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <span key={index} className="font-semibold text-gray-900">
            {part.slice(2, -2)}
          </span>
        );
      }
      return part;
    });
  };

  const renderNotificationItem = (notification) => {
    const isRequest = notification.type === "REQUEST";

    return (
      <div
        key={notification.id}
        className={`p-4 border-b border-gray-100 last:border-b-0 transition-colors duration-200 ${
          !notification.isRead ? "bg-blue-50/60" : "bg-white"
        }`}
      >
        <div className="flex gap-4">
          {/* Icon/Avatar Section */}
          <div className="relative shrink-0">
            {isRequest ? (
              <>
                <img
                  src={notification.user.avatar}
                  alt={notification.user.name}
                  className="w-12 h-12 rounded-full object-cover border border-gray-200"
                />
                {!notification.isRead && (
                  <span className="absolute top-0 right-0 block h-3 w-3 rounded-full bg-red-500 ring-2 ring-white" />
                )}
              </>
            ) : (
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  notification.bgColor || "bg-gray-100"
                }`}
              >
                {notification.icon && (
                  <notification.icon
                    className={`w-6 h-6 ${
                      notification.color || "text-gray-600"
                    }`}
                  />
                )}
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="flex-1 space-y-2">
            <p className="text-gray-700 text-[15px] leading-relaxed">
              {renderContent(notification.content)}
            </p>
            <p className="text-xs text-gray-500 font-medium">
              {notification.time}
            </p>

            {/* Action Buttons for Requests */}
            {isRequest && notification.status === "PENDING" && (
              <div className="flex gap-3 mt-3">
                <button
                  onClick={() => handleAccept(notification.id)}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors shadow-sm"
                >
                  Accept
                </button>
                <button
                  onClick={() => handleDecline(notification.id)}
                  className="flex-1 bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 text-sm font-medium py-2 px-4 rounded-lg transition-colors"
                >
                  Decline
                </button>
              </div>
            )}

            {/* Status Feedback for processed requests */}
            {isRequest && notification.status !== "PENDING" && (
              <div className="mt-2 text-sm font-medium text-gray-500 flex items-center gap-2">
                {notification.status === "ACCEPTED" ? (
                  <span className="text-green-600 flex items-center gap-1">
                    <CheckCircle2 size={16} /> Request accepted
                  </span>
                ) : (
                  <span className="text-red-500 flex items-center gap-1">
                    <X size={16} /> Request declined
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  if (notifications.length === 0) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
        <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-6">
          <BellOff className="w-10 h-10 text-gray-400" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          No updates yet
        </h3>
        <p className="text-gray-500 max-w-xs mx-auto">
          When you get requests or updates, they'll show up here. Go explore!
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-gray-100 px-4 py-4 flex items-center justify-between shadow-sm">
        <h1 className="text-xl font-bold text-gray-900 tracking-tight">
          Notifications
        </h1>
        {unreadCount > 0 && (
          <button
            onClick={markAllAsRead}
            className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
          >
            Mark all as read
          </button>
        )}
      </div>

      {/* Notifications List */}
      <div className="max-w-2xl mx-auto">
        {/* New Notifications Section */}
        {newNotifications.length > 0 && (
          <div className="mb-2">
            <div className="px-4 py-2 bg-gray-50/50">
              <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                New
              </h2>
            </div>
            <div className="bg-white border-y border-gray-100">
              {newNotifications.map(renderNotificationItem)}
            </div>
          </div>
        )}

        {/* Earlier Notifications Section */}
        {earlierNotifications.length > 0 && (
          <div>
            {newNotifications.length > 0 && (
              <div className="px-4 py-2 bg-gray-50/50">
                <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Earlier
                </h2>
              </div>
            )}
            <div
              className={`bg-white ${
                newNotifications.length === 0
                  ? "mt-0"
                  : "border-t border-gray-100"
              }`}
            >
              {earlierNotifications.map(renderNotificationItem)}
            </div>
          </div>
        )}
      </div>
      <Link to={"/"}>
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <button
          className="bg-black text-white p-4 rounded-full shadow-lg
               hover:bg-gray hover:scale-110 transition-all duration-300
               text-xl font-bold"
        >
          ✕
        </button>
      </div>
      </Link>
    </div>
  );
};

export default Notifications;
