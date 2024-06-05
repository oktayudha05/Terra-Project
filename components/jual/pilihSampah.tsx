"use client"
import { useRouter } from "next/navigation"
import dataSampah from "@/lib/jenisSampah";

export default function PilihSampah () {
  const router = useRouter();
  const data = dataSampah();

  return(
    <>
      {Object.keys(data).map((key) => (
        <div onClick={() => router.push(`jual/sampah/${key}`)} key={key} className="cursor-pointer backdrop-blur-md overflow-hidden shadow-lg bg-white/20 p-6 rounded-lg transition-transform transform hover:scale-105">
          <h3 className="text-xl font-semibold mb-4">{data[key as keyof typeof data].title}</h3>
          <p className={`${data[key as keyof typeof data].color}`}>Saldo : {data[key as keyof typeof data].saldo} / kg</p>
        </div>
      ))}
    </>
  );
}
