"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Bell } from "lucide-react"
import {
    IconDashboard,
    IconUsers,
    IconUser,
    IconChartBar,
    IconBox,
    IconReport,
} from "@tabler/icons-react"

export default function AIHeader() {
    const [open, setOpen] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null)

    // Close menu when clicking outside
    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () =>
            document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    return (
        <header className="w-full border-b ai-portal-header-bg">
            <div className="flex items-center justify-between px-6 h-14">

                {/* LEFT SIDE */}
                <div className="flex items-center gap-6">
                    <h1 className="text-lg font-semibold text-white">BlueConnects</h1>

                    <nav className="hidden md:flex gap-5 text-sm text-white ">
                        <Link href="/dashboard" className="hover:text-blue-200">Go to Dashboard</Link>
                        <Link href="#" className="hover:text-blue-200">Get Help</Link>
                        <Link href="#" className="hover:text-blue-200">Virtual NOC</Link>
                    </nav>
                </div>

                {/* RIGHT SIDE */}
                <div
                    className="relative flex items-center gap-4"
                    ref={menuRef}
                >
                    {/* Notification */}
                    <Bell className="h-5 w-5 text-white hover:text-blue-200 cursor-pointer" />

                    {/* GOOGLE STYLE 9 DOT ICON */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="h-9 w-9 rounded-full flex items-center justify-center transition"
                    >
                        <div className="grid grid-cols-3 gap-[2px]">
                            {Array.from({ length: 9 }).map((_, i) => (
                                <span
                                    key={i}
                                    className="h-1.5 w-1.5 bg-white rounded-full hover:text-blue-200"
                                />
                            ))}
                        </div>
                    </button>

                    {/* PROFILE */}
                    <div className="h-8 w-8 rounded-full bg-white text-blue-800 hover:bg-blue-200 flex items-center justify-center text-sm font-semibold">
                        J
                    </div>

                    {/* DROPDOWN MENU */}
                    {open && <AppMenu />}
                </div>
            </div>
        </header>
    )
}

/* ---------------- APP MENU ---------------- */

function AppMenu() {
    return (
        <div className="absolute right-0 top-12 w-72 rounded-xl border bg-white shadow-xl p-4 z-50 animate-in fade-in zoom-in-95">
            <div className="grid grid-cols-3 gap-4">
                <AppItem
                    title="Dashboard"
                    href="/dashboard"
                    icon={IconDashboard}
                />

                <AppItem
                    title="Customer"
                    href="/customer"
                    icon={IconUsers}
                />

                <AppItem
                    title="Customer Profile"
                    href="/customer-profile"
                    icon={IconUser}
                />

                <AppItem
                    title="Plan"
                    href="/plan"
                    icon={IconChartBar}
                />

                <AppItem
                    title="Inventory"
                    href="/inventory"
                    icon={IconBox}
                />

                <AppItem
                    title="Reports"
                    href="/reports"
                    icon={IconReport}
                />
            </div>
        </div>
    )
}


/* ---------------- MENU ITEM ---------------- */
type AppItemProps = {
    title: string
    href: string
    icon: React.ElementType
}

function AppItem({ title, href, icon: Icon }: AppItemProps) {
    return (
        <Link
            href={href}
            className="flex flex-col items-center gap-2 rounded-lg p-3 hover:bg-gray-100 transition"
        >
            <div className="h-10 w-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                <Icon size={22} stroke={1.7} />
            </div>

            <span className="text-xs text-gray-700 text-center leading-tight">
                {title}
            </span>
        </Link>
    )
}
