import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/pages/seller/component/shared/AppSideBar";
import { SiteHeader } from "@/pages/seller/component/shared/SiteHeader";
import { Outlet } from "react-router";

const SellerProtectedLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default SellerProtectedLayout;
