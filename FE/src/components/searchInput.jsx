"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { SearchIcon } from "lucide-react";

const SearchInput = React.forwardRef(({className, type, label, placeholder, showIcon = false, onchange, ...props }, ref) => {

    return (
        (<div className="flex flex-col items-center gap-1 self-stretch">
            <span className={cn(
                "flex w-[260px] rounded-lg border-[1px] border-solid border-input border-black bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-base file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 gap-2",
                className
            )}>
                {showIcon ? <SearchIcon className="cursor-pointer"/> : <></>}
                <input
                    onChange={onchange}
                    placeholder={placeholder}
                    className="w-full bg-transparent outline-none appearance-none"
                    ref={ref}
                    {...props} />
            </span>
        </div>
        )
    );
})
SearchInput.displayName = "SearchInput"

export { SearchInput }
