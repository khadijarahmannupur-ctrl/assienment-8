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

export default function LogInPage() {
    const onSubmit = async (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        const { data, error } = await authClient.signUp.email({
            email,
            password,
        });

        if (error) {
            toast.error(error.message);
            return;
        }

        toast.success("Login successfully!");
    };

    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#F8F4EE] px-6 py-16">

            {/* BACKGROUND BLUR */}
            <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#D4A373]/20 blur-3xl"></div>

            <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#8B5E3C]/10 blur-3xl"></div>

            <Card className="relative z-10 w-full max-w-xl rounded-3xl border border-[#EADBC8] bg-white/90 p-8 shadow-2xl backdrop-blur-md">

                {/* TITLE */}
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-[#5C4033]">
                        Create Account
                    </h1>

                    <p className="mt-3 text-[#6B5B52]">
                        Join our premium tile gallery community
                    </p>
                </div>

                {/* FORM */}
                <Form
                    className="mt-10 flex flex-col gap-5"
                    onSubmit={onSubmit}
                >


                    {/* EMAIL */}
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                            ) {
                                return "Please enter a valid email";
                            }

                            return null;
                        }}
                    >
                        <Label className="text-[#5C4033]">Email</Label>

                        <Input
                            placeholder="john@example.com"
                            classNames={{
                                inputWrapper:
                                    "bg-[#F8F4EE] border border-[#EADBC8] hover:border-[#8B5E3C]",
                            }}
                        />

                        <FieldError />
                    </TextField>

                    {/* PASSWORD */}
                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }

                            if (!/[A-Z]/.test(value)) {
                                return "Password needs one uppercase letter";
                            }

                            if (!/[0-9]/.test(value)) {
                                return "Password needs one number";
                            }

                            return null;
                        }}
                    >
                        <Label className="text-[#5C4033]">Password</Label>

                        <Input
                            placeholder="Enter your password"
                            classNames={{
                                inputWrapper:
                                    "bg-[#F8F4EE] border border-[#EADBC8] hover:border-[#8B5E3C]",
                            }}
                        />

                        <Description className="text-[#8C7B75]">
                            Minimum 8 characters with uppercase & number
                        </Description>

                        <FieldError />
                    </TextField>

                    {/* BUTTON */}
                    <Button
                        type="submit"
                        className="mt-4 h-12 w-full rounded-xl bg-[#8B5E3C] text-base font-medium text-white transition hover:bg-[#5C4033]"
                    >
                        <Check />
                        Login
                    </Button>
                </Form>

                {/* LOGIN LINK */}
                <p className="mt-8 text-center text-[#6B5B52]">
                    Don't have an account?{" "}
                    <Link
                        href="/signup"
                        className="font-semibold text-[#8B5E3C] hover:underline"
                    >
                        Signup
                    </Link>
                </p>

                {/* DIVIDER */}
                <div className="my-8 flex items-center gap-4">
                    <div className="h-px flex-1 bg-[#EADBC8]"></div>

                    <span className="text-sm text-[#8C7B75]">
                        OR CONTINUE WITH
                    </span>

                    <div className="h-px flex-1 bg-[#EADBC8]"></div>
                </div>

                {/* GOOGLE BUTTON */}
                <Button
                    variant="bordered"
                    className="h-12 w-full rounded-xl border-[#D4A373] text-[#5C4033] hover:bg-[#F8F4EE]"
                >
                    Continue with Google
                </Button>
            </Card>
        </section>
    );
}