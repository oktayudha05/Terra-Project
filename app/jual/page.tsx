import PilihSampah from "@/components/jual/pilihSampah";
import Loading from "../loading";
import { Suspense } from "react";

export default function Jual() {
  return(
    <div className="min-h-screen wrap py-16 bg-[url('/docs/images/image.jpg')]">
        <Suspense fallback={<Loading />}><div className="" >
        <div className="container text-white mx-auto">
          <h2 className="text-3xl font-bold text-center">Pilih Jenis Sampah</h2>
          <p className="text-md text-center mb-8">Sampahmu akan di ambil oleh mitra kami</p>
          <div className="grid px-4 md:grid-cols-3 gap-8">
            <PilihSampah />
          </div>
        </div>
      </div>
        </Suspense>
      </div>
  )
}