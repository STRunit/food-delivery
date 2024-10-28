import { Sidebar } from "@/components/sidebar";

const AdminLayout = ({ children }) => {
    return (
        <section className="flex gap-6 max-w-[1258px] bg-gray-100 m-auto">
            <Sidebar/>
            {children}
        </section>
    );
}

export default AdminLayout;