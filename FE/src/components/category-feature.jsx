import { ChevronRight } from "lucide-react"
import { StarIcon } from "./icons/star-icon"

export const CategoryFeature = ({ label }) => {
    return <div className="flex w-[1200px] p-4 justify-between items-center gap-2">
        <StarIcon />
        <h3 className="flex flex-1 h-10 flex-col justify-center text-[22px] font-bold">{label}</h3>
        <div className="flex items-center">
            <p className="text-[#18BA51]">Бүгдийг харах</p>
            <ChevronRight color="#18BA51" />
        </div>
    </div>
}