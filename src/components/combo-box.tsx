"use client"

import * as React from "react"
import { Check, ChevronsUpDown, Sparkles } from "lucide-react"
import { useRouter } from "next/navigation"
import { IconDownload } from "@tabler/icons-react"

import TopFiveCustomer from "@/components/top-five-customer"
import TopFiveMSISDN from "@/components/top-five-msisdn"
import TopFiveSIM from "@/components/top-five-sim"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

/* -------------------- DATA -------------------- */

const frameworks = [
  { value: "Recent Search", label: "Recent Search", href: "/recent-search" },
  { value: "Top Five Customer Search", label: "Top Five Customer Search" },
  { value: "Top Five MSISDN Search", label: "Top Five MSISDN Search" },
  { value: "Top Five SIM Search", label: "Top Five SIM Search" },
]

type DialogType = "customer" | "msisdn" | "sim" | null

/* -------------------- COMPONENT -------------------- */

export function ComboboxDemo() {
  const router = useRouter()

  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
  const [alertOpen, setAlertOpen] = React.useState(false)
  const [dialogType, setDialogType] = React.useState<DialogType>(null)

  const handleSelect = (item: (typeof frameworks)[number]) => {
    setValue(item.value)
    setOpen(false)

    if (item.value === "Top Five Customer Search") {
      setDialogType("customer")
      setAlertOpen(true)
    } else if (item.value === "Top Five MSISDN Search") {
      setDialogType("msisdn")
      setAlertOpen(true)
    } else if (item.value === "Top Five SIM Search") {
      setDialogType("sim")
      setAlertOpen(true)
    } else if (item.href) {
      router.push(item.href)
    }
  }

  return (
    <>
      {/* -------------------- SEARCH BAR -------------------- */}
      <div className="relative w-[500px]">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-full justify-between pr-28 global-searchbar h-12"
            >
              {value
                ? frameworks.find((item) => item.value === value)?.label
                : "Search Here...."}
              <ChevronsUpDown className="opacity-50" />
            </Button>
          </PopoverTrigger>

          {/* ✅ THIS WAS MISSING */}
          <PopoverContent className="w-[550px] p-0">
            <Command>
              <CommandInput placeholder="Search Here...." />
              <CommandList>
                <CommandEmpty>No result found.</CommandEmpty>
                <CommandGroup>
                  {frameworks.map((item) => (
                    <CommandItem
                      key={item.value}
                      value={item.value}
                      onSelect={() => handleSelect(item)}
                    >
                      {item.label}
                      <Check
                        className={cn(
                          "ml-auto",
                          value === item.value
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>

        {/* -------------------- AI MODE BUTTON -------------------- */}
        <button
  type="button"
  onClick={() => router.push("/ai-mode-page")}
  className="absolute right-2 top-1/2 -translate-y-1/2"
>
  <div className=" relative rounded-lg p-[1px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-border">
    <div className="flex items-center gap-1.5 rounded-md bg-white px-3 py-1.5 text-sm font-medium text-gray-900 shadow-sm transition-all duration-300 hover:scale-[1] hover:shadow-[0_0_10px_rgba(168,85,247,0.45)]">
      <Sparkles className="h-4 w-4 text-purple-600 animate-pulse" />
      AI Mode
    </div>
  </div>
</button>
      </div>

      {/* -------------------- ALERT DIALOG -------------------- */}
      <AlertDialog open={alertOpen} onOpenChange={setAlertOpen}>
        <AlertDialogContent className="!max-w-6xl">
          <AlertDialogHeader>
            <AlertDialogTitle>
              <div className="flex w-full flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                {dialogType === "customer" &&
                  "Top Five Recent Customer"}
                {dialogType === "msisdn" &&
                  "Top Five Recent MSISDN"}
                {dialogType === "sim" &&
                  "Top Five Recent SIM"}

                <Button variant="outline" size="sm">
                  <IconDownload className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </div>
            </AlertDialogTitle>
          </AlertDialogHeader>

          <div className="py-3">
            {dialogType === "customer" && <TopFiveCustomer />}
            {dialogType === "msisdn" && <TopFiveMSISDN />}
            {dialogType === "sim" && <TopFiveSIM />}
          </div>

          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
