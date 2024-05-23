import Intro from "@/components/Intro";
import Carousel from "@/components/Carousel";

export default function Home() {
  return (
    <>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <div>
            <Intro />
          </div>
          <div className="max-w-lg drop-shadow-2xl">
            <Carousel />
          </div>

          <div>
          </div>
        </div>
      </div>
    </>
  );
}
