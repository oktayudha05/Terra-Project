import Link from 'next/link';
import UserActionButton from './UserActionButton';
import {authUserSession} from '@/lib/auth-lib';

export default async function Navbar() {
    const user = await authUserSession();
    return (
        <nav>
            <div className='fixed flex items-center justify-center py-1 top-0 left-0 right-0 z-50 cursor-pointer'>
                <div className="flex space-x-3 backdrop-blur-sm overflow-hidden shadow-lg bg-black/35 rounded-2xl py-1 px-3">
                    <Link href="/" className='focus:font-extrabold font-normal py-1 text-emerald-100'>Home</Link>
                    <Link href="/tugas" className='focus:font-extrabold font-normal py-1 text-emerald-100'>Tugas</Link>
                    {
                        user ? <Link href="/dashboard" className='focus:font-extrabold font-normal py-1 text-emerald-100'>Dashboard</Link> : null
                    }
                </div>
            </div>
            <div className='flex justify-end py-1 px-2 cursor-pointer'>
                <UserActionButton />
            </div>
        </nav>
    );
}
