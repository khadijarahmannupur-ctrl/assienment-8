"use client";

import { useState } from "react";
import tiles from "@/lib/tiles.json";
import TileCard from "@/component/TileCard";

export default function AllTilesPage() {

    const [search, setSearch] = useState("");

    // FILTER TILES
    const filteredTiles = tiles.filter((tile) =>
        tile.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <section className="min-h-screen bg-[#F8F4EE] px-6 py-10">

            <div className="mx-auto max-w-7xl">

                <div className="text-center">

                    <h1 className="text-4xl font-bold text-[#5C4033]">
                        Explore Premium Tiles
                    </h1>

                    <p className="mt-3 text-[#6B5B52]">
                        Discover elegant ceramic, marble & luxury tile collections
                    </p>

                </div>

                <div className="mx-auto mt-10 max-w-2xl">

                    <div className="relative">

                        <input
                            type="text"
                            placeholder="Search tiles by title..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="h-14 w-full rounded-2xl border border-[#D4A373]/40 bg-white px-6 text-[#5C4033] shadow-lg outline-none transition focus:border-[#8B5E3C] focus:ring-2 focus:ring-[#D4A373]/40"
                        />

                        
                        <div className="absolute right-5 top-1/2 -translate-y-1/2 text-[#8B5E3C]">
                             <button className="btn text-[#8B5E3C] rounded-2xl">Search</button>
                        </div>

                    </div>

                </div>

                <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

                    {filteredTiles.length > 0 ? (
                        filteredTiles.map((tile) => (
                            <TileCard key={tile.id} tile={tile} />
                        ))
                    ) : (
                        <div className="col-span-full py-20 text-center">

                            <h2 className="text-2xl font-semibold text-[#5C4033]">
                                No Tiles Found
                            </h2>

                            <p className="mt-3 text-[#8C7B75]">
                                Try searching with another tile name
                            </p>

                        </div>
                    )}

                </div>

            </div>
        </section>
    );
}