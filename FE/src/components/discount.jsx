export const Discount = ({ percent }) => {
    return <p className="absolute right-4 top-4 inline-flex py-1 px-4 justify-center items-center gap-2 rounded-2xl border-[1px] border-solid border-[#FFF] bg-[#18BA51] backdrop:blur-[50px] font-semibold text-lg text-white z-20">{ percent }%</p>
}