"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
  { href: "/", label: "useState" },
  { href: "/useRouter", label: "useRouter" },
  { href: "/useSearchParams", label: "useSearchParams" },
  { href: "/serverSearchParams", label: "serverSearchParams" },
]

export default function NavBar() {
  const pathname = usePathname()

  return (
    <nav className="mb-8 rounded bg-gray-100 p-4">
      <ul className="flex flex-wrap gap-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={cn([
                "font-medium text-gray-600",
                { "text-blue-600": pathname === link.href },
              ])}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
