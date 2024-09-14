"use client";
import React from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";
import Link from "next/link";
import { NavigationMenu, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { NavigationMenuContent, NavigationMenuItem, NavigationMenuTrigger } from "@radix-ui/react-navigation-menu";

const services = [
  {
    title: "Managed IT",
    href: "/services/managed-it",
  },
  {
    title: "Cloud Computing",
    href: "/services/cloud-computing",
  },
  {
    title: "Cybersecurity",
    href: "/services/cybersecurity",
  },
  {
    title: "Network Solutions",
    href: "/services/network-solutions",
  },
];

const industries = [
  {
    title: "Healthcare",
    href: "/industries/healthcare",
  },
  {
    title: "Finance",
    href: "/industries/finance",
  },
  {
    title: "Legal",
    href: "/industries/legal",
  },
  {
    title: "Education",
    href: "/industries/education",
  },
  {
    title: "Manufacturing",
    href: "/industries/manufacturing",
  },
];

export default function Footer() {
  return (
    <footer className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center lg:flex-row lg:justify-between">
        
          <div className="flex items-center mb-6 lg:mb-0">
            <FaCloudDownloadAlt className="text-4xl" />
            <span className="ml-2 font-bold">CloudMinds Consulting</span>
          </div>

         
          <NavigationMenu className="text-sm font-medium">
            <NavigationMenuList className="flex flex-col lg:flex-row w-full">
              <NavigationMenuItem className="lg:px-4 py-2 ">
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent className="w-80 md:w-[400px] lg:w-[500px] overflow-auto">
                  <ul className="grid gap-2 p-2 grid-cols-2">
                    {services.map((service) => (
                      <li key={service.title}>
                        <NavigationMenuLink asChild>
                          <Link href={service.href} className="block text-sm">
                            {service.title}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem className="lg:px-4 py-2">
                <NavigationMenuTrigger>Industries</NavigationMenuTrigger>
                <NavigationMenuContent className="w-80 md:w-[400px] lg:w-[250px]">
                  <ul className="grid gap-2 p-2 grid-cols-1">
                    {industries.map((industry) => (
                      <li key={industry.title}>
                        <NavigationMenuLink asChild>
                          <Link href={industry.href} className="block text-sm hover:bg-accent/50">
                            {industry.title}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuLink asChild>
                <Link href="/about-us/our-story" className="lg:px-4 py-2 text-sm">
                  About Us
                </Link>
              </NavigationMenuLink>

              <NavigationMenuLink asChild>
                <Link href="/resources" className="lg:px-4 py-2 text-sm">
                  Resources
                </Link>
              </NavigationMenuLink>

              <NavigationMenuLink asChild>
                <Link href="/contact" className="lg:px-4 py-2 text-sm">
                  Contact Us
                </Link>
              </NavigationMenuLink>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="mt-8 text-center text-sm">
          &copy; {new Date().getFullYear()} CloudMinds Consulting. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
