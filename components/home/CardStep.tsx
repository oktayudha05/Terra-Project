"use client"
import { useRouter } from "next/navigation"
import dataStep from "@/lib/dataStep";

export default function CardStep () {
  const router = useRouter();
  const data = dataStep();

  return(
    <>
      {Object.keys(data).map((key) => (
        <div onClick={() => router.push(`/detail/${key}`)} key={key} className="cursor-pointer backdrop-blur-md overflow-hidden shadow-lg bg-white/20 p-6 rounded-lg transition-transform transform hover:scale-105">
          <h3 className="text-xl font-semibold mb-4">{data[key as keyof typeof data].title}</h3>
          <p>{data[key as keyof typeof data].description}</p>
        </div>
      ))}
    </>
  );
}
