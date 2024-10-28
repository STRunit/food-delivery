import { FEATURE_ITEMS } from "@/constants"
import { Feature } from "./feature"

export const FeatureContainer = () => {
    return <div className="flex w-[1200px] items-start gap-[47px] m-auto my-[120px]">
        {
            FEATURE_ITEMS.map((item) => {
                return <Feature
                    key={item.label}
                    children={item.icon}
                    label={item.label}
                    content={item.content}
                />
            })
        }
    </div>
}