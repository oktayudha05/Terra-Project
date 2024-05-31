import Link from 'next/link';

export default function Navbar() {
    return (
        <nav>
            <div className='fixed flex items-center justify-center py-1 top-0 left-0 right-0 z-50 cursor-pointer'>
                <div className="flex space-x-3 backdrop-blur-sm overflow-hidden shadow-lg bg-black/35 rounded-2xl py-1 px-3">
                    <Link href="/" className='focus:font-extrabold font-normal py-1 text-emerald-100'>Home</Link>
                    <Link href="/about" className='focus:font-extrabold font-normal py-1 text-emerald-100'>About</Link>
                </div>
            </div>
            <div className='flex justify-end py-1 px-2 cursor-pointer'>
                <div className='fixed flex backdrop-blur-sm w-10 overflow-hidden shadow-lg bg-black/35 rounded-full py-1 z-50'>
                    <Link href="/login" className='focus:font-extrabold font-normal mx-auto py-1 text-emerald-100'>o</Link>
                </div>
            </div>
        </nav>
    );
}
