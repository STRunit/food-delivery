import { CldImage } from "next-cloudinary"

export const ErrorIcon = ({ className }) => {
    return <CldImage
        className={className}
        width="80"
        height="80"
        src="https://res.cloudinary.com/dawbgkucp/image/upload/v1726920728/cacb29afef747a51b482df7a95f101cf_vf5mkt.png"
        alt="Error Icon"
    />
} 