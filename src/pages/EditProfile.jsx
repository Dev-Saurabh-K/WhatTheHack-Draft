import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Camera } from "lucide-react";

const EditProfile = () => {
    const navigate = useNavigate();

    // Mock initial data representing a logged-in student
    const initialData = {
        fullName: "Raj",
        bio: "CS Student | Tech enthusiast | Lender of Drafters",
        college: "NSEC",
        branch: "B.Tech - Computer Science",
        year: "2nd",
        hostel: "Hostel 12, Room 404",
        email: "raj@.ac.in",
        phone: "879xxxx82",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
    };

    const [formData, setFormData] = useState(initialData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSave = () => {
        console.log("Saving profile data:", formData);
        alert("Profile Updated!");
        // In a real app, we would make an API call here
    };

    return (
        <div className="min-h-screen bg-gray-50 pb-8">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-white border-b border-gray-100 px-4 h-14 flex items-center justify-between shadow-sm">
                <button
                    onClick={() => navigate(-1)}
                    className="text-gray-500 hover:text-gray-700 text-base font-medium"
                >
                    Cancel
                </button>
                <h1 className="text-lg font-bold text-gray-900">Edit Profile</h1>
                <button
                    onClick={handleSave}
                    className="text-indigo-600 hover:text-indigo-700 text-base font-semibold"
                >
                    Save
                </button>
            </header>

            <main className="max-w-md mx-auto pt-6 px-4 space-y-8">
                {/* Profile Photo Section */}
                <div className="flex flex-col items-center">
                    <div className="relative">
                        <img
                            src={formData.avatar}
                            alt="Profile"
                            className="w-24 h-24 rounded-full object-cover border-2 border-white shadow-md"
                        />
                        <button className="absolute bottom-0 right-0 bg-indigo-600 text-white p-1.5 rounded-full border-2 border-white shadow-sm active:scale-95 transition-transform">
                            <Camera size={16} />
                        </button>
                    </div>
                    <button className="mt-3 text-indigo-600 font-medium text-sm">
                        Change Profile Photo
                    </button>
                </div>

                {/* Form Fields */}
                <div className="space-y-6">
                    {/* Section 1: Basic Info */}
                    <section className="space-y-4">
                        <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                            Basic Info
                        </h2>
                        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="w-full h-12 px-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Bio
                                </label>
                                <textarea
                                    name="bio"
                                    value={formData.bio}
                                    onChange={handleChange}
                                    rows="3"
                                    className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all resize-none"
                                    placeholder="Tell us about yourself..."
                                />
                            </div>
                        </div>
                    </section>

                    {/* Section 2: Campus Details */}
                    <section className="space-y-4">
                        <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                            Campus Details
                        </h2>
                        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    College / University
                                </label>
                                <input
                                    type="text"
                                    value={formData.college}
                                    readOnly
                                    disabled
                                    className="w-full h-12 px-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-500 cursor-not-allowed"
                                />
                                <p className="mt-1 text-xs text-gray-400">
                                    Verified via education email
                                </p>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Branch / Course
                                </label>
                                <input
                                    type="text"
                                    name="branch"
                                    value={formData.branch}
                                    onChange={handleChange}
                                    className="w-full h-12 px-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                                    placeholder="e.g. B.Tech CS"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Year of Study
                                    </label>
                                    <select
                                        name="year"
                                        value={formData.year}
                                        onChange={handleChange}
                                        className="w-full h-12 px-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all bg-white"
                                    >
                                        <option value="1st">1st Year</option>
                                        <option value="2nd">2nd Year</option>
                                        <option value="3rd">3rd Year</option>
                                        <option value="4th">4th Year</option>
                                        <option value="5th">5th Year</option>
                                        <option value="Alumni">Alumni</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Hostel / Location
                                    </label>
                                    <input
                                        type="text"
                                        name="hostel"
                                        value={formData.hostel}
                                        onChange={handleChange}
                                        className="w-full h-12 px-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                                        placeholder="e.g. Block A"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 3: Contact Info */}
                    <section className="space-y-4">
                        <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                            Private Contact Info
                        </h2>
                        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    readOnly
                                    disabled
                                    className="w-full h-12 px-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-500 cursor-not-allowed"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full h-12 px-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                                    placeholder="+91 99999 99999"
                                />
                            </div>
                        </div>
                    </section>
                </div>

                {/* Bottom padding for scroll */}
                <div className="h-8"></div>
            </main>
        </div>
    );
};

export default EditProfile;