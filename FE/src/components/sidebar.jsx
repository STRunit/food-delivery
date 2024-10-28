"use client"
import { axiosInstance } from "@/lib/axios";
import { useEffect, useState } from "react"
import { Category } from "./category";
import { CreateCategory } from "./create-category";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { HeaderLabel } from "./header-label";

export const Sidebar = () => {
    const [lists, setLists] = useState([]);

    useEffect(() => {
        axiosInstance.get("/category/foods").then((res) => setLists(res.data));
    }, [lists])

    const searchParams = useSearchParams();
    const categoryParam = searchParams.get("category")

    return <div className="flex w-fit h-[1285px] p-6 flex-col items-start gap-10 shrink-0 bg-[#fff]">
        <HeaderLabel name="Food Menu"/>
        <div className="flex flex-col items-start gap-[26px] w-full">
            {lists.map((category) => {
                const isActive = category._id === categoryParam

                return <Link key={category._id}
                    className="self-stretch"
                    href={{ pathname: '/admin', query: { category: category._id } }}>
                    <Category isActive={isActive}
                        key={category._id}
                        name={category.name}
                        id={category._id} />
                </Link>
            })}
            <CreateCategory />
        </div>
    </div>
}