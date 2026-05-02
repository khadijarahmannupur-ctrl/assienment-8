import Banner from '@/component/Banner'
import TileCard from '@/component/TileCard';
import WhyChooseUs from '@/component/WhyChooseUs';
import tiles from "@/lib/tiles.json";
import Features from '@/component/Features';
import Marquee from '@/component/Marquee';


export default function Home() {
  const featuredTiles = tiles.slice(0, 4);

  return (
    <>
    <Marquee></Marquee>
     <Banner></Banner>
      <div className="px-6">
        <h1 className="my-6 text-3xl font-bold text-[#8B5E3C]">
          Featured Tiles
        </h1>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {featuredTiles.map((tile) => (
            <TileCard key={tile.id} tile={tile} />
          ))}
        </div>
      </div>
      <WhyChooseUs></WhyChooseUs>
      <Features></Features>
    </>
  );
}