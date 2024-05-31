export default function Intro() {
  return (
    <section className="text-white">
      <div className="px-4 pt-0 md:py-40">
        <div className="mx-auto max-w-3xl text-center sm:text-start">
          <h1
            className="bg-white bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
          >
            Terra Project:

            <span className="sm:hidden block pb-1"> Learn to Recycle. </span>
            <span className="hidden sm:block sm:text-4xl pt-1">  Learn to Recycle, Save the Planet. </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
          Be part of the change. Educate yourself on recycling practices and help us create a greener, cleaner world for future generations.
          </p>

          <div className="mt-4 mb-4 sm:mb-0 sm:mt-8 flex flex-wrap justify-center sm:justify-start gap-4">
            <a
              className="block w-auto rounded-lg border ease-in transition-transform transform hover:scale-105 duration-200 border-indigo-600 bg-indigo-600 px-6 sm:px-12 py-3 text-sm font-medium text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              href="#"
            >
              Get Started
            </a>
            <a
              className="block w-auto rounded-lg border ease-in transition-transform transform hover:scale-105 duration-200 border-indigo-600 px-6 sm:px-12 py-3 text-sm font-medium text-white focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}