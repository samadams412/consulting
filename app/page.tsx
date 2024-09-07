import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
<<<<<<< Updated upstream
import Image from "next/image";
=======
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Label } from '@radix-ui/react-label';
import { LineChart, Line, XAxis, YAxis } from 'recharts';
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { JSX, SVGProps } from "react";

>>>>>>> Stashed changes

export default function Home() {
  return (
    <div>

      <Navbar />
      <Hero/>
    </div>
  );
}
