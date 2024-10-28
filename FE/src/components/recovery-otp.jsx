"use client"

import { useState } from "react";
import { CustomButton } from "./curstomButton"
import _ from "lodash"
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import { Label } from "./ui/label";
import { useRouter, useSearchParams } from "next/navigation";
import { axiosInstance } from "@/lib/axios";

export const RecoveryOTP = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const email = searchParams.get("email");
    const [value, setValue] = useState("");

    const handleClick = async (e) => {
        e.preventDefault();

        try {
            const response = await axiosInstance.post("/recovery/verify-otp", {
                email: email,
                oneTimePass: value,
            });

            if (response.status === 200) {
                alert('OTP verified successfully.');
                const { email, accessTokens } = response.data;
                router.push(`?step=3&email=${email}&token=${accessTokens}`);
            } else {
                alert('Failed to verify OTP. Please try again.');
            }
        } catch (error) {
            console.error('Error verifying OTP:', error);
            alert('An error occurred while verifying your OTP. Please try again later.');
        }
    };


    return <form className="inline-flex p-8 flex-col items-start rounded-2xl bg-white gap-12">
        <div className="flex justify-center w-full">
            <h2 className="text-[#0D1118] text-center text-[28px] font-bold">Нууц үг сэргээх</h2>
        </div>
        <div className="flex w-[384px] flex-col items-start gap-8">
            <p className="text-center text-[#695C08] font-medium">
                Таны <b className="text-[#18BA51] font-medium leading-[22px]">{email}</b> хаяг руу сэргээх код илгээх болно. </p>

            <div className="flex flex-col items-center gap-4 self-stretch">
                <Label className="font-normal text-sm text-[#3F4145]">Нууц үг сэргээх код</Label>
                <InputOTP
                    maxLength={4}
                    value={value}
                    onChange={(value) => setValue(value)}>
                    <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                    </InputOTPGroup>
                </InputOTP>

            </div>
        </div>
        <div className="flex flex-col items-center gap-8">
            <CustomButton
                onClick={handleClick}
                type="submit"
                variant={value.length === 4 ? "primary" : "secondary"}>Үргэлжлүүлэх</CustomButton>
        </div>
    </form>
}