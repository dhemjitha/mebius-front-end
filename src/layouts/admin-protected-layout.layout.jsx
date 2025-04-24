import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/pages/admin/components/shared/AppSideBar";
import { SiteHeader } from "@/pages/admin/components/shared/SiteHeader";
import { Outlet } from "react-router";


// AdminProtectedLayout now includes the sidebar and header structure
const AdminProtectedLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <SiteHeader/>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <Outlet /> {/* Child routes will render here */}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default AdminProtectedLayout;