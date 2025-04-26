import { LayoutDashboardIcon, Settings2, Users, PackageSearch, Package2, PackagePlus } from "lucide-react"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Link, useLocation } from "react-router"

const navItems = [
  {
    title: "Dashboard",
    url: "/seller",
    icon: LayoutDashboardIcon,
  },
  {
    title: "Create Product",
    url: "/seller/create-product",
    icon: PackagePlus,
  },
  {
    title: "My Products",
    url: "/seller/products",
    icon: Package2,
  },
  {
    title: "My Orders",
    url: "/seller/orders",
    icon: PackageSearch,
  },
  {
    title: "Variant Config",
    url: "/seller/variant-config",
    icon: Settings2,
  },
];

export const NavMain = () => {
  const location = useLocation();

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          {navItems.map((item) => {
            const isActive = location.pathname === item.url;
            return (
              <SidebarMenuItem key={item.title}>
                <Link to={item.url}>
                  <SidebarMenuButton 
                    tooltip={item.title}
                    className={`hover:bg-accent hover:text-accent-foreground ${
                      isActive ? "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground" : ""
                    }`}
                  >
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}