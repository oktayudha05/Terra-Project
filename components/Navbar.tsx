import Link from 'next/link';

export default function Navbar() {
    return (
        <nav>
            <div className='flex item-center justify-center py-1'>
                <div className="flex-row-reverse space-x-1">
                    <Link href="/" className='hover:text-emerald-950 hover:bg-emerald-200 rounded px-2 py-1 text-emerald-100'>Home</Link>
                    <Link href="/about" className='hover:text-emerald-950  hover:bg-emerald-200 rounded px-2 py-1 text-emerald-100'>About</Link>
                </div>
            </div>
        </nav>
    );
}