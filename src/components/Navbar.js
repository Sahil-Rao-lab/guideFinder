import styles from '@/styles/Navbar.module.css'
import Head from 'next/head';
import Image from 'next/image'
import Link from 'next/link';

export default function Navbar(props) {

    return (
        <header className={props.staticNav && "static-nav"}>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            </Head>
            <Link href={"/"}>
                <p>GUIDEFINDER</p>
            </Link>
            <nav className={styles.navMain}>
                <ul className={styles.navLinks}>
                    <li>
                        <Link href={"/all-trips"}>ALL TRIPS</Link>
                    </li>
                    <li>
                        <Link href={"/all-trip-leaders"}>TRIP LEADERS</Link>
                    </li>
                    <li>
                        <Link href={"/How-it-works"}>HOW IT WORKS</Link>
                    </li>
                    <li>
                        <Link href={"/join"} className="fill-btn">Login / Register</Link>
                    </li>
                </ul>
            </nav>
        </header>

    )
}