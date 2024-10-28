export const Feature = ({ children, label, content }) => {
    return <div className="flex p-4 flex-col justify-center items-start gap-[15px] flex-1 self-stretch rounded-2xl border-solid border-[#D6D8DB] shadow-[4px_4px_12px_0_rgba(0,0,0,0.10)]">
        <div className="flex p-[15px] flex-col justify-center items-center gap-[10px]">
            {children}
        </div>
        <div className="flex flex-col justify-center items-center gap-1 self-stretch">
            <h3 className="text-[#272727] text-lg font-bold">{label}</h3>
            <p className="text-[#272727] text-sm">{content}</p>
        </div>
    </div>
}