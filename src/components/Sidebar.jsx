import Link from 'next/link';
import React from 'react'
import { FaTwitter } from "react-icons/fa6";
import { TiHome } from "react-icons/ti";

export default function Sidebar() {
  return (
    <div>
      <Link href='/'>
      <FaTwitter className='w-16 h-16 cursor-pointer p-3 hover: hover:bg-gray-100 rounded-full transition-all duration-200'/>
      </Link>
    </div>
  )
}
