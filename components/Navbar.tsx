import React from 'react';
import { FaCloudDownloadAlt, FaIndustry } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import Link from 'next/link';

export default function Navbar() {
  return (
    <Menubar className='flex'>
      <Link href={'/'} className='mx-3'>
        <FaCloudDownloadAlt className='text-4xl' />
      </Link>
      
      <MenubarMenu>
        <MenubarTrigger><GrTechnology className='mx-1' />Services</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <Link href={'/services/managed-it'}>Managed IT</Link>
          </MenubarItem>
          <MenubarItem>
            <Link href={'/services/cloud-computing'}>Cloud Computing</Link>
          </MenubarItem>
          <MenubarItem>
            <Link href={'/services/cybersecurity'}>Cybersecurity</Link>
          </MenubarItem>
          <MenubarItem>
            <Link href={'/services/databackup'}>Data & Backup Recovery</Link>
          </MenubarItem>
          <MenubarItem>
            <Link href={'/services/managed-network'}>Network Management</Link>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger><FaIndustry className='mx-1' />Industries</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Healthcare</MenubarItem>
          <MenubarItem>Finance</MenubarItem>
          <MenubarItem>Legal</MenubarItem>
          <MenubarItem>Education</MenubarItem>
          <MenubarItem>Manufacturing</MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Solutions</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Cloud Migration</MenubarItem>
          <MenubarItem>Business Continuity</MenubarItem>
          <MenubarItem>Remote Work</MenubarItem>
          <MenubarItem>VoIP Solutions</MenubarItem>
          <MenubarItem>IT Consulting</MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>About Us</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Our Story</MenubarItem>
          <MenubarItem>Leadership Team</MenubarItem>
          <MenubarItem>Careers</MenubarItem>
          <MenubarItem>Partners</MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Resources</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Blog</MenubarItem>
          <MenubarItem>Case Studies</MenubarItem>
          <MenubarItem>Webinars</MenubarItem>
          <MenubarItem>White Papers</MenubarItem>
          <MenubarItem>Events</MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger className="text-right">Contact Us</MenubarTrigger>
        <MenubarContent>
          {/* Assuming "Contact Us" menu items are different from "Solutions and more" */}
          <MenubarItem>Contact Form</MenubarItem>
          <MenubarItem>Support</MenubarItem>
          <MenubarItem>Sales Inquiry</MenubarItem>
          <MenubarItem>Location</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
