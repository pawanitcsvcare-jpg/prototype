import { AppSidebar } from "@/components/app-sidebar"
//import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards"
import { SiteHeader } from "@/components/site-header"
import { ChartSwitcher } from "@/components/ChartSwitcher"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import {ChartActivationDeactivation} from "@/components/activation-deactivation-summary"


export default function Page() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
          
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards />
              {/* <div className="px-4 lg:px-6">
                <LastSevenDays  />
              </div> */}


<div className="flex flex-col md:flex-row gap-4 px-4 lg:px-6">
  <div className="md:w-1/2">
    <ChartSwitcher />
  </div>
  <div className="md:w-1/2">
    <ChartActivationDeactivation />
  </div>
</div>



              <div className="px-4 lg:px-6">
                <ChartAreaInteractive />
              </div>
             
              {/* <DataTable data={data} /> */}
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
