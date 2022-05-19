import Link from "next/link"
import styles from "@/styles/Header.module.css"
import Image from "next/image"

export default function Header() {
  return (
    <header className={styles.header}>
        <div>
            <div>
                <ul>
                    <li>
                        <Link href="/">
                            <div >
                                <Image 
                                    src={"/images/global/header/logo.png"} width={80} height={60} border-style={"none"} vertical-align={"middle"}
                                />
                            </div>
                        </Link>
                    </li>
                    <li>
                        <ul>
                            <li>
                                <a href="/"> Personal </a>
                            </li>
                            <li>
                                <a href="/"> Business </a>
                            </li>
                            <li>
                                <a href="/"> Small Business </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link href="/">
                            <a>Your Location</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a>Support</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a>My Cart</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a>Search bar goes here</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  )
}
