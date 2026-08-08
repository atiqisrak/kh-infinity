"use client";

import Link from "next/link";
import type { NavGroup, NavLink } from "@/lib/navigation";
import FlaticonIcon from "@/components/navigation/FlaticonIcon";

interface NavDropdownProps {
  group: NavGroup;
}

function DropdownLink({ item, isHub }: { item: NavLink; isHub?: boolean }) {
  return (
    <Link
      href={item.href}
      className={`inline-flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors w-full ${
        isHub ? "font-semibold text-gray-900" : ""
      }`}
    >
      <FlaticonIcon name={item.icon} className="text-sm text-orange-500/80 shrink-0" />
      <span>{item.label}</span>
    </Link>
  );
}

function DropdownSection({ section }: { section: NavLink }) {
  return (
    <div className="min-w-[13rem]">
      <Link
        href={section.href}
        className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-orange-50 hover:text-orange-600 transition-colors rounded-lg"
      >
        <FlaticonIcon name={section.icon} className="text-sm text-orange-500/80 shrink-0" />
        <span>{section.label}</span>
      </Link>
      <ul className="mt-1 space-y-0.5">
        {(section.children ?? []).map((child, index) => (
          <li key={child.href}>
            <DropdownLink item={child} isHub={index === 0} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function NavDropdown({ group }: NavDropdownProps) {
  const isMegaMenu = group.children.some((item) => item.children?.length);

  return (
    <li className="relative group/nav">
      <Link
        href={group.href}
        className="inline-flex items-center gap-1.5 px-2.5 xl:px-3 text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors py-2 rounded-lg hover:bg-orange-50/60"
      >
        <FlaticonIcon name={group.icon} className="text-sm text-orange-500/80" />
        {group.label}
        <FlaticonIcon
          name="angle-small-down"
          className="text-xs opacity-60 group-hover/nav:opacity-100 transition-opacity"
        />
      </Link>
      <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-200 z-50">
        {isMegaMenu ? (
          <div className="flex items-start gap-1 bg-white rounded-xl shadow-lg border border-gray-100 p-3">
            {group.children.map((section, index) => (
              <div
                key={section.href}
                className={`px-2 ${index > 0 ? "border-l border-gray-100" : ""}`}
              >
                <DropdownSection section={section} />
              </div>
            ))}
          </div>
        ) : (
          <ul className="min-w-[13rem] bg-white rounded-xl shadow-lg border border-gray-100 py-2">
            {group.children.map((item, index) => (
              <li key={item.href}>
                <DropdownLink item={item} isHub={index === 0} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
}
