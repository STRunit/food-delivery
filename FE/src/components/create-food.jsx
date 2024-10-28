import {
    CustomDialog,
    CustomDialogBody,
    CustomDialogContent,
    CustomDialogDescription,
    CustomDialogFooter,
    CustomDialogHeader,
    CustomDialogTitle,
    CustomDialogTrigger
} from "@/components/customDialog";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { CustomInput } from "@/components/customInput";
import { CustomButton } from "@/components/curstomButton";
import { CustomLabel } from "./customLabel";
import { useEffect, useRef, useState } from "react";
import { axiosInstance } from "@/lib/axios";
import { CldImage, CldUploadButton } from "next-cloudinary";

export const CreateFood = () => {
    const formRef = useRef(null);
    const [categoryValue, setCategoryValue] = useState();
    const [categoryData, setCategoryData] = useState([]);
    const [imageUrl, setImageUrl] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(formRef.current);
        const { foodName, foodIngredients, foodPrice, foodDiscount } = Object.fromEntries(
            formData.entries()
        );

        try {
            const response = await axiosInstance.post("/food/create", {
                name: foodName,
                image: imageUrl,
                ingredients: foodIngredients,
                price: foodPrice,
                discount: foodDiscount,
                categoryId: categoryValue
            })

            if (response.status === 200) {
                alert("Food created successfully")
            } else {
                alert("Something went wrong. Please try again...")
            }

        } catch (error) {
            console.error(error)
        }
    };

    const fetchCategoryData = async () => {
        try {
            const result = await axiosInstance.get("/category");
            setCategoryData(result.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchCategoryData();
    }, []);

    return <CustomDialog modal={false}>
        <CustomDialogTrigger className="bg-[#18BA51] text-[#FFFFFF] px-4 py-[10px] rounded-md">Add New Food</CustomDialogTrigger>
        <CustomDialogContent onInteractOutside={(event) => event.preventDefault()}>
            <form ref={formRef} onSubmit={handleSubmit}>
                <CustomDialogHeader className="border-b-[1px] flex">
                    <CustomDialogTitle>Create Food</CustomDialogTitle>
                    <CustomDialogDescription></CustomDialogDescription>
                </CustomDialogHeader>
                <CustomDialogBody className="flex flex-col gap-4">
                    <CustomInput name="foodName" id="foodName" placeholder="Placeholder" className="" label="Хоолны нэр" />
                    <Select onValueChange={(value) => setCategoryValue(value)}>
                        <CustomLabel className="text-start">Хоолны ангилал</CustomLabel>
                        <SelectTrigger className="w-full h-12 bg-[#F7F7F8]">
                            <SelectValue placeholder="Хоолны ангилал сонгоно уу..." />
                        </SelectTrigger>
                        <SelectContent>
                            {categoryData.map((category, i) => (
                                <SelectItem value={category._id} key={i + 0.1}>
                                    {category.name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <CustomInput name="foodIngredients" id="foodIngredients" placeholder="Placeholder" className="" label="Хоолны орц" />
                    <CustomInput name="foodPrice" id="foodPrice" placeholder="Placeholder" className="" label="Хоолны үнэ" />
                    <CustomInput name="foodDiscount" id="foodDiscount" placeholder="Placeholder" className="" label="Хямдралтай эсэх" showSwitch={true} />
                    <div>
                        <CustomLabel className="font-normal text-[#121316] text-start mb-1">Хоолны зураг</CustomLabel>
                        <div className="p-2 flex flex-col gap-2 rounded-md border-dashed border-[#D6D7DC] border-[2px] items-center py-[25px] w-[284px] bg-[#BABCC41F]">
                            {imageUrl ? <CldImage
                                src={imageUrl}
                                width="200"
                                height="100"
                                crop={{
                                    type: 'auto',
                                    source: true
                                }}
                            /> : <CustomLabel className="text-center text-[#525252] text-base">Add image for the food</CustomLabel>
                            }
                            <CldUploadButton
                                className={imageUrl ? "hidden" : "bg-[#393939] text-[#FFFFFF] font-bold h-9 rounded-md px-4 py-[10px] items-center flex"}
                                uploadPreset="food-delivery-images"
                                onSuccess={(response) => setImageUrl(response.info.url)}
                            >
                                Add Image
                            </CldUploadButton>
                        </div>
                    </div>
                </CustomDialogBody>
                <CustomDialogFooter>
                    <CustomButton type="button" variant="ghost" size="sm">Clear</CustomButton>
                    <CustomButton type="submit" variant="dark" size="sm">Continue</CustomButton>
                </CustomDialogFooter>
            </form>
        </CustomDialogContent>
    </CustomDialog>
}