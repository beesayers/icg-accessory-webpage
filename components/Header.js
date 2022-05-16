import Link from "next/link"
import styles from "@/styles/Header.module.css"

export default function Header() {
  return (
    <header className={styles.header}>
        <div className={styles.logo}>
            <Link href="/">
                <a>ICG</a>
            </Link>
        </div>
        <nav>
            <ul>
                <li>
                    <Link href="/accessories">
                        <a>Accessory</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </li>
                <li>
                    <Link href="/accessories">
                        <a>Accessory</a>
                    </Link>
                </li>
                <li>
                    <Link href="/accessories">
                        <a>Accessory</a>
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}
