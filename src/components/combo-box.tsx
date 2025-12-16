"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { useRouter } from "next/navigation"

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

// -------------------- DATA --------------------
const frameworks = [
  {
    value: "Recent Search",
    label: "Recent Search",
    href: "/recent-search",
  },
  {
    value: "Top Five Customer Search",
    label: "Top Five Customer Search",
    href: "/top-five-customer",
  },
  {
    value: "Top Five MSISDN Search",
    label: "Top Five MSISDN Search",
    href: "/top-five-msisdn",
  },
  {
    value: "Top Five SIM Search",
    label: "Top Five SIM Search",
    href: "/top-five-sim",
  },
]

// -------------------- COMPONENT --------------------
export function ComboboxDemo() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
  const router = useRouter()

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[400px] justify-between"
        >
          {value
            ? frameworks.find((item) => item.value === value)?.label
            : "Search Here...."}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-[400px] p-0">
        <Command>
          <CommandInput placeholder="Search Here...." className="h-9" />
          <CommandList>
            <CommandEmpty>No result found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((item) => (
                <CommandItem
                  key={item.value}
                  value={item.value}
                  onSelect={() => {
                    setValue(item.value)
                    setOpen(false)
                    router.push(item.href) // ✅ navigate
                  }}
                >
                  {item.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === item.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
