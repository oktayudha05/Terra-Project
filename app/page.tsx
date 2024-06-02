import Intro from "@/components/home/Intro";
import Carousel from "@/components/home/Carousel";
import Education from "@/components/home/Education";
import Cta from "@/components/home/cta";
import Loading from "@/app/loading";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div>
            <Suspense fallback={<Loading />}>
              <Intro />
            </Suspense>
          </div>
          <div className="max-w-lg drop-shadow-2xl">
            <Suspense fallback={<Loading />}>
              <Carousel />
            </Suspense>
          </div>
        </div>
      </div>
      <div className="min-h-screen">
        <Suspense fallback={<Loading />}>
          <Education />
          <Cta />
        </Suspense>
      </div>
    </>
  );
}
