"use client";

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import Link from "next/link";
import {
    Button,
    Card,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import { toast } from "react-toastify";

export default function SignUpPage() {

    const onSubmit = async (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const image = e.target.image.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        const { data, error } = await authClient.signUp.email({
            name,
            email,
            password,
            image,
        });

        if (error) {
            toast.error(error.message);
            return;
        }

        toast.success("Account created successfully!");
    };

    const handleGoogleSignUp = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    }

    return (
        <section className="relative flex min-h-screen items-center justify-center bg-[#F8F4EE] px-6 py-16">

            {/* BACKGROUND BLUR */}
            <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#D4A373]/20 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#8B5E3C]/10 blur-3xl"></div>

            {/* CARD */}
            <Card className="relative z-10 w-full max-w-xl rounded-3xl border border-[#EADBC8] bg-white/90 p-8 shadow-2xl backdrop-blur-md">

                {/* TITLE */}
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-[#5C4033]">
                        Create Account
                    </h1>
                    <p className="mt-3 text-[#6B5B52]">
                        Join premium tile gallery community
                    </p>
                </div>

                {/* FORM */}
                <Form onSubmit={onSubmit} className="mt-10 flex flex-col gap-5">

                    {/* NAME */}
                    <TextField isRequired name="name">
                        <Label className="text-[#5C4033]">Name</Label>
                        <Input
                            placeholder="Enter your name"
                            className="border border-[#EADBC8] bg-[#F8F4EE]"
                        />
                        <FieldError />
                    </TextField>

                    {/* IMAGE */}
                    <TextField isRequired name="image">
                        <Label className="text-[#5C4033]">Photo URL</Label>
                        <Input
                            placeholder="Enter image url"
                            className="border border-[#EADBC8] bg-[#F8F4EE]"
                        />
                        <FieldError />
                    </TextField>

                    {/* EMAIL */}
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter valid email";
                            }
                            return null;
                        }}
                    >
                        <Label className="text-[#5C4033]">Email</Label>
                        <Input
                            placeholder="john@example.com"
                            className="border border-[#EADBC8] bg-[#F8F4EE]"
                        />
                        <FieldError />
                    </TextField>

                    {/* PASSWORD */}
                    <TextField
                        isRequired
                        name="password"
                        type="password"
                        minLength={8}
                        validate={(value) => {
                            if (value.length < 8) return "Min 8 characters";
                            if (!/[A-Z]/.test(value)) return "Need uppercase letter";
                            if (!/[0-9]/.test(value)) return "Need number";
                            return null;
                        }}
                    >
                        <Label className="text-[#5C4033]">Password</Label>
                        <Input
                            placeholder="Enter password"
                            className="border border-[#EADBC8] bg-[#F8F4EE]"
                        />
                        <Description className="text-[#8C7B75]">
                            8+ chars with uppercase & number
                        </Description>
                        <FieldError />
                    </TextField>

                    {/* SUBMIT BUTTON */}
                    <Button
                        type="submit"
                        className="mt-4 h-12 w-full rounded-xl bg-[#8B5E3C] text-base font-medium text-white hover:bg-[#5C4033]"
                    >
                        <Check />
                        Create Account
                    </Button>
                </Form>

                {/* LOGIN LINK */}
                <p className="mt-8 text-center text-[#6B5B52]">
                    Already have an account?{" "}
                    <Link href="/login" className="font-semibold text-[#8B5E3C] hover:underline">
                        Login
                    </Link>
                </p>

                {/* DIVIDER */}
                <div className="my-8 flex items-center gap-4">
                    <div className="h-px flex-1 bg-[#EADBC8]"></div>
                    <span className="text-sm text-[#8C7B75]">OR</span>
                    <div className="h-px flex-1 bg-[#EADBC8]"></div>
                </div>

                {/* GOOGLE BUTTON */}
                <Button
                    onClick={handleGoogleSignUp}
                    className="h-12 w-full rounded-xl border border-[#D4A373] bg-white text-[#5C4033] hover:bg-[#F8F4EE]"
                >
                    Continue with Google
                </Button>

            </Card>
        </section>
    );
}