"use client";

import Image from "next/image";
import Link from "next/link";
import { Button, Card } from "@heroui/react";
import { authClient } from "@/lib/auth-client";

export default function MyProfilePage() {

    const { data, isPending } = authClient.useSession();

    if (isPending) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-[#F8F4EE]">
                <div className="h-16 w-16 animate-spin rounded-full border-4 border-[#D4A373]/30 border-t-[#8B5E3C]"></div>
            </div>
        );
    }
    const user = data?.user;
    // console.log(user);

    return (
        <section className="min-h-screen bg-[#F8F4EE] px-6 py-16">

            
            <div className="mx-auto max-w-5xl">

                
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-[#5C4033]">
                        My Profile
                    </h1>

                    <p className="mt-3 text-[#6B5B52]">
                        Manage your profile information and account settings
                    </p>
                </div>

                
                <Card className="mt-12 overflow-hidden rounded-3xl border border-[#EADBC8] bg-white shadow-2xl">

                   
                    <div className="h-40 bg-gradient-to-r from-[#8B5E3C] to-[#D4A373]" />

                    <div className="relative px-8 pb-10 pt-0">

                        
                        <div className="-mt-16 flex justify-center">
                            <div className="overflow-hidden rounded-full border-4 border-white shadow-xl">

                                <Image
                                    src={
                                        user?.image ||
                                        "https://cdn-icons-png.flaticon.com/512/219/219969.png"
                                    }
                                    alt={user?.name || "User"}
                                    width={120}
                                    height={120}
                                    referrerPolicy="no-referrer"
                                />

                            </div>
                        </div>

                        
                        <div className="mt-6 text-center">

                            <h2 className="text-3xl font-bold text-[#5C4033]">
                                {user?.name}
                            </h2>

                            <p className="mt-2 text-[#6B5B52]">
                                {user?.email}
                            </p>

                        </div>

                        
                        <div className="mt-10 grid gap-6 md:grid-cols-3">

                            <div className="rounded-2xl bg-[#F8F4EE] p-6 text-center">

                                <h3 className="text-lg font-semibold text-[#5C4033]">
                                    Favorite Style
                                </h3>

                                <p className="mt-2 text-[#6B5B52]">
                                    Minimal Luxury
                                </p>

                            </div>

                            <div className="rounded-2xl bg-[#F8F4EE] p-6 text-center">

                                <h3 className="text-lg font-semibold text-[#5C4033]">
                                    Saved Tiles
                                </h3>

                                <p className="mt-2 text-[#6B5B52]">
                                    12 Collections
                                </p>

                            </div>

                            <div className="rounded-2xl bg-[#F8F4EE] p-6 text-center">

                                <h3 className="text-lg font-semibold text-[#5C4033]">
                                    Membership
                                </h3>

                                <p className="mt-2 text-[#6B5B52]">
                                    Premium User
                                </p>

                            </div>

                        </div>

                        <div className="mt-10 flex justify-center">

                            <Link href="/updateProfile">

                                <Button
                                    className="h-12 rounded-xl bg-[#8B5E3C] px-8 text-base text-white hover:bg-[#5C4033]"
                                >
                                    Update Profile
                                </Button>

                            </Link>

                        </div>

                    </div>
                </Card>
            </div>
        </section>
    );
}