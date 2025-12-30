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
        { title: "Recent Searches", url: "/customer-profile/recent-search" },
        { title: "Customer Profile", url: "/customer-profile/customer-profile-details" },
        { title: "Order", url: "/customer-profile/customer-profile-details?tab=order" },
        { title: "Purchase", url: "/customer-profile/purchase" },
        { title: "History", url: "/customer-profile/history" },
        { title: "Usage", url: "/customer-profile/usage" },
        { title: "Adjust Balance", url: "/customer-profile/adjust-balance" },
        { title: "Change Address", url: "/customer-profile/change-address" },
      ],
    },

    { title: "Plan", url: "/plan/lockup-teriff", icon: IconChartBar },

    {
      title: "Actions", icon: IconFileDescription,
      subMenu: [
        { title: "Bulk/Single Upload", url: "/action/bulk-singleupload" },
        { title: "Reports", url: "/action/bulk-report/all-reports" },
        // {
        //   title: "Report",
        //   url: "#",
        //   subMenu: [
        //     { title: "SIM Activation Report", url: "/action/bulk-report/sim-activation-report" },
        //     { title: "Plan Change Report", url: "/action/bulk-report/plan-change-report" },
        //     { title: "MSISDN Disconnect Report", url: "/action/report/daily" },
        //     { title: "MSISDN Reconnect Report", url: "/action/report/monthly" },
        //     { title: "MSISDN Change Report", url: "/action/report/daily" },
        //     { title: "SIM Change Report", url: "/action/report/monthly" },
        //     { title: "Restore Report", url: "/action/report/daily" },
        //     { title: "Suspended Report", url: "/action/report/monthly" },
        //     { title: "Purchase Topup Report", url: "/action/report/daily" },
        //     { title: "Suspend Service Report", url: "/action/report/monthly" },
        //     { title: "Restore Service Report", url: "/action/report/monthly" },
        //   ],
        // },
      ],
    },

       {
      title: "Inventory",
      icon: IconInnerShadowTop,
      subMenu: [
        { title: "Add Inventory", url: "/inventory/add-inventory" },
        { title: "Search Inventory", url: "/inventory/search-inventory" },
        { title: "Total Assigned SIM", url: "/inventory/total-assign-sims" },
        { title: "Assign/Re-assign SIMs", url: "/inventory/assign-reassign-sim" },
        { title: "Inventory Reports", url: "/inventory/inventory-report",
        subMenu: [
          { title: "Inventory Report", url: "/inventory/inventory-report-dashboard" },
          { title: "Add Inventory(Master) Report", url: "/inventory/add-inventory-master-report" },
          { title: "Assign To Vendor Report", url: "/inventory/assign-vendor-report" },
          { title: "Reassign To Vendor", url: "/inventory/reassign-vendor-report" },
        ], },
        { title: " eSIM Unlock", url: "/inventory/esim-unlock" },
      ],
    },

      {
      title: "Portin Order",
      icon: IconFileAi,
      subMenu: [
        { title: "Create New Order", url: "/portin-order/create-new-order" },
        { title: "Pending Portin", url: "/portin-order/pending-portin" },
        { title: "Cancel Portin", url: "/portin-order/cancel-portin" },
        { title: "Completed Ports", url: "/portin-order/complete-ports" },
        { title: "Search Ports", url: "/portin-order/search-ports" },
        { title: "Portin Eligibility", url: "/portin-order/portin-eligibility" },
      ],
    },

     {
      title: "Report",
      icon: IconReport,
      subMenu: [
        { title: "MSISDN Snapshot", url: "/reports/" },
        { title: "Activation - Billing", url: "/reports/" },
        { title: "Deactivation", url: "/reports/" },
        { title: "PortOut", url: "/reports/" },
        { title: "PortIn", url: "/reports/" },
        { title: "Usages Reports", url: "/reports/" },
        { title: "Surgepay Usage Reports", url: "/reports/" },
        { title: "MRC Subscriber", url: "/reports/" },
        { title: "Vendor MRC Subscriber", url: "/reports/" },
        { title: "Device Notification", url: "/reports/" },
        { title: "PortOut Notification", url: "/reports/" },
        { title: "Threshold Notification", url: "/reports/" },
        { title: "NetIP Report", url: "/reports/" },
        { title: "NetIP Summary", url: "/reports/" },
        { title: "NetIP Account Reload", url: "/reports/" },
      ],
    },

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
  const [openMenu, setOpenMenu] = React.useState<string | null>(null)
  const [openSubMenu, setOpenSubMenu] = React.useState<string | null>(null)

  /* Auto-open submenu when route changes */
  React.useEffect(() => {
    const activeMenu = data.navMain.find(
      (item) =>
        item.subMenu &&
        item.subMenu.some(
          (sub) => pathname.startsWith(sub.url) || (sub.subMenu && sub.subMenu.some((c) => pathname.startsWith(c.url)))
        )
    )

    if (activeMenu) setOpenMenu(activeMenu.title)
  }, [pathname])

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      {/* ---------- HEADER ---------- */}
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="!p-2">
              <Link href="/dashboard">
                <Image src="/BlueConnectsLogo.png" alt="logo" width={160} height={20} priority />
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
              item.subMenu.some(
                (sub) => pathname.startsWith(sub.url) || (sub.subMenu && sub.subMenu.some((c) => pathname.startsWith(c.url)))
              )

            return (
              <SidebarMenuItem key={item.title}>
                {item.subMenu ? (
                  <>
                    <SidebarMenuButton
                      onClick={() => setOpenMenu(openMenu === item.title ? null : item.title)}
                      className={`flex justify-between items-center mb-1 ${
                        isSubmenuActive ? "bg-blue-500 text-white hover:bg-blue-500 hover:text-white" : ""
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <item.icon size={18} />
                        {item.title}
                      </span>
                      <span className="text-lg">{openMenu === item.title ? "▾" : "▸"}</span>
                    </SidebarMenuButton>

                    {openMenu === item.title && (
                      <SidebarMenu className="pl-2 rounded-lg bg-blue-100">
                        {item.subMenu.map((sub) => (
                          <SidebarMenuItem key={sub.title}>
                            {sub.subMenu ? (
                              <>
                                {/* Report submenu toggle */}
                                <button
                                  onClick={() => setOpenSubMenu(openSubMenu === sub.title ? null : sub.title)}
                                  className={`flex w-full justify-between rounded px-2 py-1 text-sm hover:bg-muted ${
                                    pathname.startsWith(sub.url) ? "bg-blue-400 text-white" : ""
                                  }`}
                                >
                                  <span>{sub.title}</span>
                                  <span>{openSubMenu === sub.title ? "▾" : "▸"}</span>
                                </button>

                                {openSubMenu === sub.title && (
                                  <SidebarMenu className="pl-4 rounded-lg bg-gray-100 mt-1">
                                    {sub.subMenu.map((child) => (
                                      <SidebarMenuItem key={child.title}>
                                        <SidebarMenuButton asChild>
                                          <Link
                                            href={child.url}
                                            className={`block rounded px-2 py-1 text-sm ${
                                              pathname.startsWith(child.url)
                                                ? "bg-blue-400 text-white"
                                                : "hover:blue-400"
                                            }`}
                                          >
                                            {child.title}
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
                                  href={sub.url}
                                  className={`block w-full rounded px-2 py-1 text-sm ${
                                    pathname.startsWith(sub.url) ? "bg-blue-400 text-white" : "hover:bg-muted"
                                  }`}
                                >
                                  {sub.title}
                                </Link>
                              </SidebarMenuButton>
                            )}
                          </SidebarMenuItem>
                        ))}
                      </SidebarMenu>
                    )}
                  </>
                ) : (
                  <SidebarMenuButton asChild>
                    <Link
                      href={item.url}
                      className={`flex items-center gap-2 ${pathname === item.url ? "bg-blue-500 text-white" : ""}`}
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
