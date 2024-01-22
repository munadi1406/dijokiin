'use client'

import Link from "next/link"
import Applogo from "./Applogo"
import { usePathname } from "next/navigation"

const Navbar = () => {
const pathName =usePathname()
    return (
        <nav className="w-full px-20 flex justify-between items-center flex-wrap py-2">
            <Applogo />
            <div className="flex flex-wrap gap-5 ">
            <Link href={'/'} className={`${pathName === '/' ? 'underline' : ''} text-blue-600 font-semibold`}>Home</Link>
            <Link href={'/store'} className={`${pathName === '/store' ? 'underline' : ''} text-blue-600 font-semibold`}>Store</Link>
            </div>
        </nav>
    )
}

export default Navbar