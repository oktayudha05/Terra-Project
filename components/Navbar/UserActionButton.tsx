import Link from "next/link"
import Image from "next/image"
import { authUserSession } from "@/lib/auth-lib"

export default async function UserActionButton() {
  const user = await authUserSession()
  const actionLink = user? '/api/auth/signout' : '/api/auth/signin'
  const actionLabel = user? <Image alt="..." className="object-cover mx-auto rounded-full" src={user?.image ?? ''} width={480} height={480}/> : <p className='focus:font-extrabold font-normal mx-auto py-1 text-emerald-100'>O</p>
  
  return (
    <Link href={actionLink} className='fixed flex backdrop-blur-sm w-10 overflow-hidden shadow-lg bg-black/35 rounded-full py-1 z-50'>
      {actionLabel}
    </Link>
  )
}