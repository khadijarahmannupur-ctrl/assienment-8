import tiles from "@/lib/tiles.json";
import Link from "next/link";
import Image from "next/image";

export default async function TileDetailsPage({ params }) {
    console.log(params);
    const { id } = await params;
    // console.log({id});
    // console.log("PARAM ID:", id);
    // console.log("AVAILABLE IDS:", tiles.map(t => t.id));

    // find single tile
    const tile = tiles.find((t) => String(t.id) === String(id));

    // not found handling
    if (!tile) {
        return (
            <div className="flex min-h-screen flex-col items-center justify-center bg-[#F8F4EE] px-6 text-center">
                <h1 className="text-5xl font-bold text-[#8B5E3C]">
                    Tile Not Found
                </h1>

                <p className="mt-4 text-[#6B5B52]">
                    The tile you are looking for does not exist.
                </p>

                <Link
                    href="/all-tiles"
                    className="mt-6 rounded-xl bg-[#8B5E3C] px-6 py-3 text-white"
                >
                    Back to All Tiles
                </Link>
            </div>
        );
    }

    return (
        <section className="min-h-screen bg-[#F8F4EE] px-6 py-12">
            <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">

                {/* IMAGE SECTION */}
                <div className="overflow-hidden rounded-3xl shadow-2xl">
                    <Image
                        src={tile.image}
                        alt={tile.title}
                        width={800}
                        height={400}
                        className="h-full w-full object-cover"
                    />
                </div>

                {/* DETAILS SECTION */}
                <div>
                    {/* CATEGORY */}
                    <span className="inline-block rounded-full bg-[#EADBC8] px-4 py-1 text-sm text-[#8B5E3C]">
                        {tile.category}
                    </span>

                    {/* TITLE */}
                    <h1 className="mt-4 text-4xl font-bold text-[#2D2D2D]">
                        {tile.title}
                    </h1>

                    {/* DESCRIPTION */}
                    <p className="mt-4 text-lg leading-8 text-[#6B5B52]">
                        {tile.description}
                    </p>

                    {/* INFO BOX */}
                    <div className="mt-8 space-y-4 rounded-2xl border border-[#EADBC8] bg-white p-6 shadow-md">

                        <p>
                            <span className="font-semibold text-[#5C4033]">Material:</span>{" "}
                            {tile.material}
                        </p>

                        <p>
                            <span className="font-semibold text-[#5C4033]">Dimensions:</span>{" "}
                            {tile.dimensions}
                        </p>

                        <p>
                            <span className="font-semibold text-[#5C4033]">Price:</span>{" "}
                            <span className="text-[#8B5E3C] font-bold">
                                ${tile.price}
                            </span>
                        </p>

                        <p>
                            <span className="font-semibold text-[#5C4033]">Stock:</span>{" "}
                            {tile.inStock ? "Available" : "Out of stock"}
                        </p>
                    </div>

                    {/* TAGS */}
                    <div className="mt-6 flex flex-wrap gap-3">
                        <span className="rounded-full bg-[#8B5E3C] px-4 py-1 text-sm text-white">
                            {tile.category}
                        </span>

                        <span className="rounded-full bg-[#D4A373] px-4 py-1 text-sm text-white">
                            Luxury
                        </span>
                    </div>

                    {/* BUTTONS */}
                    <div className="mt-10 flex gap-4">
                        <Link
                            href="/all-tiles"
                            className="rounded-xl border border-[#8B5E3C] px-6 py-3 text-[#5C4033] transition hover:bg-[#8B5E3C] hover:text-white"
                        >
                            Back
                        </Link>

                        <button className="rounded-xl bg-[#8B5E3C] px-6 py-3 text-white shadow-lg hover:bg-[#5C4033]">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}