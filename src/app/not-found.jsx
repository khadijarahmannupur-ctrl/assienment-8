import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center overflow-hidden bg-[#F8F4EE] px-6">
      {/* BACKGROUND BLUR */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#D4A373]/20 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#8B5E3C]/10 blur-3xl"></div>

      <div className="relative z-10 max-w-3xl text-center">
        {/* 404 NUMBER */}
        <h1 className="text-[120px] font-extrabold leading-none text-[#8B5E3C] md:text-[180px]">
          404
        </h1>

        {/* TITLE */}
        <h2 className="mt-4 text-3xl font-bold text-[#2D2D2D] md:text-5xl">
          Tile Not Found
        </h2>

        {/* DESCRIPTION */}
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#6B5B52]">
          The page you are looking for might have been removed,
          renamed, or is temporarily unavailable. Explore our
          premium tile collections and discover your perfect
          interior aesthetic.
        </p>

        {/* BUTTONS */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="rounded-xl bg-[#8B5E3C] px-8 py-4 text-base font-medium text-white shadow-lg transition-all duration-300 hover:bg-[#5C4033]"
          >
            Back To Home
          </Link>

          <Link
            href="/all-tiles"
            className="rounded-xl border border-[#8B5E3C] px-8 py-4 text-base font-medium text-[#5C4033] transition-all duration-300 hover:bg-[#8B5E3C] hover:text-white"
          >
            Browse Tiles
          </Link>
        </div>

        {/* EXTRA CARD */}
        <div className="mx-auto mt-16 max-w-xl rounded-3xl border border-[#EADBC8] bg-white/70 p-6 shadow-xl backdrop-blur">
          <p className="text-sm uppercase tracking-widest text-[#8B5E3C]">
            Luxury Tile Gallery
          </p>

          <h3 className="mt-3 text-2xl font-semibold text-[#2D2D2D]">
            Explore Modern Interior Collections
          </h3>

          <p className="mt-3 text-[#6B5B52]">
            Discover elegant ceramic, marble, and contemporary
            tile designs crafted for premium spaces.
          </p>
        </div>
      </div>
    </section>
  );
}