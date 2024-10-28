"use client"

import * as React from "react"
import * as CustomDialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

const CustomDialog = CustomDialogPrimitive.Root

const CustomDialogTrigger = CustomDialogPrimitive.Trigger

const CustomDialogPortal = CustomDialogPrimitive.Portal

const CustomDialogClose = CustomDialogPrimitive.Close

const CustomDialogOverlay = React.forwardRef(({ className, ...props }, ref) => (
  <CustomDialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props} />
))
CustomDialogOverlay.displayName = CustomDialogPrimitive.Overlay.displayName

const CustomDialogContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <CustomDialogPortal>
    <CustomDialogOverlay />
    <CustomDialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      )}
      {...props}>
      {children}
      <CustomDialogPrimitive.Close
        className="absolute left-6 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-6 w-6" />
        <span className="sr-only">Close</span>
      </CustomDialogPrimitive.Close>
    </CustomDialogPrimitive.Content>
  </CustomDialogPortal>
))
CustomDialogContent.displayName = CustomDialogPrimitive.Content.displayName

const CustomDialogHeader = ({
  className,
  ...props
}) => (
  <div
    className={cn("flex py-4 px-6 justify-center", className)}
    {...props} />
)
CustomDialogHeader.displayName = "CustomDialogHeader"

const CustomDialogBody = ({
  className,
  ...props
}) => (
  <div
    className={cn("p-6 text-center", className)}
    {...props} />
)
CustomDialogBody.displayName = "CustomDialogBody"

const CustomDialogFooter = ({
  className,
  ...props
}) => (
  <div
    className={cn("flex border-t-[1px] p-6 justify-end", className)}
    {...props} />
)
CustomDialogFooter.displayName = "CustomDialogFooter"

const CustomDialogTitle = React.forwardRef(({ className, ...props }, ref) => (
  <CustomDialogPrimitive.Title
    ref={ref}
    className={cn("text-2xl font-bold leading-none tracking-tight flex justify-self-center", className)}
    {...props} />
))
CustomDialogTitle.displayName = CustomDialogPrimitive.Title.displayName

const CustomDialogDescription = React.forwardRef(({ className, ...props }, ref) => (
  <CustomDialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props} />
))
CustomDialogDescription.displayName = CustomDialogPrimitive.Description.displayName

export {
  CustomDialog,
  CustomDialogPortal,
  CustomDialogOverlay,
  CustomDialogClose,
  CustomDialogTrigger,
  CustomDialogContent,
  CustomDialogHeader,
  CustomDialogBody,
  CustomDialogFooter,
  CustomDialogTitle,
  CustomDialogDescription
}
