import { Button } from "@/components/ui/button";

export default function HeroSectionImageWithReviews() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full min-h-screen bg-cover bg-center" style={{ backgroundImage: `url('/hero.png')` }}>
        {/* Content Section */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container">
            {/* Grid */}
            <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
              <div>
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-white">
                  Elevate Your Business with Expert Consulting
                </h1>
                <p className="mt-3 text-xl text-white">
                  Unlock your company&apos;s potential with tailored consulting solutions designed to drive success and innovation.
                </p>

                <div className="mt-7 grid gap-3 w-full sm:inline-flex">
                  <Button size={"lg"}>Get started</Button>
                  <Button variant={"outline"} size={"lg"}>
                    Contact sales team
                  </Button>
                </div>

                <div className="mt-6 lg:mt-10 grid grid-cols-2 gap-x-5">
                  <div className="py-5">
                    <div className="flex space-x-1">
                      {star}
                      {star}
                      {star}
                      {star}
                      {star}
                    </div>
                    <p className="mt-3 text-sm text-white">
                      <span className="font-bold">4.6</span> /5 - from 12k reviews
                    </p>
                  </div>
                  <div className="py-5">
                    <div className="flex space-x-1">
                      {star}
                      {star}
                      {star}
                      {star}
                      {starHalf}
                    </div>
                    <p className="mt-3 text-sm text-white">
                      <span className="font-bold">4.8</span> /5 - from 5k reviews
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img
                  src="/"
                  width={550}
                  height={550}
                  alt=""
                  className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
                />
                <div className="absolute -bottom-6 -right-6 rounded-xl bg-primary px-4 py-2 text-primary-foreground shadow-lg">
                  <h3 className="text-lg font-semibold">Trusted by 500+</h3>
                  <p className="text-sm">Businesses worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const star = (
  <svg
    className="h-4 w-4"
    width={51}
    height={51}
    viewBox="0 0 51 51"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
      fill="currentColor"
    />
  </svg>
);

const starHalf = (
  <svg
    className="h-4 w-4"
    width={51}
    height={51}
    viewBox="0 0 51 51"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
      fill="transparent"
      stroke="currentColor"
    />
  </svg>
);
