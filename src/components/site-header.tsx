//import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import {ComboboxDemo} from "@/components/combo-box"
import {TopUser} from "@/components/top-user"
import DynamicBreadcrumb from "./breadcrumb"

export function SiteHeader() {
  const user = {
  name: "Jonson",
  email: "johnson@example.com",
  avatar: "/avatar.png", // public/avatar.png
}
  return (
    <header className="flex header-heights h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <DynamicBreadcrumb />

        <div className="ml-auto flex items-center gap-2">
          <ComboboxDemo />
   
        </div>
        <div className="relative">
        <TopUser  user={user} />
        </div>
      </div>
    </header>
  )
}
