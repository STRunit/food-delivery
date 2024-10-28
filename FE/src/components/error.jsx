export const Error = ({ children, errorMessage }) => {
    return <div className="h-fit flex flex-col items-center justify-center mx-auto mt-[134px]">
        {children}
        <p className="text-[#808080] text-center mt-10">{errorMessage}</p>
    </div>;
}