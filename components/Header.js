import Link from "next/link"
import styles from "@/styles/Header.module.css"
import Image from "next/image"

export default function Header() {
  return (
    <div className="relative bg-white">
        <div className="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
            <div>
                <a href="/" className="flex">
                    <img
                    className="h-8 w-auto sm:h-10"
                    src="/images/global/header/logo.png"
                    alt=""
                    />
                </a>
            </div>
            <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
                <nav className="flex space-x-10">
                    <a href="#" className="text-base font-medium text-rose-800 hover:text-gray-500">
                    Personal
                    </a>
                    <a href="#" className="text-base font-medium text-gray-800 hover:text-gray-500">
                    Business
                    </a>
                    <a href="#" className="text-base font-medium text-gray-800 hover:text-gray-500">
                    Small Business
                    </a>
                </nav>
            </div>

            <div className="flex items-center md:ml-12">
                <nav className="flex space-x-10">
                    <a href="#" className="text-base font-medium text-gray-800 hover:text-gray-500">
                    Location
                    </a>
                    <a href="#" className="text-base font-medium text-gray-800 hover:text-gray-500">
                    Support
                    </a>
                    <a href="#" className="text-base font-medium text-gray-800 hover:text-gray-500">
                    My Cart
                    </a>
                </nav>
            </div>
        </div>
    </div>
    )
}
