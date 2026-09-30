"use client";

import { useState } from "react";
import Link from "next/link";
import type { NavGroup, NavLink } from "@/lib/navigation";
import FlaticonIcon from "@/components/navigation/FlaticonIcon";

interface MobileNavGroupProps {
  group: NavGroup;
  onNavigate: () => void;
}

function MobileNavItem({
  item,
  isHub,
  onNavigate,
}: {
  item: NavLink;
  isHub?: boolean;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);

  if (!item.children?.length) {
    return (
      <li>
        <Link
          href={item.href}
          onClick={onNavigate}
          className={`inline-flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors w-full ${
            isHub ? "font-semibold text-gray-800" : ""
          }`}
        >
          <FlaticonIcon name={item.icon} className="text-sm text-orange-500/80 shrink-0" />
          <span>{item.label}</span>
        </Link>
      </li>
    );
  }

  return (
    <li>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm font-semibold text-gray-800 hover:bg-orange-50 hover:text-orange-600 transition-colors"
        aria-expanded={open}
      >
        <FlaticonIcon name={item.icon} className="text-sm text-orange-500/80 shrink-0" />
        <span className="flex-1">{item.label}</span>
        <FlaticonIcon
          name="angle-small-down"
          className={`text-xs text-gray-500 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <ul className="pb-1 pl-4 space-y-1">
          {item.children.map((child, index) => (
            <MobileNavItem key={child.href} item={child} isHub={index === 0} onNavigate={onNavigate} />
          ))}
        </ul>
      )}
    </li>
  );
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
            <MobileNavItem key={item.href} item={item} isHub={index === 0} onNavigate={onNavigate} />
          ))}
        </ul>
      )}
    </li>
  );
}
