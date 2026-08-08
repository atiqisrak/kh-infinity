"use client";

import { useState } from "react";
import { Link } from "@/i18n/navigation";
import type { NavGroup } from "@/lib/navigation";
import FlaticonIcon from "@/components/navigation/FlaticonIcon";

interface MobileNavGroupProps {
  group: NavGroup;
  onNavigate: () => void;
}

export default function MobileNavGroup({ group, onNavigate }: MobileNavGroupProps) {
  const [open, setOpen] = useState(false);

  return (
    <li className="border-b border-gray-100 last:border-0">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-3 text-left text-base font-semibold text-gray-900"
        aria-expanded={open}
      >
        <span className="inline-flex items-center gap-2.5">
          <FlaticonIcon name={group.icon} className="text-base text-orange-500" />
          {group.label}
        </span>
        <FlaticonIcon
          name="angle-small-down"
          className={`text-sm text-gray-500 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <ul className="pb-3 pl-1 space-y-1">
          {group.children.map((item, index) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={onNavigate}
                className={`inline-flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors w-full ${
                  index === 0 ? "font-semibold text-gray-800" : ""
                }`}
              >
                <FlaticonIcon name={item.icon} className="text-sm text-orange-500/80 shrink-0" />
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
