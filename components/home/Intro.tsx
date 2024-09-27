import Link from "next/link"

export default function Intro() {
  return (
    <section className="text-white">
      <div className="px-4 pt-0 md:py-40">
        <div className="mx-auto max-w-3xl text-center sm:text-start">
          <h1
            className="bg-white bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
          >
            Terra Project:

            <span className="sm:hidden text-xl block pb-1"> Ayo Selamatkan Planet! </span>
            <span className="hidden sm:block sm:text-3xl pt-1">  Jadilah bagian dari perubahan. </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            Pelajari cara untuk mendaur ulang sampah. Bantu kami menciptakan dunia yang lebih hijau dan bersih untuk generasi mendatang.
          </p>

          <div className="mt-4 mb-4 sm:mb-0 sm:mt-8 flex flex-wrap justify-center sm:justify-start gap-4">
            <a
              className="block w-auto rounded-lg border ease-in transition-transform transform hover:scale-105 duration-200 border-indigo-600 bg-indigo-600 px-5 sm:px-12 py-3 text-sm font-medium text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              href="/jual"
            >Kirim Sampah!
            </a>
            <Link href="/olah"
              className="block w-auto rounded-lg border ease-in transition-transform transform hover:scale-105 duration-200 border-indigo-600 px-5 sm:px-12 py-3 text-sm font-medium text-white focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
            >Olah Sampah!
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}