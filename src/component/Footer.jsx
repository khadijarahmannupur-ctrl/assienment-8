import Link from "next/link";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter,
} from "react-icons/fa";

import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="mt-24 border-t border-[#7a5a45] bg-[#2F241F] text-[#F8F4EE]">
            <div className="mx-auto grid max-w-7xl gap-14 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
                {/* LOGO & DESCRIPTION */}
                <div>
                    <div className="mb-5 flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#8B5E3C] shadow-md">
                            <span className="text-lg font-bold text-white">T</span>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold tracking-wide">
                                TileCraft
                            </h2>

                            <p className="text-xs text-[#D4A373]">
                                Luxury Tile Gallery
                            </p>
                        </div>
                    </div>

                    <p className="max-w-xs leading-7 text-[#EADBC8]">
                        Discover premium ceramic, marble, and modern interior tiles
                        crafted to transform your living spaces into timeless luxury.
                    </p>

                    {/* SOCIAL ICONS */}
                    <div className="mt-6 flex items-center gap-4">
                        <Link
                            href="#"
                            className="rounded-full border border-[#8B5E3C] p-3 text-[#D4A373] transition-all duration-300 hover:bg-[#8B5E3C] hover:text-white"
                        >
                            <FaFacebookF size={16} />
                        </Link>

                        <Link
                            href="#"
                            className="rounded-full border border-[#8B5E3C] p-3 text-[#D4A373] transition-all duration-300 hover:bg-[#8B5E3C] hover:text-white"
                        >
                            <FaInstagram size={16} />
                        </Link>

                        <Link
                            href="#"
                            className="rounded-full border border-[#8B5E3C] p-3 text-[#D4A373] transition-all duration-300 hover:bg-[#8B5E3C] hover:text-white"
                        >
                            <FaTwitter size={16} />
                        </Link>

                        <Link
                            href="#"
                            className="rounded-full border border-[#8B5E3C] p-3 text-[#D4A373] transition-all duration-300 hover:bg-[#8B5E3C] hover:text-white"
                        >
                            <FaLinkedinIn size={16} />
                        </Link>
                    </div>
                </div>

                {/* QUICK LINKS */}
                <div>
                    <h3 className="mb-6 text-xl font-semibold text-[#F8F4EE]">
                        Quick Links
                    </h3>

                    <ul className="space-y-4 text-[#EADBC8]">
                        <li>
                            <Link
                                href="/"
                                className="transition-all duration-300 hover:text-[#D4A373]"
                            >
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/all-tiles"
                                className="transition-all duration-300 hover:text-[#D4A373]"
                            >
                                All Tiles
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/my-profile"
                                className="transition-all duration-300 hover:text-[#D4A373]"
                            >
                                My Profile
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/login"
                                className="transition-all duration-300 hover:text-[#D4A373]"
                            >
                                Login
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* CATEGORIES */}
                <div>
                    <h3 className="mb-6 text-xl font-semibold text-[#F8F4EE]">
                        Categories
                    </h3>

                    <ul className="space-y-4 text-[#EADBC8]">
                        <li className="transition-all duration-300 hover:text-[#D4A373]">
                            Ceramic Tiles
                        </li>

                        <li className="transition-all duration-300 hover:text-[#D4A373]">
                            Marble Finish
                        </li>

                        <li className="transition-all duration-300 hover:text-[#D4A373]">
                            Minimal Designs
                        </li>

                        <li className="transition-all duration-300 hover:text-[#D4A373]">
                            Luxury Collection
                        </li>
                    </ul>
                </div>

                {/* CONTACT */}
                <div>
                    <h3 className="mb-6 text-xl font-semibold text-[#F8F4EE]">
                        Contact Us
                    </h3>

                    <div className="space-y-5 text-[#EADBC8]">
                        <div className="flex items-start gap-3">
                            <MapPin className="mt-1 text-[#D4A373]" size={18} />

                            <p>Dhaka, Bangladesh</p>
                        </div>

                        <div className="flex items-center gap-3">
                            <Phone className="text-[#D4A373]" size={18} />

                            <p>+880 1234-567890</p>
                        </div>

                        <div className="flex items-center gap-3">
                            <Mail className="text-[#D4A373]" size={18} />

                            <p>support@tilecraft.com</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* BOTTOM */}
            <div className="border-t border-[#5C4033]">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-[#D6C1B2] md:flex-row">
                    <p>© 2026 TileCraft. All rights reserved.</p>

                    <div className="flex items-center gap-6">
                        <Link
                            href="#"
                            className="transition-all duration-300 hover:text-[#D4A373]"
                        >
                            Privacy Policy
                        </Link>

                        <Link
                            href="#"
                            className="transition-all duration-300 hover:text-[#D4A373]"
                        >
                            Terms & Conditions
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}