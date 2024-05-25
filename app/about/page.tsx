import Image from 'next/image';
export default function About() {
    return (
        <div className="container">
            <h1 className="heading">about page</h1>
            <div className="carousel-item">
              <Image src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="Burger" width={500} height={700} layout="responsive" />
            </div> 
        </div>
    );
}