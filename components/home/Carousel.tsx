import Image from "next/image";

export default function Carousel() {
  "use client"
  return (
    <div className="carousel rounded relative w-full h-40 sm:h-96">
      <div className="carousel rounded">
        <div className="carousel-item">
          <Image src="/docs/images/carousel/poto1.jpg" priority alt="Burger" width={480} height={720} layout="responsive" />
        </div> 
        <div className="carousel-item">
          <Image src="/docs/images/carousel/poto3.jpg" property="" alt="Burger" width={480} height={720} layout="responsive" />
        </div> 
        <div className="carousel-item">
          <Image src="/docs/images/carousel/poto2.jpg" priority alt="Burger" width={480} height={720} layout="responsive" />
        </div> 
        <div className="carousel-item">
          <Image src="/docs/images/carousel/poto4.jpg" priority alt="Burger" width={480} height={720} layout="responsive" />
        </div> 
        <div className="carousel-item">
          <Image src="/docs/images/carousel/poto5.jpg" priority alt="Burger" width={480} height={720} layout="responsive" />
        </div> 
        <div className="carousel-item">
          <Image src="/docs/images/carousel/poto6.jpg" priority alt="Burger" width={480} height={720} layout="responsive" />
        </div> 
        <div className="carousel-item">
          <Image src="/docs/images/carousel/poto7.jpg" priority alt="Burger" width={480} height={720} layout="responsive" />
        </div>
      </div>
    </div>
  );
}
