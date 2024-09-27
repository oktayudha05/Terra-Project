import Link from "next/link"
import Image from "next/image"

export default async function UserActionButton() {
return (
    <Link href="/login" className='fixed flex backdrop-blur-sm w-10 overflow-hidden shadow-lg bg-black/35 text-center justify-center items-center rounded-full py-1 z-50'>
      <h1 className="text-center">O</h1>
    </Link>
  )
}