export default function Loading() {
    return (
        <section className="flex min-h-screen items-center justify-center overflow-hidden bg-[#F8F4EE] px-6">

            
            <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#D4A373]/20 blur-3xl"></div>

            <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#8B5E3C]/10 blur-3xl"></div>

            
            <div className="relative z-10 flex flex-col items-center">

                
                <div className="relative flex items-center justify-center">

                    
                    <div className="h-28 w-28 animate-spin rounded-full border-[6px] border-[#D4A373]/30 border-t-[#8B5E3C]"></div>

                    
                    <div className="absolute grid grid-cols-2 gap-1">

                        <div className="h-5 w-5 animate-pulse rounded-sm bg-[#8B5E3C]"></div>

                        <div className="h-5 w-5 animate-pulse rounded-sm bg-[#D4A373] delay-100"></div>

                        <div className="h-5 w-5 animate-pulse rounded-sm bg-[#D4A373] delay-200"></div>

                        <div className="h-5 w-5 animate-pulse rounded-sm bg-[#8B5E3C] delay-300"></div>
                    </div>
                </div>

                
                <h2 className="mt-10 text-3xl font-bold tracking-wide text-[#5C4033]">
                    TileCraft Gallery
                </h2>

                <p className="mt-3 text-sm uppercase tracking-[0.35em] text-[#8C7B75]">
                    Loading Premium Collection...
                </p>

                
                <div className="mt-6 h-[2px] w-52 overflow-hidden rounded-full bg-[#EADBC8]">

                    <div className="h-full w-24 animate-pulse rounded-full bg-[#8B5E3C]"></div>
                </div>
            </div>
        </section>
    );
}