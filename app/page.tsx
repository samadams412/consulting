import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { JSX, SVGProps } from "react";


export default function Home() {


  
  return (
    <div className="">

      <Navbar />
      <main className="flex-1 ">
        <section className="relative h-[80dvh] w-full overflow-hidden">
          <Hero/>
        </section>
        <section className="py-12 md:py-24 bg-muted">
          <div className="container grid gap-10 px-4 sm:px-6 md:grid-cols-2 md:px-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Services</h2>
              <p className="mt-4 text-muted-foreground md:text-xl">
                From IT strategy to implementation, we offer a comprehensive suite of services to help your business
                thrive.
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <CheckIcon className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <h3 className="text-lg font-semibold">IT Strategy</h3>
                    <p className="text-muted-foreground">
                      We&apos;ll help you develop a strategic IT roadmap to align with your business goals.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <h3 className="text-lg font-semibold">Cloud Migration</h3>
                    <p className="text-muted-foreground">
                      Seamlessly migrate your infrastructure to the cloud for increased scalability and cost-efficiency.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <h3 className="text-lg font-semibold">Cybersecurity</h3>
                    <p className="text-muted-foreground">
                      Protect your business from cyber threats with our comprehensive security solutions.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg"
                width={550}
                height={550}
                alt="Services"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
              />
              <div className="absolute -bottom-6 -right-6 rounded-xl bg-primary px-4 py-2 text-primary-foreground shadow-lg">
                <h3 className="text-lg font-semibold">Trusted by 500+</h3>
                <p className="text-sm">Businesses worldwide</p>
              </div>
            </div>
          </div>
        </section>
        <section className=" py-12 md:py-24">
          <div className="container grid gap-10 px-4 sm:px-6 md:grid-cols-2 md:px-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What Our Clients Say</h2>
              <p className="mt-4 md:text-xl text-muted-foreground ">
                Hear from our satisfied clients and learn how we&apos;ve helped them achieve their goals.
              </p>
            </div>
            <div className="grid gap-6">
              <Card>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-lg font-semibold">John Doe</h4>
                      <p className="text-muted-foreground">CEO, Acme Inc.</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "The IT Consulting team has been instrumental in transforming our IT infrastructure. Their
                    expertise and dedication have been invaluable to our business."
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      
                      <AvatarFallback>JA</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-lg font-semibold">Jane Appleseed</h4>
                      <p className="text-muted-foreground">CTO, Globex Corp.</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "The IT Consulting team has been a true partner in helping us navigate the complex world of
                    technology. Their guidance has been invaluable."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24 bg-muted">
          <div className="container grid gap-10 px-4 sm:px-6 md:grid-cols-2 md:px-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get in Touch</h2>
              <p className="mt-4 text-muted-foreground md:text-xl">
                Have a project in mind or need help with your IT infrastructure? Fill out the form below, and one of our
                experts will be in touch.
              </p>
              <form className="mt-6 space-y-4">
                <Input type="text" placeholder="Name" className="w-full" />
                <Input type="email" placeholder="Email" className="w-full" />
                <Textarea placeholder="Message" className="w-full" />
                <Button type="submit" className="w-full">
                  Submit
                </Button>
              </form>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg"
                width={550}
                height={550}
                alt="Contact"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
              />
              <div className="absolute -bottom-6 -left-6 rounded-xl bg-primary px-4 py-2 text-primary-foreground shadow-lg">
                <h3 className="text-lg font-semibold">Get a Free Consultation</h3>
                <p className="text-sm">Schedule a call with our experts</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
}

function CheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}