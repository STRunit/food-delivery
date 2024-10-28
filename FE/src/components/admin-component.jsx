"use client";

import { Card } from "@/components/card";
import { CreateFood } from "@/components/create-food";
import { Error } from "@/components/error";
import { HeaderLabel } from "@/components/header-label";
import { AddIcon } from "@/components/icons/add-icon";
import { ErrorIcon } from "@/components/icons/error-icon";
import { Loading } from "./loading";
import { useCategoriesWithFoods } from "@/hooks/useCategoriesWithFoods";
import { useSearchParams } from "next/navigation";


export const AdminComponent = () => {
    const search = useSearchParams();
    const categoryId = search.get("category");
    const { response, loading, error } = useCategoriesWithFoods();
    const categoryData = response.find(category => category._id === categoryId);
    const { name, foods } = categoryData || { name: "", foods: [] };

    if (loading) return <Loading />
    if (error) return
    (<Error errorMessage="Уучлаарай систем ачааллахад алдаа гарлаа.">
        <ErrorIcon />
    </Error>)

    return (
        <div className="p-6 w-full flex flex-col gap-8">
            <div className="flex justify-between w-full p-4">
                <HeaderLabel
                    name={name} />
                <CreateFood />
            </div>

            <div className="grid grid-cols-3 gap-6 justify-center">
                {foods && foods.length > 0 ? (
                    foods.map((food) => (
                        <Card key={food._id}
                            mainPrice={food.price}
                            discountPercent={food.discount}
                            foodName={food.name}
                            imageSrc={food.image}
                            alt={food.name} />
                    ))
                ) : (
                    <div className="col-start-2">
                        <AddIcon className="mx-auto" />
                        <p className="text-[#808080] text-center mt-10">Уучлаарай, Таны меню хоосон байна.</p>
                    </div>
                )}
            </div>
        </div>
    );
}