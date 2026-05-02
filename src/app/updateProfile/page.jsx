"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import {
    Button,
    Card,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import { toast } from "react-toastify";

export default function UpdateProfilePage() {
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
    const onSubmit = async (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const image = e.target.image.value;
        console.log({ name, image })

        await authClient.updateUser({
            name,
            image,
        })
    }

    return (
        <section className="min-h-screen bg-[#F8F4EE] px-6 py-16">

            <div className="mx-auto max-w-3xl">

                {/* TITLE */}
                <div className="text-center">

                    <h1 className="text-4xl font-bold text-[#5C4033]">
                        Update Profile
                    </h1>

                    <p className="mt-3 text-[#6B5B52]">
                        Update your profile information
                    </p>

                </div>

                {/* CARD */}
                <Card className="mt-12 rounded-3xl border border-[#EADBC8] bg-white p-8 shadow-2xl">

                    {/* PROFILE IMAGE */}
                    <div className="flex flex-col items-center">

                        <div className="overflow-hidden rounded-full border-4 border-[#EADBC8] shadow-lg">

                            <Image
                                src={
                                    user?.image ||
                                    "https://cdn-icons-png.flaticon.com/512/219/219969.png"
                                }
                                alt={user?.name || "User"}
                                width={120}
                                height={120}
                            />

                        </div>

                        <h2 className="mt-4 text-2xl font-semibold text-[#5C4033]">
                            {user?.name}
                        </h2>

                    </div>

                    {/* FORM */}
                    <Form
                        onSubmit={onSubmit}
                        className="mt-10 flex flex-col gap-6"
                    >

                        {/* NAME */}
                        <TextField defaultValue={user?.name} isRequired name="name" type="text">

                            <Label className="text-[#5C4033]">
                                Full Name
                            </Label>

                            <Input
                                placeholder="Enter your name"
                                className="border border-[#EADBC8] bg-[#F8F4EE]"
                            />

                            <FieldError />

                        </TextField>

                        {/* IMAGE */}
                        <TextField defaultValue={user?.image} isRequired name="image" type="text">

                            <Label className="text-[#5C4033]">
                                Profile Image URL
                            </Label>

                            <Input
                                placeholder="Enter image url"
                                className="border border-[#EADBC8] bg-[#F8F4EE]"
                            />

                            <FieldError />

                        </TextField>

                        {/* BUTTONS */}
                        <div className="mt-4 flex flex-col gap-4 sm:flex-row">

                            <Button
                                type="submit"
                                className="h-12 flex-1 rounded-xl bg-[#8B5E3C] text-base text-white hover:bg-[#5C4033]"
                            >
                                Update Information
                            </Button>

                            <Link href="/my-profile" className="flex-1">

                                <Button
                                    type="button"
                                    variant="bordered"
                                    className="h-12 w-full rounded-xl border-[#8B5E3C] text-[#5C4033]"
                                >
                                    Cancel
                                </Button>

                            </Link>

                        </div>

                    </Form>
                </Card>
            </div>
        </section>
    );
}