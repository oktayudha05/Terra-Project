import Intro from "@/components/Intro";
import Carousel from "@/components/Carousel";
import Education from "@/components/Education";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div>
            <Intro />
          </div>
          <div className="max-w-lg drop-shadow-2xl">
            <Carousel />
          </div>
        </div>
      </div>
      <div className="min-h-screen">
        <Education />
        <Cta />
      </div>
    </>
  );
}
