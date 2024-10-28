export const CustomLabel = ({ children, className }) => {
    return <p className={`text-sm font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ` + className}>{children}</p>
}