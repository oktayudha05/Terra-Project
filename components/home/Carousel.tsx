import Image from "next/image";

export default function Carousel() {
  return (
    <div className="carousel rounded relative w-full h-40 sm:h-96">
      <div className="carousel rounded">
        <div className="carousel-item">
          <Image src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="Burger" width={1080} height={2000} layout="responsive" />
        </div> 
        <div className="carousel-item">
          <Image src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" alt="Burger" width={1920} height={1080} layout="responsive" />
        </div> 
        <div className="carousel-item">
          <Image src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" alt="Burger" width={1920} height={1080} layout="responsive" />
        </div> 
        <div className="carousel-item">
          <Image src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" alt="Burger" width={1920} height={1080} layout="responsive" />
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
