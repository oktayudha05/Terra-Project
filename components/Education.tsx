"use client"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function Education() {
  const router = useRouter()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleClick = (card: any) => {
    router.push({
      pathname: '/detailstep',
      query: { card: card }
    })
  }

  return (
    <>
      <div className="relative py-16 bg-[url('/docs/images/image.jpg')]" >
        <div className="container text-white mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">How to Recycle</h2>
          <div className="grid px-4 md:grid-cols-3 gap-8">

            <div onClick={() => handleClick('step1')} className="cursor-pointer backdrop-blur-md overflow-hidden shadow-lg bg-white/20 p-6 rounded-lg transition-transform transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-4">Step 1: Sorting</h3>
              <p>Learn how to properly sort your recyclables to ensure that they are processed correctly.</p>
            </div>

            <div className="cursor-pointer backdrop-blur-md overflow-hidden shadow-lg bg-white/20 p-6 rounded-lg transition-transform transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-4">Step 2: Cleaning</h3>
              <p>Understand the importance of cleaning your recyclables to prevent contamination.</p>
            </div>

            <div className="cursor-pointer backdrop-blur-md overflow-hidden shadow-lg bg-white/20 p-6 rounded-lg transition-transform transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-4">Step 3: Disposing</h3>
              <p>Know where to take your sorted and cleaned recyclables for proper disposal.</p>
            </div>
            <div className="cursor-pointer backdrop-blur-md overflow-hidden shadow-lg bg-white/20 p-6 rounded-lg transition-transform transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-4">Step 4: Apakek</h3>
              <p>Know where to take your sorted and cleaned recyclables for proper disposal.</p>
            </div>
            <div className="cursor-pointer backdrop-blur-md overflow-hidden shadow-lg bg-white/20 p-6 rounded-lg transition-transform transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-4">Step 5: Apalah</h3>
              <p>Know where to take your sorted and cleaned recyclables for proper disposal.</p>
            </div>
            <div className="cursor-pointer backdrop-blur-md overflow-hidden shadow-lg bg-white/20 p-6 rounded-lg transition-transform transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-4">Step 6: Itulah</h3>
              <p>Know where to take your sorted and cleaned recyclables for proper disposal.</p>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}