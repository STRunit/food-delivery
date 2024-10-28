export const HeaderLabel = ({ name, color="#000", fontSize="[22px]" }) => {
    return <div className="flex items-center self-stretch">
        <h3 className={`text-[${fontSize}] font-bold text-[${color}]`}>{name}</h3>
    </div>
}