"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navigationItems = [
  {
    name: "About Us",
    href: "/about",
    submenu: [
      { name: "Our People", href: "/about/our-people" },
      { name: "UAM Gives", href: "/about/uam-gives" },
      { name: "Our History", href: "/about/our-history" },
      { name: "Diversity, Equity, & Inclusion", href: "/about/dei" },
    ],
  },
  {
    name: "Expertise",
    href: "/expertise",
    submenu: [
      { name: "Construction Management", href: "/expertise/construction-management" },
      { name: "General Contracting", href: "/expertise/general-contracting" },
      { name: "Preconstruction", href: "/expertise/preconstruction" },
      { name: "Design Build", href: "/expertise/design-build" },
      { name: "Environmental Health & Safety", href: "/expertise/environmental-health-safety" },
    ],
  },
  {
    name: "Projects",
    href: "/projects",
    submenu: [
      { name: "Base Building Upgrades", href: "/projects/base-building-upgrades" },
      { name: "Core & Shell", href: "/projects/core-shell" },
      { name: "Corporate", href: "/projects/corporate" },
      { name: "Retail", href: "/projects/retail" },
      { name: "Healthcare", href: "/projects/healthcare" },
    ],
  },
  { name: "Careers", href: "/careers", submenu: [] },
  { name: "News", href: "/news", submenu: [] },
  { name: "Contact", href: "/contact", submenu: [] },
]

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-6">
        <Link href="/" className="flex-shrink-0">
          <div className="relative h-12 w-32">
            {/* Placeholder for logo - to be replaced with actual logo */}
            <div className="flex items-center space-x-1">
              <span className="text-black text-2xl font-bold">UA</span>
              <div className="bg-blue-600 h-6 w-6 flex items-center justify-center">
                <span className="text-white text-lg font-bold">M</span>
              </div>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navigationItems.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => setOpenDropdown(item.name)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className="text-gray-800 hover:text-red-600 transition-colors font-medium"
              >
                {item.name}
              </Link>

              {item.submenu.length > 0 && openDropdown === item.name && (
                <div className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                  <div className="py-1">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        href={subitem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-600"
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="text-black">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col space-y-4 mt-6">
              {navigationItems.map((item) => (
                <div key={item.name} className="py-2">
                  <Link
                    href={item.href}
                    className="text-lg font-medium text-gray-800 hover:text-red-600"
                  >
                    {item.name}
                  </Link>

                  {item.submenu.length > 0 && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          href={subitem.href}
                          className="block text-sm text-gray-600 hover:text-red-600"
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
