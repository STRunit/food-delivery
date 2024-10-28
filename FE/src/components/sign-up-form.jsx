"use client"

import { useMemo, useState } from "react";
import { CustomInput } from "./customInput";
import { CustomButton } from "./curstomButton";
import _ from "lodash"
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { axiosInstance } from "@/lib/axios";
import { useRouter } from "next/navigation";


export const SignUpForm = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({ name: "", email: "", phoneNumber: "", password: "", rePassword: "" });
    const [isChecked, setIsChecked] = useState(false);
    const [warning, setWarning] = useState("");

    const handleOnChange = (event) => {
        setFormData((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    }

    const handleChecked = () => {
        setIsChecked(!isChecked)
    }

    const debounceFn = useMemo(() => _.debounce(handleOnChange, 500), []);

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            if (formData.password !== formData.rePassword) {
                setWarning("Нууц үгээ дахин нягтална уу !")
            }
            else {
                await axiosInstance.post(
                    "auth/sign-up",
                    {
                        name: formData.name,
                        email: formData.email,
                        password: formData.password,
                        phoneNumber: formData.phoneNumber,
                    },
                    { withCredentials: true },
                );
                router.push("/");
            };
        } catch (error) {
            console.error(error);
        }
    }

    return <form onSubmit={handleSubmit} className="flex justify-center">
        <div className="inline-flex p-8 flex-col items-start rounded-2xl bg-white gap-12">
            <div className="flex justify-center w-full">
                <h2 className="text-[#0D1118] text-center text-[28px] font-bold">Бүртгүүлэх</h2>
            </div>
            <div className="flex w-[384px] flex-col items-start gap-2">
                <div className="flex flex-col items-start gap-4 self-stretch">
                    <CustomInput name="name" onchange={debounceFn} label={"Нэр"} placeholder={"Нэрээ оруулна уу"} />
                    <CustomInput name="email" type="email" onchange={debounceFn} label={"Имэйл"} placeholder={"Имэйл хаягаа оруулна уу"} />
                    <CustomInput name="phoneNumber" onchange={debounceFn} label={"Утас"} placeholder={"Та утасны дугаараа оруулна уу"} />
                    <CustomInput name="password" type="password" onchange={debounceFn} label={"Нууц үг"} placeholder={"Нууц үгээ оруулна уу"} showIcon={true} />
                    <CustomInput name="rePassword" type="password" onchange={debounceFn} label={"Нууц үг"} placeholder={"Нууц үгээ давтан оруулна уу"} showIcon={true} />
                </div>
            </div>

            <p className="text-sm text-red-400">{warning}</p>

            <div className="flex flex-col items-center gap-8">
                <div className="flex w-full items-center gap-2">
                    <Checkbox id="policy" onClick={handleChecked} />
                    <Label htmlFor="policy" className="text-sm text-[#3F4145]">
                        Үйлчилгээний нөхцөл зөвшөөрөх
                    </Label>
                </div>
                <CustomButton type="submit" variant={formData.name.length > 0 && formData.email.length > 0 && formData.phoneNumber.length > 0 && formData.password.length > 0 && formData.rePassword.length > 0 && isChecked == true ? "primary" : "secondary"}>Бүртгүүлэх</CustomButton>
            </div>
        </div>
    </form>
}