import { Pinecone } from "./icons/pinecone-icon"
import { CustomLabel } from "./customLabel"
import { SearchInput } from "./searchInput"
import { ShoppingBasketIcon, UserCircle } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { NAVBAR_MENU_ITEMS } from "@/constants"

export const Navbar = () => {
    const pathname = usePathname();

    return <div className="flex max-w-[1440px] flex-col justify-center items-center m-auto">
        <div className="flex w-[1258px] p-6 justify-between items-center">
            <div className="flex items-center gap-6">
                <Link href={"/"}>
                    <Pinecone fill={pathname === "/" ? "#18BA51" : "#000"} />
                </Link>
                {
                    NAVBAR_MENU_ITEMS.map((item) => {
                        return <Link
                            key={item.name}
                            href={item.href}
                        >
                            <CustomLabel className={pathname === item.href ? "text-[#18BA51]" : <></>}>
                                {item.name}
                            </CustomLabel>
                        </Link>
                    })
                }
            </div>
            <div className="flex items-center gap-2">
                <SearchInput placeholder="Хайх" name="navbarSearch" showIcon={true} />
                <Link href={"/order"}>
                    <div className="flex gap-2 items-center px-4 py-2">
                        <ShoppingBasketIcon />
                        <CustomLabel>Сагс</CustomLabel>
                    </div>
                </Link>
                <Link href={"/login"}>
                    <div className="flex gap-2 items-center px-4 py-2">
                        <UserCircle />
                        <CustomLabel>Нэвтрэх</CustomLabel>
                    </div>
                </Link>
            </div>
        </div>
    </div>
}