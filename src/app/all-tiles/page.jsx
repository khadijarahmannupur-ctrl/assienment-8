import tiles from "@/lib/tiles.json";
import TileCard from "@/component/TileCard";

export default function AllTilesPage() {
    return (
        <div className="px-6">
            <h1 className="my-6 text-3xl font-bold text-[#8B5E3C]">
                All Tiles
            </h1>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {tiles.map((tile) => (
                    <TileCard key={tile.id} tile={tile} />
                ))}
            </div>
        </div>
    );
}