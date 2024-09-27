import Image from "next/image";

export default async function CardUser() {
  const image = "/docs/images/profil/4k.jpg"
  const email = "faizal@gmail.com"
  const name = "Faizal Deshta N."

  return (
    <>
      <div className="w-full">
        <div className="max-w-4xl px-10 py-6 mx-4 mt-20 backdrop-blur-md overflow-hidden bg-black/30 rounded-lg shadow md:mx-auto border-1">
          <div className="flex items-start w-full m-auto sm:space-x-8 flex-row">
            
            <div className="flex m-0">
              <div className="items-center justify-center m-auto mr-4 sm:w-32 sm:h-32">
                <Image alt="profil"
                  src={image}
                  className="object-cover w-20 h-20 mx-auto rounded-full sm:w-32 sm:h-32" 
                  width={420} height={720}/>
              </div>
            </div>

            <div className="flex flex-col my-auto pt-0 mx-0">
              <div className="flex flex-col mx-auto">
                <h1 className="text-lg font-semibold text-white sm:text-xl">{name}</h1>
                <h2 className="flex pr-4 text-sm font-light text-white sm:text-lg">{email}</h2>
                <p className="text-sm text-gray-500 md:text-base">Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}