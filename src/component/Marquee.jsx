"use client";

import Marquee from "react-fast-marquee";

export default function LuxuryMarquee() {
  return (
    <div className="border-y border-[#D4A373]/30 bg-[#5C4033] py-4 shadow-md">

      <Marquee
        speed={45}
        gradient={false}
        pauseOnHover={true}
      >

        <div className="flex items-center gap-16 px-8">

          <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#F8F4EE]">
             New Arrivals: Ceramic Blue Tile
          </p>

          <span className="h-2 w-2 rounded-full bg-[#D4A373] shadow-[0_0_10px_#D4A373]"></span>

          <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#F8F4EE]">
             Weekly Feature: Modern Geometric Patterns
          </p>

          <span className="h-2 w-2 rounded-full bg-[#D4A373] shadow-[0_0_10px_#D4A373]"></span>

          <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#F8F4EE]">
             Luxury Marble Collection Available
          </p>

          <span className="h-2 w-2 rounded-full bg-[#D4A373] shadow-[0_0_10px_#D4A373]"></span>

          <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#F8F4EE]">
             Join The TileCraft Community
          </p>

          <span className="h-2 w-2 rounded-full bg-[#D4A373] shadow-[0_0_10px_#D4A373]"></span>

          <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#F8F4EE]">
             Premium Handmade Tiles In Stock
          </p>

        </div>

      </Marquee>
    </div>
  );
}