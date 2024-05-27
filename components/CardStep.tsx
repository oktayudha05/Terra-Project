"use client"
import { useRouter } from "next/navigation"

export default function CardStep () {
  const router = useRouter();
  return(
    <>
      <div onClick={() => router.push('/step1')} className="cursor-pointer backdrop-blur-md overflow-hidden shadow-lg bg-white/20 p-6 rounded-lg transition-transform transform hover:scale-105">
        <h3 className="text-xl font-semibold mb-4">Step 1: Sorting</h3>
        <p>Learn how to properly sort your recyclables to ensure that they are processed correctly.</p>
      </div>  

      <div onClick={() => router.push('/step2')} className="cursor-pointer backdrop-blur-md overflow-hidden shadow-lg bg-white/20 p-6 rounded-lg transition-transform transform hover:scale-105">
        <h3 className="text-xl font-semibold mb-4">Step 2: Cleaning</h3>
        <p>Understand the importance of cleaning your recyclables to prevent contamination.</p>
      </div>

      <div onClick={() => router.push('/step3')} className="cursor-pointer backdrop-blur-md overflow-hidden shadow-lg bg-white/20 p-6 rounded-lg transition-transform transform hover:scale-105">
        <h3 className="text-xl font-semibold mb-4">Step 3: Disposing</h3>
        <p>Know where to take your sorted and cleaned recyclables for proper disposal.</p>
      </div>
      <div onClick={() => router.push('/step4')} className="cursor-pointer backdrop-blur-md overflow-hidden shadow-lg bg-white/20 p-6 rounded-lg transition-transform transform hover:scale-105">
        <h3 className="text-xl font-semibold mb-4">Step 4: Apakek</h3>
        <p>Know where to take your sorted and cleaned recyclables for proper disposal.</p>
      </div>
      <div onClick={() => router.push('/step5')} className="cursor-pointer backdrop-blur-md overflow-hidden shadow-lg bg-white/20 p-6 rounded-lg transition-transform transform hover:scale-105">
        <h3 className="text-xl font-semibold mb-4">Step 5: Apalah</h3>
        <p>Know where to take your sorted and cleaned recyclables for proper disposal.</p>
      </div>
      <div onClick={() => router.push('/step6')} className="cursor-pointer backdrop-blur-md overflow-hidden shadow-lg bg-white/20 p-6 rounded-lg transition-transform transform hover:scale-105">
        <h3 className="text-xl font-semibold mb-4">Step 6: Itulah</h3>
        <p>Know where to take your sorted and cleaned recyclables for proper disposal.</p>
      </div>
    </>
  )
}