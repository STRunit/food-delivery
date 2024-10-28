"use client"
import { EllipsisVertical, Pencil, Trash2 } from "lucide-react"
import { CategoryDropDown } from "./category-drop-down"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { CustomInput } from "./customInput"
import { CustomButton } from "./curstomButton"
import { CustomDialog, CustomDialogBody, CustomDialogContent, CustomDialogFooter, CustomDialogHeader, CustomDialogTitle, CustomDialogTrigger } from "./customDialog"
import { CustomLabel } from "./customLabel"
import { useRef, useState } from "react"
import { axiosInstance } from "@/lib/axios"

export const Category = ({ name, isActive, id }) => {
    const inputRef = useRef(null);
    const [open, setIsOpen] = useState(false);


    const onOpenChange = () => {
        setIsOpen(!open)
    };

    const handleEdit = async () => {
        await axiosInstance.put(`/category/${id}`, {
            name: inputRef.current.value
        });
        alert("Edited category successfully")
        onOpenChange();
    };

    const handleDelete = async () => {
        await axiosInstance.delete(`/category/${id}`);
        alert("Deleted category successfully")
        onOpenChange();
    };

    const handleCancel = async () => {
        onOpenChange();
    };

    return <div className={`flex h-10 w-full py-2 px-4 justify-between items-center self-stretch rounded-lg ${isActive ? "bg-[#18BA51] text-[#fff]" : "border border-[#D6D8DB]"}`}>
        <p className={`text-lg font-medium`}>{name}</p>
        <Popover>
            <PopoverTrigger>
                <EllipsisVertical className="cursor-pointer" />
            </PopoverTrigger>
            <PopoverContent>
                <CustomDialog onOpenChange={onOpenChange} open={open}>
                    <CustomDialogTrigger>
                        <CategoryDropDown name="Edit name" themeColor="#161616" icon={<Pencil />} />
                    </CustomDialogTrigger>
                    <CustomDialogContent>
                        <CustomDialogHeader className="border-b-[1px] flex">
                            <CustomDialogTitle>Edit Category Name</CustomDialogTitle>
                        </CustomDialogHeader>
                        <CustomDialogBody>
                            <CustomInput placeholder={name} ref={inputRef} />
                        </CustomDialogBody>
                        <CustomDialogFooter className="justify-center">
                            <CustomButton type="submit" variant="dark" onClick={handleEdit}>Submit</CustomButton>
                        </CustomDialogFooter>
                    </CustomDialogContent>
                </CustomDialog>

                <CustomDialog>
                    <CustomDialogTrigger>
                        <CategoryDropDown name="Delete category" themeColor="#DF1F29" icon={<Trash2 color="#DF1F29" />} />
                    </CustomDialogTrigger>
                    <CustomDialogContent>
                        <CustomDialogHeader className="border-b-[1px] flex">
                            <CustomDialogTitle>Delete Category</CustomDialogTitle>
                        </CustomDialogHeader>
                        <CustomDialogBody>
                            <CustomLabel className="text-lg">Are you sure you want to delete this category ?</CustomLabel>
                        </CustomDialogBody>
                        <CustomDialogFooter className="justify-center gap-3">
                            <CustomButton type="submit" variant="outline" size="flex" onClick={handleCancel}>No</CustomButton>
                            <CustomButton type="submit" variant="dark" size="flex" onClick={handleDelete}>Yes</CustomButton>
                        </CustomDialogFooter>
                    </CustomDialogContent>
                </CustomDialog>
            </PopoverContent>
        </Popover>
    </div>
}