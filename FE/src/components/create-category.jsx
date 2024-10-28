"use client"
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
import { CustomInput } from "@/components/customInput";
import { CustomButton } from "@/components/curstomButton";
import { PlusIcon } from "lucide-react";
import { useRef, useState } from "react";
import { axiosInstance } from "@/lib/axios";

export const CreateCategory = () => {
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData(formRef.current);
    const name = formData.get("categoryName");

    try {
      const response = await axiosInstance.post("/category/create", { name }, { withCredentials: true });

      if (response.status === 200) {
        alert("Category created successfully")
        formRef.current.reset();
      } else {
        alert("Category creation failed");
      }

    } catch (error) {
      console.error(error)
    }

    location.reload()
  }

  const handleClear = () => {
    if (formRef.current) {
      formRef.current.reset();
    }
  }

  return <CustomDialog>
    <CustomDialogTrigger className="flex h-10 px-4 py-2 items-center gap-2 self-stretch rounded-[8px] border-[1px] border-solid border-[#D6D8DB] bg-[#fff] text-[#5E6166]">
      <PlusIcon color="#5E6166" />
      Create New Category</CustomDialogTrigger>
    <CustomDialogContent>
      <CustomDialogHeader className="border-b-[1px] flex flex-col items-center">
        <CustomDialogTitle>Create New Category</CustomDialogTitle>
        <CustomDialogDescription></CustomDialogDescription>
      </CustomDialogHeader>
      <form ref={formRef} onSubmit={handleSubmit}>
        <CustomDialogBody>
          <CustomInput id="categoryId" name="categoryName" placeholder="Enter here ..." className="" label="Category Name" />
        </CustomDialogBody>
        <CustomDialogFooter>
          <CustomButton onClick={handleClear} type="button" variant="ghost" size="sm">Clear</CustomButton>
          <CustomButton type="submit" variant="dark" size="sm">Continue</CustomButton>
        </CustomDialogFooter>
      </form>
    </CustomDialogContent>
  </CustomDialog>
}