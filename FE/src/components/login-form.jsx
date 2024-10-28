"use client"

import { useMemo, useState } from "react";
import { CustomButton } from "./curstomButton"
import { CustomInput } from "./customInput"
import { axiosInstance } from "@/lib/axios";
import { useRouter } from "next/navigation";
import _ from "lodash"
import Link from "next/link";

export const LoginForm = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({ email: "", password: "" });

    const handleOnChange = (event) => {
        setFormData((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    }

    const debounceFn = useMemo(() => _.debounce(handleOnChange, 500), []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axiosInstance.post("/auth/login", {
                email: formData.email,
                password: formData.password,
            })

            if (response.status === 200) router.push("/")

        } catch (error) {
            console.error(error);
        }
    };

    return <form onSubmit={handleSubmit} className="flex justify-center">
        <div className="inline-flex p-8 flex-col items-start rounded-2xl bg-white gap-12">
            <h2 className="text-[#0D1118] text-center text-[28px] font-bold">Нэвтрэх</h2>
            <div className="flex w-[384px] flex-col items-start gap-2">
                <div className="flex flex-col items-start gap-4 self-stretch">
                    <CustomInput name="email" type="email" onchange={debounceFn} label={"Имэйл"} placeholder={"Имэйл хаягаа оруулна уу"} />
                    <CustomInput name="password" type="password" onchange={debounceFn} label={"Нууц үг"} placeholder={"Нууц үг"} showIcon={true} />
                </div>

                <p className="flex justify-end items-center text-sm self-stretch text-[#3F4145] cursor-pointer hover:text-[#18BA51]">
                    <Link href="password-recovery">
                        Нууц үг сэргээх
                    </Link>
                </p>
            </div>

            <div className="flex flex-col items-center gap-8">
                <CustomButton type="submit" variant={formData.email && formData.password !== "" ? "primary" : "secondary"}>Нэвтрэх</CustomButton>
                <p className="text-sm text-[#3F4145]">Эсвэл</p>

                <CustomButton type="button" variant="outline">
                    <Link href="/sign-up">
                        Бүртгүүлэх
                    </Link>
                </CustomButton>
            </div>
        </div>
    </form>
}