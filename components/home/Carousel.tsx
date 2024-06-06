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
          <Image src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" alt="Burger" width={1920} height={1080} layout="responsive" />
        </div> 
        <div className="carousel-item">
          <Image src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" alt="Burger" width={1920} height={1080} layout="responsive" />
        </div> 
        <div className="carousel-item">
          <Image src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" alt="Burger" width={1920} height={1080} layout="responsive" />
        </div>
      </div>
    </div>
  );
}
