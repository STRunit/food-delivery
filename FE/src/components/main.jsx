"use client"
import { MainBackground } from "@/assets/main-background";
import { CldImage } from "next-cloudinary";

export const Main = () => {

    return <div className="w-[1440px] h-[788px] shrink-0 bg-[#18BA51] m-auto relative flex items-center justify-around">
        <div className="w-[384px] h-[225px] shrink-0 inline-flex flex-col items-start gap-[23px] z-10">
            <h1 className="text-[55px] font-semibold text-[#fff]">Pinecone Food delivery</h1>
            <span className="w-[383px] border-b-2 bg-[#fff]"></span>
            <p className="text-[22px] font-bold text-[#fff]">Horem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="w-[588px] h-[438px] shrink-0 z-10 relative">
            <CldImage src="https://res.cloudinary.com/dawbgkucp/image/upload/v1727340799/main-food-1_kpqpuh.png"
                width={443}
                height={438}
                className="shrink-0 absolute left-0 top-0 z-20"
                priority={true}
                alt="main-food-image"
            />
            <CldImage src="https://res.cloudinary.com/dawbgkucp/image/upload/v1727340773/main-food-2_tpz9qa.png"
                width={313}
                height={313}
                className="shrink-0 absolute bottom-0 right-0 z-30"
                priority={true}
                alt="main-food-image"
            />
        </div>
        <div className="absolute top-0 left-0">
            <MainBackground />
        </div>
    </div>
}