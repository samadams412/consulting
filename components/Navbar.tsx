import React from 'react'
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FaImages } from "react-icons/fa";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"
import Image from 'next/image'
import logo from '@/app/assets/GitHub-Mark.png'
import Link from 'next/link';
import { GrTechnology } from "react-icons/gr";
import { FaIndustry } from "react-icons/fa6";

import { PersonIcon, ReaderIcon } from '@radix-ui/react-icons';
    //array containing links, could add more links here
//     const links = [{
//       href: "/dashboard",
//       text:"Dashboard",
//       Icon: ReaderIcon
//   },
//   {
//       href: "/dashboard/user",
//       text:"User",
//       Icon: PersonIcon
//   }
// ]

export default function Navbar() {
  return (
    <Menubar className='flex'>
      <Link href={'/'}>
      <FaCloudDownloadAlt className='text-4xl'/>
      </Link>
    <MenubarMenu>
      <MenubarTrigger><GrTechnology className='mx-1'/>Services</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>
          <Link href={'/services/managed-it'}>
          Managed IT
          </Link>
        </MenubarItem>
        <MenubarItem>
        <Link href={'/services/cloud-computing'}>
          Cloud Computing
          </Link>
        </MenubarItem>
        <MenubarItem>
        <Link href={'/services/cybersecurity'}>
          Cybersecurity
          </Link>
        </MenubarItem>
        <MenubarItem>
        <Link href={'/services/databackup'}>
          Data & Backup Recovery
          </Link>
        </MenubarItem>
        <MenubarItem>
        <Link href={'/services/managed-network'}>
          Network Management
          </Link>
        </MenubarItem>
      </MenubarContent>
    </MenubarMenu>
    <MenubarMenu>
      <MenubarTrigger><FaIndustry className='mx-1'/>Industries</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>
          Healthcare
        </MenubarItem>
        <MenubarItem>Finance</MenubarItem>
        <MenubarItem>Legal</MenubarItem>
        <MenubarItem>Education</MenubarItem>
        <MenubarItem>Manufacturing</MenubarItem>
      </MenubarContent>
    </MenubarMenu>
    <MenubarMenu>
      <MenubarTrigger>Solutions</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>
          Cloud Migration
        </MenubarItem>
        <MenubarItem>Buisness Continuity</MenubarItem>
        <MenubarItem>Remote Work</MenubarItem>
        <MenubarItem>VoIP Solutions</MenubarItem>
        <MenubarItem>IT Consulting</MenubarItem>
      </MenubarContent>
    </MenubarMenu>
    <MenubarMenu>
      <MenubarTrigger>About Us</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>
          Our Story
        </MenubarItem>
        <MenubarItem>Leadership Team</MenubarItem>
        <MenubarItem>Careers</MenubarItem>
        <MenubarItem>Partners</MenubarItem>
      </MenubarContent>
      <MenubarMenu>
      <MenubarTrigger>Resources</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>
          Blog
        </MenubarItem>
        <MenubarItem>Case Studies</MenubarItem>
        <MenubarItem>Webinars</MenubarItem>
        <MenubarItem>White Papers</MenubarItem>
        <MenubarItem>Events</MenubarItem>
      </MenubarContent>
    </MenubarMenu>
    <MenubarMenu>
      <MenubarTrigger className="text-right">Contact Us</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>
          Cloud Migration
        </MenubarItem>
        <MenubarItem>Buisness Continuity</MenubarItem>
        <MenubarItem>Remote Work</MenubarItem>
        <MenubarItem>VoIP Solutions</MenubarItem>
        <MenubarItem>IT Consulting</MenubarItem>
      </MenubarContent>
    </MenubarMenu>
    </MenubarMenu>
    
  </Menubar>
  
  )
}
