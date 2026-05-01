import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-[#F8F4EE]">
            {/* BACKGROUND BLUR */}
            <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#D4A373]/20 blur-3xl"></div>

            <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#8B5E3C]/10 blur-3xl"></div>

            <div className="mx-auto grid min-h-[90vh] max-w-7xl items-center gap-14 px-6 py-16 lg:grid-cols-2 lg:px-8">
                {/* LEFT CONTENT */}
                <div>
                    {/* SMALL BADGE */}
                    <div className="mb-6 inline-flex items-center rounded-full border border-[#D4A373] bg-[#fffaf4] px-5 py-2 text-sm font-medium text-[#8B5E3C] shadow-sm">
                        Premium Ceramic & Marble Collection
                    </div>

                    {/* HEADING */}
                    <h1 className="max-w-2xl text-5xl font-bold leading-tight text-[#2D2D2D] md:text-6xl">
                        Discover Your
                        <span className="block text-[#8B5E3C]">
                            Perfect Aesthetic
                        </span>
                    </h1>

                    {/* DESCRIPTION */}
                    <p className="mt-7 max-w-xl text-lg leading-8 text-[#6B5B52]">
                        Explore luxury ceramic, marble, and modern tiles crafted
                        to elevate your interiors with timeless elegance and
                        premium aesthetics.
                    </p>

                    {/* BUTTONS */}
                    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                        <Link
                            href="/all-tiles"
                            className="rounded-xl bg-[#8B5E3C] px-8 py-4 text-center text-base font-medium text-white shadow-lg transition-all duration-300 hover:bg-[#5C4033]"
                        >
                            Browse Now
                        </Link>

                        <button className="rounded-xl border border-[#8B5E3C] px-8 py-4 text-base font-medium text-[#5C4033] transition-all duration-300 hover:bg-[#8B5E3C] hover:text-white">
                            Explore Collection
                        </button>
                    </div>

                    {/* STATS */}
                    <div className="mt-14 flex flex-wrap gap-10">
                        <div>
                            <h3 className="text-3xl font-bold text-[#8B5E3C]">
                                500+
                            </h3>

                            <p className="mt-1 text-[#6B5B52]">
                                Premium Tiles
                            </p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold text-[#8B5E3C]">
                                10K+
                            </h3>

                            <p className="mt-1 text-[#6B5B52]">
                                Happy Customers
                            </p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold text-[#8B5E3C]">
                                15+
                            </h3>

                            <p className="mt-1 text-[#6B5B52]">
                                Design Collections
                            </p>
                        </div>
                    </div>
                </div>

                {/* RIGHT IMAGE SECTION */}
                <div className="relative">
                    {/* MAIN IMAGE */}
                    <div className="overflow-hidden rounded-[32px] shadow-2xl">
                        <Image
                            width={650}
                            height={650}
                            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop"
                            alt="Luxury Interior"
                            className="h-[650px] w-full object-cover"
                        />
                    </div>

                    {/* FLOATING CARD 1 */}
                    <div className="absolute -left-6 bottom-10 hidden rounded-2xl border border-[#EADBC8] bg-white/90 p-5 shadow-xl backdrop-blur md:block">
                        <p className="text-sm text-[#8B5E3C]">
                            Featured Style
                        </p>

                        <h3 className="mt-1 text-lg font-semibold text-[#2D2D2D]">
                            Modern Marble
                        </h3>
                    </div>

                    {/* FLOATING CARD 2 */}
                    <div className="absolute -right-6 top-10 hidden rounded-2xl border border-[#EADBC8] bg-white/90 p-5 shadow-xl backdrop-blur md:block">
                        <p className="text-sm text-[#8B5E3C]">
                            New Arrival
                        </p>

                        <h3 className="mt-1 text-lg font-semibold text-[#2D2D2D]">
                            Ceramic Luxe
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    );
}