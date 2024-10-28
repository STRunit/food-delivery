"use client"

import { useMemo, useState } from "react";
import { CustomButton } from "./curstomButton"
import { CustomInput } from "./customInput"
import _ from "lodash"
import { useRouter } from "next/navigation";
import { axiosInstance } from "@/lib/axios";

export const RecoveryEmail = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({ email: "" });

    const handleOnChange = (event) => {
        setFormData((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axiosInstance.post("/recovery/send-mail", {
                email: formData.email,
            });

            if (response.status === 200) {
                alert('Email verified successfully.');
                const { email } = response.data;
                router.push(`?step=2&email=${email}`);
            } else {
                alert('User not found. Please try again.');
            }
        } catch (error) {
            console.error('Error verifying email:', error);
            alert('An error occurred while verifying your email. Please try again later.');
        }
    };

    const debounceFn = useMemo(() => _.debounce(handleOnChange, 500), []);

    return <form onSubmit={handleSubmit} className="inline-flex p-8 flex-col items-start rounded-2xl bg-white gap-12">
        <div className="flex justify-center w-full">
            <h2 className="text-[#0D1118] text-center text-[28px] font-bold">Нууц үг сэргээх</h2>
        </div>
        <div className="flex w-[384px] flex-col items-start gap-2">
            <div className="flex flex-col items-start gap-4 self-stretch">
                <CustomInput name="email" type="email" onchange={debounceFn} label={"Имэйл"} placeholder={"Имэйл хаягаа оруулна уу"} />
            </div>
        </div>
        <div className="flex flex-col items-center gap-8">
            <CustomButton type="submit" variant={formData.email.length > 0 ? "primary" : "secondary"}>Үргэлжлүүлэх</CustomButton>
        </div>
    </form>
}