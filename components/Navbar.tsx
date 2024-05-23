import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className='fixed flex items-center justify-center py-1 top-0 left-0 right-0 z-50'>
            <div className="flex space-x-3 backdrop-blur-sm overflow-hidden shadow-lg bg-black/35 rounded-2xl py-1 px-3">
                <Link href="/" className='focus:font-extrabold font-normal py-1 text-emerald-100'>Home</Link>
                <Link href="/about" className='focus:font-extrabold font-normal py-1 text-emerald-100'>About</Link>
            </div>
        </nav>
    );
}
