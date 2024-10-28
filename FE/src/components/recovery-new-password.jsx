"use client"

import { useMemo, useState } from "react";
import { CustomButton } from "./curstomButton"
import { CustomInput } from "./customInput"
import _ from "lodash"
// import { CheckIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { axiosInstance } from "@/lib/axios";

export const RecoveryNewPassword = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({ newPassword: "", rePassword: "" });
    const searchParams = useSearchParams();
    const email = searchParams.get('email');
    const token = searchParams.get('token');

    const handleOnChange = (event) => {
        setFormData((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { newPassword, rePassword } = formData;

        if (newPassword !== rePassword) {
            return alert('Passwords do not match. Please try again.');
        }

        try {
            const response = await axiosInstance.put("/recovery/password-reset", {
                email: email,
                accessToken: token,
                password: newPassword,
            });

            if (response.status === 200) {
                alert("Password updated successfully")
                router.push('/login');
            } else {
                alert('Failed to update password. Please try again..');
            }
        } catch (error) {
            console.error('Error updating password:', error);
            alert('An error occurred while updating your password. Please try again later.');
        }
    };


    const debounceFn = useMemo(() => _.debounce(handleOnChange, 500), []);

    return <div className="flex flex-col gap-5 w-fit items-center">
        {/* <div className="w-[338px] h-[56px] p-6 shrink rounded-[20px] border-[1px] border-solid border-[#18BA51] flex items-center gap-2 shadow-[4px_4px_40px_0px_rgba(0,0,0,0.05)]">
            <CheckIcon color="#18BA51" />
            <p className="text-[#18BA51] text-center">Нууц үг амжилттай солигдлоо</p>
        </div> */}

        <form onSubmit={handleSubmit} className="inline-flex p-8 flex-col items-start rounded-2xl bg-white gap-12">
            <div className="flex justify-center w-full">
                <h2 className="text-[#0D1118] text-center text-[28px] font-bold">Шинэ нууц үг зохиох </h2>
            </div>
            <div className="flex w-[384px] flex-col items-start gap-2">
                <div className="flex flex-col items-start gap-4 self-stretch">
                    <CustomInput name="newPassword" type="password" onchange={debounceFn} label={"Нууц үг"} placeholder={"********"} showIcon={true} />
                    <CustomInput name="rePassword" type="password" onchange={debounceFn} label={"Нууц үг давтах"} placeholder={"********"} showIcon={true} />
                </div>
            </div>
            <div className="flex flex-col items-center gap-8">
                <CustomButton type="submit" variant={formData.newPassword.length > 0 && formData.rePassword.length > 0 ? "primary" : "secondary"}>Үргэлжлүүлэх</CustomButton>
            </div>
        </form>
    </div>
}