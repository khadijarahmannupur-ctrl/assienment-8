export default function WhyChooseUs() {
    return (
        <section className="bg-[#F8F4EE] py-20 px-6">
            <div className="mx-auto max-w-7xl text-center">

                {/* TITLE */}
                <h2 className="text-4xl font-bold text-[#8B5E3C]">
                    Why Choose TileCraft
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-[#6B5B52]">
                    We provide premium quality tiles with modern designs,
                    durability, and luxury aesthetics for your dream space.
                </p>

                {/* CARDS */}
                <div className="mt-14 grid gap-8 md:grid-cols-3">

                    <div className="rounded-2xl border border-[#EADBC8] bg-white p-8 shadow-md transition hover:shadow-xl">
                        <h3 className="text-xl font-semibold text-[#5C4033]">
                            Premium Quality
                        </h3>
                        <p className="mt-3 text-[#6B5B52]">
                            High-end ceramic and marble tiles with long-lasting durability.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-[#EADBC8] bg-white p-8 shadow-md transition hover:shadow-xl">
                        <h3 className="text-xl font-semibold text-[#5C4033]">
                            Modern Designs
                        </h3>
                        <p className="mt-3 text-[#6B5B52]">
                            Trendy and aesthetic tile collections for luxury interiors.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-[#EADBC8] bg-white p-8 shadow-md transition hover:shadow-xl">
                        <h3 className="text-xl font-semibold text-[#5C4033]">
                            Trusted Service
                        </h3>
                        <p className="mt-3 text-[#6B5B52]">
                            Reliable delivery and customer satisfaction guaranteed.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}