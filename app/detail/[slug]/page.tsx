"use client"
import dataStep from "@/lib/dataStep"
import Link from "next/link";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import Loading from "./loading";

export default function Page({params}: any){
  const data: { [key: string]: { id: number; title: string; description: string; detail: string } } = dataStep();
  if (data[params.slug]) {
    return (
      <>
        <div className="min-h-screen flex content-center justify-center wrap bg-[url('/docs/images/image.jpg')]">
          <div className="py-5 mx-4 my-auto text-white text-center">
            <div className="backdrop-blur-md container px-10 py-10 overflow-hidden shadow-lg bg-white/20 p-6 rounded-lg">
            <Suspense fallback={<Loading />}>
              <h1 className="text-xl font-semibold mb-4">{data[params.slug].title}</h1>
              <p className="text-justify">{data[params.slug].detail}</p>
            </Suspense>
            </div>
            <div className="flex space-x-24">
              {data[params.slug].id === 1 ? null : 
                <Link href={`/detail/step${data[params.slug].id-1}`} className="w-full mt-2 my-auto text-white text-center backdrop-blur-md overflow-hidden shadow-lg bg-white/10 hover:bg-white/20 cursor-pointer p-4 rounded-lg">
                  <h3 className="text-sm">sebelumnya</h3>
                </Link>
              }
              {data[params.slug].id === 6 ? null :
                <Link href={`/detail/step${data[params.slug].id+1}`} className="w-full mt-2 my-auto text-white text-center backdrop-blur-md overflow-hidden shadow-lg bg-white/10 hover:bg-white/20 cursor-pointer p-4 rounded-lg">
                  <h3 className="text-sm">selanjutnya</h3>
                </Link>
              }
            </div>
          </div>
        </div>
      </>
    )
  } else {
    redirect('/404');
  }
}
