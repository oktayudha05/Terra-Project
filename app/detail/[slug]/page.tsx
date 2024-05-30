import dataStep from "@/lib/dataStep"

export default function Page({params}: any){
  const data: { [key: string]: { title: string; description: string } } = dataStep();
  if (data[params.slug]) {
    return (
      <div className="min-h-screen">
        <div className="py-5 mx-4 mt-16 text-white text-center backdrop-blur-md overflow-hidden shadow-lg bg-white/20 p-6 rounded-lg">
          <h1 className="text-xl font-semibold mb-4">{data[params.slug].title}</h1>
          <p>{data[params.slug].description}</p>
        </div>
      </div>
    )
  }
}
