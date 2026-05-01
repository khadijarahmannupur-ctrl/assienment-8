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

    // DEMO USER DATA
    const user = {
        name: "Nupur Rahman",
        image:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    };

    const handleUpdate = async (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const image = e.target.image.value;

        try {
            // BETTER AUTH UPDATE
            const { data, error } = await authClient.updateUser({
                name,
                image,
            });

            if (error) {
                toast.error(error.message);
                return;
            }

            toast.success("Profile updated successfully!");
            console.log(data);

        } catch (err) {
            toast.error("Something went wrong");
        }
    };

    return (
        <section className="min-h-screen bg-[#F8F4EE] px-6 py-16">

            {/* CONTAINER */}
            <div className="mx-auto max-w-3xl">

                {/* TITLE */}
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-[#5C4033]">
                        Update Profile
                    </h1>

                    <p className="mt-3 text-[#6B5B52]">
                        Update your name and profile image
                    </p>
                </div>

                {/* CARD */}
                <Card className="mt-12 rounded-3xl border border-[#EADBC8] bg-white p-8 shadow-2xl">

                    {/* PROFILE PREVIEW */}
                    <div className="flex flex-col items-center">
                        <div className="overflow-hidden rounded-full border-4 border-[#EADBC8] shadow-lg">
                            <Image
                                src={user.image}
                                alt={user.name}
                                width={120}
                                height={120}
                                className="h-[120px] w-[120px] object-cover"
                            />
                        </div>

                        <h2 className="mt-4 text-2xl font-semibold text-[#5C4033]">
                            {user.name}
                        </h2>
                    </div>

                    {/* FORM */}
                    <Form
                        onSubmit={handleUpdate}
                        className="mt-10 flex flex-col gap-6"
                    >
                        {/* NAME */}
                        <TextField isRequired name="name" type="text">
                            <Label className="text-[#5C4033]">
                                Full Name
                            </Label>

                            <Input
                                defaultValue={user.name}
                                placeholder="Enter your name"
                                classNames={{
                                    inputWrapper:
                                        "bg-[#F8F4EE] border border-[#EADBC8] hover:border-[#8B5E3C]",
                                }}
                            />

                            <FieldError />
                        </TextField>

                        {/* IMAGE */}
                        <TextField isRequired name="image" type="text">
                            <Label className="text-[#5C4033]">
                                Profile Image URL
                            </Label>

                            <Input
                                defaultValue={user.image}
                                placeholder="Enter image url"
                                classNames={{
                                    inputWrapper:
                                        "bg-[#F8F4EE] border border-[#EADBC8] hover:border-[#8B5E3C]",
                                }}
                            />

                            <FieldError />
                        </TextField>

                        {/* BUTTONS */}
                        <div className="mt-4 flex flex-col gap-4 sm:flex-row">

                            <Button
                                type="submit"
                                className="h-12 flex-1 rounded-xl bg-[#8B5E3C] text-base text-white transition hover:bg-[#5C4033]"
                            >
                                Update Information
                            </Button>

                            <Link href="/myProfile" className="flex-1">
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