"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // 🔥 Temporary auth state
  // পরে BetterAuth connect করলে replace করে দিবা
  const user = true;

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "All Tiles", href: "/all-tiles" },
    { name: "My Profile", href: "/my-profile" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[#d9c7b8] bg-[#F8F4EE]/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-8">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#8B5E3C] shadow-md">
            <span className="text-lg font-bold text-white">T</span>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-wide text-[#5C4033]">
              TileCraft
            </h2>
            <p className="text-xs text-[#8B5E3C]">
              Luxury Tile Gallery
            </p>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-[15px] font-medium transition-all duration-300 ${
                pathname === link.href
                  ? "text-[#8B5E3C]"
                  : "text-[#2D2D2D]"
              }`}
            >
              {link.name}

              <span
                className={`absolute -bottom-2 left-0 h-[2px] bg-[#8B5E3C] transition-all duration-300 ${
                  pathname === link.href ? "w-full" : "w-0"
                }`}
              ></span>
            </Link>
          ))}
        </nav>

        {/* RIGHT SIDE */}
        <div className="hidden items-center gap-4 md:flex">
          {!user ? (
            <Link
              href="/login"
              className="rounded-xl bg-[#8B5E3C] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-[#5C4033]"
            >
              Login
            </Link>
          ) : (
            <>
              <Link href="/my-profile">
                <Image 
                  src="https://i.ibb.co/4pDNDk1/avatar.png"
                  alt="user"
                  width={400}
                    height={400}
                  className="h-11 w-11 rounded-full border-2 border-[#8B5E3C] object-cover"
                />
              </Link>

              <button className="rounded-xl border border-[#8B5E3C] px-5 py-2 text-sm font-medium text-[#5C4033] transition-all duration-300 hover:bg-[#8B5E3C] hover:text-white">
                Logout
              </button>
            </>
          )}
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg border border-[#d9c7b8] p-2 text-[#5C4033] md:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`overflow-hidden bg-[#F8F4EE] transition-all duration-300 md:hidden ${
          open ? "max-h-[400px] border-t border-[#d9c7b8]" : "max-h-0"
        }`}
      >
        <div className="space-y-5 px-6 py-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block text-base font-medium ${
                pathname === link.href
                  ? "text-[#8B5E3C]"
                  : "text-[#2D2D2D]"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <div className="pt-4">
            {!user ? (
              <Link
                href="/login"
                className="block rounded-xl bg-[#8B5E3C] px-5 py-3 text-center text-white"
              >
                Login
              </Link>
            ) : (
              <div className="space-y-4">
                <Link
                  href="/my-profile"
                  className="flex items-center gap-3"
                >
                  <Image
                    src="https://i.ibb.co/4pDNDk1/avatar.png"
                    alt="user"
                    width={400}
                    height={400}
                    className="h-10 w-10 rounded-full border-2 border-[#8B5E3C]"
                  />

                  <span className="font-medium text-[#5C4033]">
                    My Profile
                  </span>
                </Link>

                <button className="w-full rounded-xl border border-[#8B5E3C] px-5 py-3 text-[#5C4033] transition-all duration-300 hover:bg-[#8B5E3C] hover:text-white">
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}