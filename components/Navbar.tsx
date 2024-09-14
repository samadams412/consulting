"use client";
import React, { useState } from "react";
import {
  FaCloudDownloadAlt,
  FaBars,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import Link from "next/link";

import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./ModeToggle";



const services = [
  {
    title: "Managed IT",
    href: "/pages/services/managed-it",
    description: "Comprehensive IT management solutions for your business.",
  },
  {
    title: "Cloud Computing",
    href: "/pages/services/cloud-computing",
    description: "Transform your business with cloud technology.",
  },
  {
    title: "Cybersecurity",
    href: "/pages/services/cybersecurity",
    description: "Protect your digital assets with cutting-edge security.",
  },
  {
    title: "Network Solutions",
    href: "/pages/services/network-solutions",
    description: "Ensure your network is robust, reliable, and scalable.",
  },
];

const industries = [
  {
    title: "Finance",
    href: "/pages/industries/finance",
    description: "Financial services and technology solutions.",
  },
  {
    title: "Legal",
    href: "/pages/industries/legal",
    description: "Legal industry-specific services and tools.",
  },
  {
    title: "Education",
    href: "/pages/industries/education",
    description: "Educational technology and services.",
  },
  {
    title: "Manufacturing",
    href: "/pages/industries/manufacturing",
    description: "Manufacturing solutions and innovations.",
  },
];

const resources = [
  {
    title: "Blog",
    href: "https://sams-blog-gamma.vercel.app/",
    description: "Read our latest blog posts.",
  },
  {
    title: "Case Studies",
    href: "/pages/resources/case-studies",
    description: "Explore our case studies and success stories.",
  },
  {
    title: "White Papers",
    href: "/pages/resources/white-papers",
    description: "Access our white papers and research.",
  },
  {
    title: "Events",
    href: "/pages/resources/events",
    description: "Check out our upcoming events.",
  },
];

export default function Navbar() {
  return (
    <header className="flex h-20 w-full items-center justify-between px-4 md:px-6">
      {/* Mobile Menu using Sheet */}
      <Sheet>
        <SheetTrigger asChild className="mx-2">
          <Button variant="outline" size="icon" className="lg:hidden">
            <FaBars className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <div className="grid gap-2 py-6">
            <Link
              href="/"
              className="flex w-full items-center py-2 text-lg font-semibold"
            >
              Home
            </Link>
            <Link
              href="/pages/services/managed-it"
              className="flex w-full items-center py-2 text-lg font-semibold"
            >
              Services
            </Link>
            <Link
              href="/pages/industries/finance"
              className="flex w-full items-center py-2 text-lg font-semibold"
            >
              Industries
            </Link>
            <Link
              href="/pages/resources/blog"
              className="flex w-full items-center py-2 text-lg font-semibold"
            >
              Resources
            </Link>
            <Link
              href="/pages/about-us"
              className="flex w-full items-center py-2 text-lg font-semibold"
            >
              About Us
            </Link>
            <Link
              href="/pages/contact"
              className="flex w-full items-center py-2 text-lg font-semibold"
            >
              Contact Us
            </Link>
          </div>
        </SheetContent>
      </Sheet>

      {/* Logo */}
      <Link href="/" className="flex items-center mr-auto lg:mr-6">
        <FaCloudDownloadAlt className="text-4xl" />
        <span className="ml-2 font-bold">CloudCrest</span>
      </Link>

      {/* Navigation for larger screens with dropdowns */}
      <NavigationMenu className="hidden lg:flex text-sm font-medium ">
        <NavigationMenuList>
          {/* Services Menu */}
          <NavigationMenuItem className="px-4 py-2">
            <NavigationMenuTrigger className="flex items-center ">
              Services
            </NavigationMenuTrigger>
            <NavigationMenuContent className="w-80 md:w-[400px] lg:w-[500px] overflow-auto">
              <ul className="grid w-full gap-3 p-4 md:grid-cols-2 lg:grid-cols-2">
                {services.map((service) => (
                  <ListItem
                    key={service.title}
                    title={service.title}
                    href={service.href}
                  >
                    {service.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Industries Menu */}
          <NavigationMenuItem className="px-4 py-2">
            <NavigationMenuTrigger className="flex items-center">
              Industries
            </NavigationMenuTrigger>
            <NavigationMenuContent className="w-80 md:w-[400px] lg:w-[500px] overflow-auto">
              <ul className="grid w-full gap-3 p-4 md:grid-cols-2 lg:grid-cols-2">
                {industries.map((industry) => (
                  <ListItem
                    key={industry.title}
                    title={industry.title}
                    href={industry.href}
                  >
                    {industry.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Resources Menu */}
          <NavigationMenuItem className="px-4 py-2">
            <NavigationMenuTrigger className="flex items-center">
              Resources
            </NavigationMenuTrigger>
            <NavigationMenuContent className="w-80 md:w-[400px] lg:w-[500px] overflow-auto">
              <ul className="grid w-full gap-3 p-4 md:grid-cols-2 lg:grid-cols-2">
                {resources.map((resource) => (
                  <ListItem
                    key={resource.title}
                    title={resource.title}
                    href={resource.href}
                    target="__blank"
                  >
                    {resource.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Other Links */}
          <NavigationMenuLink asChild>
            <Link
              href="/pages/about-us"
              className="px-4 py-2 text-sm font-medium transition-colors hover:bg-accent/50 rounded-md"
            >
              About Us
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              href="/pages/contact"
              className="px-4 py-2 text-sm font-medium transition-colors hover:bg-accent/50 rounded-md"
            >
              Contact Us
            </Link>
          </NavigationMenuLink>

          {/* Dark Mode Toggle */}
          
        </NavigationMenuList>
        
      </NavigationMenu>
      <ModeToggle/>
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
  );
});
ListItem.displayName = "ListItem";
