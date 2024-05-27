import CardStep from "./CardStep"

export default function Education() {
  return (
    <>
      <div className="relative py-16 bg-[url('/docs/images/image.jpg')]" >
        <div className="container text-white mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">How to Recycle</h2>
          <div className="grid px-4 md:grid-cols-3 gap-8">
            <CardStep />
          </div>
        </div>
      </div>

    </>
  )
}