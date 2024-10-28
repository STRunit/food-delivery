"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Switch } from "@/components/ui/switch"
import { Label } from "./ui/label";


const CustomInput = React.forwardRef(({ className, id, name, type, label, placeholder, showIcon = false, showSwitch = false, onchange, ...props }, ref) => {

    const [clicked, setClicked] = React.useState(true)
    const [isDiscount, setIsDiscount] = React.useState(true)
    
    return (
        (<div className="flex flex-col items-start gap-1 self-stretch">
            <div className="flex gap-2 items-center">
                {showSwitch ? <Switch onClick={() => setIsDiscount(!isDiscount)} /> : <></>}
                <Label htmlFor={id} className="text-sm text-[#3F4145]">{label}</Label>
            </div>
            <span className={cn(
                "flex h-12 w-full rounded-sm border-[1px] border-solid border-[#ECEDF0] border-input bg-[#F7F7F8] px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                className
            )}>
                <input
                    id={id}
                    name={name}
                    onChange={onchange}
                    placeholder={placeholder}
                    disabled={name === "foodDiscount" ? isDiscount : false}
                    type={showIcon & clicked ? "password" : "text"}
                    className="w-full h-full bg-transparent outline-none appearance-none"
                    ref={ref}
                    {...props} />
                {showIcon ? <span onClick={() => setClicked(!clicked)}>{clicked ? <EyeOffIcon /> : <EyeIcon />}</span> : <></>}
            </span>
        </div>
        )
    );
})
CustomInput.displayName = "CustomInput"

export { CustomInput }
