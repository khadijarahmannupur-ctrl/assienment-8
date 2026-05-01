export default function FeaturesSection() {
    return (
        <section className="bg-white py-20 px-6">
            <div className="mx-auto max-w-7xl">

                {/* TITLE */}
                <div className="text-center">
                    <h2 className="text-4xl font-bold text-[#8B5E3C]">
                        Our Features
                    </h2>

                    <p className="mt-4 text-[#6B5B52]">
                        Everything you need for a premium tile shopping experience
                    </p>
                </div>

                {/* FEATURES GRID */}
                <div className="mt-14 grid gap-8 md:grid-cols-4">

                    <div className="rounded-xl bg-[#F8F4EE] p-6 text-center shadow-sm">
                        <h3 className="font-semibold text-[#5C4033]">
                            Fast Search
                        </h3>
                        <p className="mt-2 text-sm text-[#6B5B52]">
                            Quickly find tiles by name or category.
                        </p>
                    </div>

                    <div className="rounded-xl bg-[#F8F4EE] p-6 text-center shadow-sm">
                        <h3 className="font-semibold text-[#5C4033]">
                            Filter System
                        </h3>
                        <p className="mt-2 text-sm text-[#6B5B52]">
                            Easily filter by style, material, and price.
                        </p>
                    </div>

                    <div className="rounded-xl bg-[#F8F4EE] p-6 text-center shadow-sm">
                        <h3 className="font-semibold text-[#5C4033]">
                            Detail View
                        </h3>
                        <p className="mt-2 text-sm text-[#6B5B52]">
                            High quality product details with images.
                        </p>
                    </div>

                    <div className="rounded-xl bg-[#F8F4EE] p-6 text-center shadow-sm">
                        <h3 className="font-semibold text-[#5C4033]">
                            Responsive UI
                        </h3>
                        <p className="mt-2 text-sm text-[#6B5B52]">
                            Works perfectly on mobile, tablet, desktop.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}