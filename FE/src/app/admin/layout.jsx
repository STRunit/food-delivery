import { Sidebar } from "@/components/sidebar";
import { Suspense } from "react";

const AdminLayout = ({ children }) => {
    return (
        <section className="flex gap-6 max-w-[1258px] bg-gray-100 m-auto">
            <Suspense>
                <Sidebar />
            </Suspense>
            {children}
        </section>
    );
}

export default AdminLayout;