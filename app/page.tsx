import Intro from "@/components/Intro";
import Carousel from "@/components/Carousel";
import Education from "@/components/Education";
import Cta from "@/components/cta";
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
