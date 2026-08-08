"use client";

import { Link } from "@/i18n/navigation";
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

export default function NavDropdown({ group }: NavDropdownProps) {
  return (
    <li className="relative group/nav shrink-0 list-none">
      <Link
        href={group.href}
        className="inline-flex items-center gap-1.5 px-2 xl:px-2.5 text-xs xl:text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors py-2 rounded-lg hover:bg-orange-50/60 whitespace-nowrap"
      >
        <FlaticonIcon name={group.icon} className="text-sm text-orange-500/80" />
        {group.label}
        <FlaticonIcon
          name="angle-small-down"
          className="text-xs opacity-60 group-hover/nav:opacity-100 transition-opacity"
        />
      </Link>
      <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-200 z-50">
        <div className="min-w-[13rem] max-h-[24rem] overflow-y-auto bg-white rounded-xl shadow-lg border border-gray-100 py-2">
          {group.children.map((item, index) => (
            <DropdownLink key={item.href} item={item} isHub={index === 0} />
          ))}
        </div>
      </div>
    </li>
  );
}
