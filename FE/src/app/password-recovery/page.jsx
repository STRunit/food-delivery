"use client"
import { RecoveryEmail } from "@/components/recovery-email"
import { RecoveryNewPassword } from "@/components/recovery-new-password"
import { RecoveryOTP } from "@/components/recovery-otp"
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const PasswordRecoveryPage = () => {

    const router = useRouter();
    const searchParams = useSearchParams();
    const step = searchParams.get("step");

    useEffect(() => {
        router.push('/password-recovery?step=1');
    }, [router]);

    return <div className="flex justify-center">
        {Number(step) === 1 && <RecoveryEmail />}
        {Number(step) === 2 && <RecoveryOTP />}
        {Number(step) === 3 && <RecoveryNewPassword />}
    </div>
}

export default PasswordRecoveryPage