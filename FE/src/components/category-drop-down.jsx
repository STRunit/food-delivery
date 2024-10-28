import { CustomLabel } from "./customLabel"


export const CategoryDropDown = ({name, themeColor, icon }) => {
    return  <div className="flex py-2 px-4 items-center gap-4 self-stretch">
    {icon}
    <CustomLabel className={`text-[${themeColor}]`}>{name}</CustomLabel>
</div>
}