"use client"

import * as React from "react"
import Link from "next/link"
import { type Icon } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { IconUsers } from "@tabler/icons-react"

export function NavSecondary({
  items,
  ...props
}: {
  items: {
    title: string
    url: string
    icon: Icon
  }[]
} & React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenu>

          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/customer-profile/recent-search">
              <Button className="bg-blue-400 text-white hover:bg-blue-500 w-full">
                <IconUsers />
                <span>Recent Searches</span>
                </Button>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          {/* Existing Items */}
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <Link href={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}

        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
