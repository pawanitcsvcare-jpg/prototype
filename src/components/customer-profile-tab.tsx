"use client";

import { useState } from "react";
import {
  PlayCircle,
  PauseCircle,
  Headphones,
  MoreVertical,
  ShoppingCart,
  Package,
  Send,
} from "lucide-react";
import {
  IconDeviceMobile,
  IconAntenna,
  IconHistory,
  IconWallet,
} from "@tabler/icons-react";

import CarrierSIMDetails from "./carrier-sim-details";

/* -------------------- TAB CONTENT -------------------- */

const tabContent = {
  carriersimdetails: <CarrierSIMDetails />,
  status: <div>Status content goes here</div>,
  suspendservice: <div>Suspend Service content</div>,
  restoreservice: <div>Restore Service content</div>,
  phoneconfig: <div>Phone Config content</div>,
  purchasebucket: <div>Purchase Bucket content</div>,
  purchasetopup: <div>Purchase Topup Bucket content</div>,
  productservice: <div>Product/Features content</div>,
  resendota: <div>Resend OTA content</div>,
  confirmhlr: <div>Confirm HLR Reg content</div>,
  callforwardingdetails: <div>Call Forward Details content</div>,
  changebilling: <div>Change Billing Code content</div>,
  resetvoice: <div>Reset Voicemail Password content</div>,
  sendsms: <div>Send SMS content</div>,
  netip: <div>Net IP content</div>,
  switchmvno: <div>Switch MVNO content</div>,
} as const;

/* -------------------- TYPES -------------------- */

type TabKey = keyof typeof tabContent;

type TabItem = {
  id: TabKey;
  label: string;
  icon: React.ElementType;
};

/* -------------------- TAB CONFIG -------------------- */

const tabs: TabItem[] = [
  { id: "carriersimdetails", label: "Carrier SIM Detail", icon: IconAntenna },
  { id: "status", label: "Status", icon: IconHistory },
  { id: "suspendservice", label: "Suspend Service", icon: PauseCircle },
  { id: "restoreservice", label: "Restore Service", icon: PlayCircle },
  { id: "phoneconfig", label: "Phone Config", icon: IconDeviceMobile },
  { id: "purchasebucket", label: "Purchase Bucket", icon: ShoppingCart },

  // Overflow tabs
  { id: "purchasetopup", label: "Purchase Topup Bucket", icon: IconWallet },
  { id: "productservice", label: "Product/Features", icon: Package },
  { id: "resendota", label: "Resend OTA", icon: Send },
  { id: "confirmhlr", label: "Confirm HLR Reg", icon: Headphones },
  {
    id: "callforwardingdetails",
    label: "Update Call Forward Details",
    icon: Headphones,
  },
  { id: "changebilling", label: "Change Billing Code", icon: Headphones },
  {
    id: "resetvoice",
    label: "Reset Voicemail Password",
    icon: Headphones,
  },
  { id: "sendsms", label: "Send SMS", icon: Headphones },
  { id: "netip", label: "Net IP", icon: Headphones },
  { id: "switchmvno", label: "Switch MVNO", icon: Headphones },
];

const VISIBLE_TABS = 7;

/* -------------------- COMPONENT -------------------- */

export default function CustomerProfileTab() {
  const [activeTab, setActiveTab] =
    useState<TabKey>("carriersimdetails");
  const [open, setOpen] = useState(false);

  const visibleTabs = tabs.slice(0, VISIBLE_TABS);
  const overflowTabs = tabs.slice(VISIBLE_TABS);

  return (
    <div className="w-full">
      {/* ---------------- TAB BAR ---------------- */}
      <div className="flex items-center border-b bg-white px-6 profile-tab-outer-section">
        {/* Visible Tabs */}
        <div className="flex gap-7">
          {visibleTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center gap-2 py-4 text-sm font-medium
                  ${
                    isActive
                      ? "text-blue-600"
                      : "text-gray-600 hover:text-gray-900"
                  }
                `}
              >
                <Icon size={16} />
                {tab.label}

                {isActive && (
                  <span className="absolute left-0 bottom-0 h-[2px] w-full bg-blue-600" />
                )}
              </button>
            );
          })}
        </div>

        {/* More Menu */}
        {overflowTabs.length > 0 && (
          <div className="relative ml-4">
            <button
              onClick={() => setOpen((v) => !v)}
              className="rounded p-2 hover:bg-gray-100"
            >
              <MoreVertical size={18} />
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-72 rounded-md border bg-white shadow-lg z-50">
                {overflowTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id);
                      setOpen(false);
                    }}
                    className={`block w-full px-4 py-2 text-left text-sm hover:bg-gray-100
                      ${
                        activeTab === tab.id
                          ? "text-blue-600 font-medium"
                          : "text-gray-700"
                      }
                    `}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* ---------------- TAB CONTENT ---------------- */}
      <div className="px-4 py-4 text-sm text-gray-700">
        {tabContent[activeTab] ?? (
          <div className="text-gray-400">Content coming soon…</div>
        )}
      </div>
    </div>
  );
}
