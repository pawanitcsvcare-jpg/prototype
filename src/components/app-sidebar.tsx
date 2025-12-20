"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  IconChartBar,
  IconDashboard,
  IconFileAi,
  IconFileDescription,
  IconFolder,
  IconHelp,
  IconInnerShadowTop,
  IconReport,
  IconSearch,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react"

import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

/* -------------------- DATA -------------------- */
export const data = {
  user: {
    name: "Johnson",
    email: "johnson@example.com",
    avatar: "/avatars/shadcn.jpg",
  },

  navMain: [
    { title: "Dashboard", url: "/dashboard", icon: IconDashboard },

    {
      title: "Customer",
      icon: IconUsers,
      subMenu: [
        { title: "Subscribers", url: "/customer/subscribers" },
        { title: "Async Response", url: "/customer/aysnc-response" },
        { title: "Reserve MSISDN Status", url: "/customer/reserve-msisdn-status" },
      ],
    },

    {
      title: "Customer Profile",
      icon: IconUsers,
      subMenu: [
         {title: "Customer Profile", url: "/customer-profile/customer-profile-details", },
        {title: "Recent Searches", url: "/recent-search", },
        { title: "Order", url: "/customer-profile/order" },
        { title: "Purchase", url: "/customer-profile/purchase" },
        { title: "History", url: "/customer-profile/history" },
        { title: "Usage", url: "/customer-profile/usage" },
        {
          title: "Adjust Balance",
          url: "/customer-profile/adjust-balance",
        },
        {
          title: "Change Address",
          url: "/customer-profile/change-address",
        },
      ],
    },

    { title: "Plan", url: "/customer-profile", icon: IconChartBar },
    { title: "Actions", url: "/actions", icon: IconFileDescription },
    { title: "Inventory", url: "/inventory", icon: IconInnerShadowTop },
    { title: "Portin Order", url: "/portin-order", icon: IconFileAi },
    { title: "Report", url: "/report", icon: IconReport },
    { title: "Checks", url: "/checks", icon: IconFolder },
  ],

  navSecondary: [
    { title: "Get Help", url: "#", icon: IconHelp },
    { title: "Inquiry", url: "#", icon: IconSettings },
    { title: "Search", url: "#", icon: IconSearch },
  ],
}

/* -------------------- COMPONENT -------------------- */
export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()
  const [openSubmenu, setOpenSubmenu] = React.useState<string | null>(null)

  /* Auto-open submenu when route changes */
  React.useEffect(() => {
    const activeMenu = data.navMain.find(
      (item) =>
        item.subMenu &&
        item.subMenu.some((sub) =>
          pathname.startsWith(sub.url)
        )
    )

    if (activeMenu) {
      setOpenSubmenu(activeMenu.title)
    }
  }, [pathname])

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      {/* ---------- HEADER ---------- */}
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="!p-2">
              <Link href="/dashboard">
                <Image
                  src="/BlueConnectsLogo.png"
                  alt="logo"
                  width={160}
                  height={20}
                  priority
                />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {/* ---------- CONTENT ---------- */}
      <SidebarContent>
        <SidebarMenu>
          {data.navMain.map((item) => {
            const isSubmenuActive =
              item.subMenu &&
              item.subMenu.some((sub) =>
                pathname.startsWith(sub.url)
              )

            return (
              <SidebarMenuItem key={item.title}>
                {item.subMenu ? (
                  <>
                    <SidebarMenuButton
                      onClick={() =>
                        setOpenSubmenu(
                          openSubmenu === item.title ? null : item.title
                        )
                      }
                      className={`flex justify-between items-center mb-1 ${
                        isSubmenuActive
                          ? "bg-blue-500 text-white"
                          : ""
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <item.icon size={18} />
                        {item.title}
                      </span>
                      <span className="text-lg">
                        {openSubmenu === item.title ? "▾" : "▸"}
                      </span>
                    </SidebarMenuButton>

                    {openSubmenu === item.title && (
                      <SidebarMenu className="pl-6">
                        {item.subMenu.map((sub) => (
                          <SidebarMenuItem key={sub.title}>
                            <SidebarMenuButton asChild>
                              <Link
                                href={sub.url}
                                className={`block w-full rounded-md px-2 py-1 ${
                                  pathname.startsWith(sub.url)
                                    ? "bg-blue-400 text-white"
                                    : "hover:bg-muted"
                                }`}
                              >
                                {sub.title}
                              </Link>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        ))}
                      </SidebarMenu>
                    )}
                  </>
                ) : (
                  <SidebarMenuButton asChild>
                    <Link
                      href={item.url}
                      className={`flex items-center gap-2 ${
                        pathname === item.url
                          ? "bg-blue-500 text-white"
                          : ""
                      }`}
                    >
                      <item.icon size={18} />
                      {item.title}
                    </Link>
                  </SidebarMenuButton>
                )}
              </SidebarMenuItem>
            )
          })}
        </SidebarMenu>

        <NavSecondary items={data.navSecondary} className="mt-auto p-0" />
      </SidebarContent>

      {/* ---------- FOOTER ---------- */}
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
