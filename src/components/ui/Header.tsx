import Link from 'next/link'
import React from 'react'
//Dans UI mettre les petit components ex button logo etc

export default function Header() {
  return (
    <header className='flex justify-between items-center p-4 bg-gray-800 text-white'>
        <h1>Mon super site</h1>
        <nav>
            <ul className='flex space-x-4'>
                <li>
                    <Link href={"/"}>Lien1</Link>
                </li>
                <li>
                    <Link href={"/contact"}>Contact</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}
