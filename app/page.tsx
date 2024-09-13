import Hero from "@/components/Hero";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";
import { JSX, SVGProps } from "react";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="">
      <section className="p-12 relative   ">
        <Hero />
      </section>
      <section className="p-12 bg-muted">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
          Our Services
        </h2>
        <p className="mt-4 text-muted-foreground md:text-xl">
          From IT strategy to implementation, we offer a comprehensive suite of
          services to help your business thrive.
        </p>
        <div className="container grid gap-10 px-4 sm:px-6 md:grid-cols-2 md:px-8">
          <div>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start">
                <CheckIcon className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <h3 className="text-lg font-semibold">IT Strategy</h3>
                  <p className="text-muted-foreground">
                    We&apos;ll help you develop a strategic IT roadmap to align
                    with your business goals.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckIcon className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <h3 className="text-lg font-semibold">Cloud Migration</h3>
                  <p className="text-muted-foreground">
                    Seamlessly migrate your infrastructure to the cloud for
                    increased scalability and cost-efficiency.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckIcon className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <h3 className="text-lg font-semibold">Cybersecurity</h3>
                  <p className="text-muted-foreground">
                    Protect your business from cyber threats with our
                    comprehensive security solutions.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="relative">
            <ul className="mt-6 space-y-4">
              <li className="flex items-start">
                <CheckIcon className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <h3 className="text-lg font-semibold">
                    Network Optimization
                  </h3>
                  <p className="text-muted-foreground">
                    Ensure optimal network performance and uptime with our
                    tailored network solutions.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckIcon className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <h3 className="text-lg font-semibold">Disaster Recovery</h3>
                  <p className="text-muted-foreground">
                    Implement robust disaster recovery plans to safeguard your
                    critical business data.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckIcon className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <h3 className="text-lg font-semibold">
                    IT Support & Maintenance
                  </h3>
                  <p className="text-muted-foreground">
                    Rely on our expert team for 24/7 IT support and maintenance
                    to minimize downtime.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className=" p-12">
        <div className="container grid gap-10 px-4 sm:px-6 md:grid-cols-2 md:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              What Our Clients Say
            </h2>
            <p className="mt-4 md:text-xl text-muted-foreground ">
              Hear from our satisfied clients and learn how we&apos;ve helped
              them achieve their goals.
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
                  &quot;The IT Consulting team has been instrumental in
                  transforming our IT infrastructure. Their expertise and
                  dedication have been invaluable to our business.&quot;
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
                  &quot;The IT Consulting team has been a true partner in
                  helping us navigate the complex world of technology. Their
                  guidance has been invaluable.&quot;
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="p-12 bg-muted ">
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
          <div className="relative">
             <Image
              src="/contact.jpg"
              width={550}
              height={550}
              alt="Contact"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
            />
            <div className="absolute -top-6 -right-6 rounded-xl bg-primary px-4 py-2 text-primary-foreground shadow-lg">
              <h3 className="text-lg font-semibold">Get a Free Consultation</h3>
              <p className="text-sm">Schedule a call with our experts</p>
            </div>
          </div>
          <div>
            <ContactForm/>
          </div>
        </div>
      </section>
    </main>
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
  );
}
