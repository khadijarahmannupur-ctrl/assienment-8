import Image from "next/image";
import Link from "next/link";

export default function TileCard({ tile }) {
    return (
        <div className="rounded-xl border border-[#8B5E3C] bg-white shadow-md transition hover:shadow-xl">
            <Image
                width={200}
                height={200}
                src={tile.image}
                alt={tile.title}
                className="h-48 w-full rounded-t-xl object-cover"
            />

            <div className="p-4">
                <h2 className="text-lg font-semibold text-[#5C4033]">
                    {tile.title}
                </h2>

                <p className="text-sm text-gray-500">
                    {tile.description.slice(0, 60)}...
                </p>

                <div className="mt-3 flex items-center justify-between">
                    <p className="font-bold text-[#8B5E3C]">
                        ${tile.price}
                    </p>

                    <Link
                        href={`/tileDetails/${tile.id}`}
                        className="rounded-lg bg-[#8B5E3C] px-3 py-1 text-sm text-white"
                    >
                        Details
                    </Link>
                </div>
            </div>
        </div>
    );
}