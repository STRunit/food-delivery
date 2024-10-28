import { FooterBackground } from "@/assets/footer-background"
import { Pinecone } from "./icons/pinecone-icon"
import { HeaderLabel } from "./header-label"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { FOOTER_NAV_MENU_ITEMS, SOCIAL_PLATFORMS } from "@/constants"

export const Footer = () => {

    const router = useRouter()

    return <div className="bg-[#18BA51] w-[1440px] h-[545px] shrink-0 m-auto relative flex justify-center items-center">
        <div className="inline-flex flex-col items-center gap-10 z-10">
            <div className="flex items-center gap-2">
                <Pinecone fill="white" />
                <HeaderLabel
                    name="Food Delivery"
                    color="#fff"
                    fontSize="20px" />
            </div>
            <div className="flex justify-between items-start self-stretch">
                {FOOTER_NAV_MENU_ITEMS.map((item) => {
                    return <Link
                        key={item.href}
                        className="font-[590] text-[#fff] underline underline-offset-4"
                        href={item.href}>
                        {item.name}</Link>
                })}
            </div>
            <div className="flex p-[5px] justify-center items-center gap-[18px]">
                {SOCIAL_PLATFORMS.map((platform) => {
                    return <Link
                        key={platform.name}
                        href={platform.href}
                        target="_blank"
                    >{platform.icon}</Link>
                })}
            </div>
            <span className="w-[1200px] h-[1px] bg-[#fff]"></span>
            <div className="flex flex-col items-center gap-2 text-[#fff]">
                <p>© 2024 Pinecone Foods LLC</p>
                <p>Зохиогчийн эрх хуулиар хамгаалагдсан.</p>
            </div>
        </div>
        <div className="absolute top-0 left-0">
            <FooterBackground />
        </div>
    </div>
}