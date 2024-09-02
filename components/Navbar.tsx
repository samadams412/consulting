"use client";
import React, { useState } from "react";
import { FaCloudDownloadAlt, FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import Link from "next/link";

import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { NavigationMenuContent, NavigationMenuItem, NavigationMenuTrigger } from "@radix-ui/react-navigation-menu";


interface NavbarProps {
  toggleDarkMode: () => void;
  isDarkMode: boolean;
}

const services: {title: string, href: string, description: string}[] = [
  {
    title: "Managed IT",
    href: "/services/managed-it",
    description: "Comprehensive IT management solutions for your business.",
  },
  {
    title: "Cloud Computing",
    href: "/services/cloud-computing",
    description: "Transform your business with cloud technology.",
  },
  {
    title: "Cybersecurity",
    href: "/services/cybersecurity",
    description: "Protect your digital assets with cutting-edge security.",
  },
  {
    title: "Network Solutions",
    href: "/services/network-solutions",
    description: "Ensure your network is robust, reliable, and scalable.",
  },
];
const industries: {title: string, href: string, description: string}[] = [
  {
    title: "Healthcare",
    href: "/industries/healthcare",
    description: "Solutions tailored for the healthcare industry.",
  },
  {
    title: "Finance",
    href: "/industries/finance",
    description: "Financial services and technology solutions.",
  },
  {
    title: "Legal",
    href: "/industries/legal",
    description: "Legal industry-specific services and tools.",
  },
  {
    title: "Education",
    href: "/industries/education",
    description: "Educational technology and services.",
  },
  {
    title: "Manufacturing",
    href: "/industries/manufacturing",
    description: "Manufacturing solutions and innovations.",
  },
];
export default function Navbar({ toggleDarkMode, isDarkMode}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

return (
    <header className="flex h-20 w-full items-center dark:bg-transparent bg-blue-800 px-4 md:px-6">
      {/* Mobile Menu using Sheet */}
      <Sheet>
        <SheetTrigger asChild className="mx-2">
          <Button variant="outline" size="icon" className="lg:hidden">
            {isOpen ? (
              <FaTimes className="h-6 w-6 " />
            ) : (
              <FaBars className="h-6 w-6 " />
            )}
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <div className="grid gap-2 py-6">
            {/* Links */}
            <Link href="/" className="flex w-full items-center py-2 text-lg font-semibold text-black">
              Home
            </Link>
            {/* (Other links unchanged) */}
          </div>
        </SheetContent>
      </Sheet>

      {/* Logo */}
      <Link href="/" className="flex items-center mr-auto lg:mr-6">
        <FaCloudDownloadAlt className="text-4xl text-white" />
        <span className="ml-2 text-white font-bold">CloudMinds Consulting</span>
      </Link>

      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className="ml-4 p-2 text-white transition-colors hover:bg-gray-700 rounded-md"
      >
        {isDarkMode ? <FaSun className="h-6 w-6" /> : <FaMoon className="h-6 w-6" />}
      </button>

      {/* Navigation for larger screens with dropdowns */}
      <NavigationMenu className="hidden lg:flex text-sm font-medium text-white">
        <NavigationMenuList>
          {/* Services Menu */}
          <NavigationMenuItem className="px-4 py-2">
            <NavigationMenuTrigger>Services</NavigationMenuTrigger>
            <NavigationMenuContent className="w-80 md:w-[400px] lg:w-[500px] overflow-auto">
              <ul className="grid w-full gap-3 p-4 md:grid-cols-2 lg:grid-cols-2 lg:grid-cols-1">
                {services.map((service) => (
                  <ListItem key={service.title} title={service.title} href={service.href}>
                    {service.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {/* Industries Menu */}
          <NavigationMenuItem className="px-4 py-2">
            <NavigationMenuTrigger>Industries</NavigationMenuTrigger>
            <NavigationMenuContent className="w-80 md:w-[400px] lg:w-[500px] overflow-auto">
              <ul className="grid w-full gap-3 p-4 md:grid-cols-2 lg:grid-cols-2 lg:grid-cols-1">
                {industries.map((industry) => (
                  <ListItem key={industry.title} title={industry.title} href={industry.href}>
                    {industry.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {/* Other Links */}
          <NavigationMenuLink asChild>
            <Link href="/about" className="px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-500 rounded-md">
              About Us
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link href="/resources" className="px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-500 rounded-md">
              Resources
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link href="/contact" className="px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-500 rounded-md">
              Contact Us
            </Link>
          </NavigationMenuLink>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"