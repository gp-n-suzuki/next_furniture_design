"use client"
import React, { useState } from 'react'
import styles from "./Header.module.css"
import Link from 'next/link';
import Image from 'next/image';
import Logo from "@/public/images/logo.svg";

const Header = () => {
    const [isShow, setIsShow] = useState(false);

    return (
        <header className={styles.header}>
            <Link href={"/"} className={styles.logo}>
                <Image src={Logo} alt="logo" priority />
            </Link>

            <nav className={`${styles.nav} ${isShow ? styles.active : ""}`}>
                <ul className={styles.menu}>
                    <li><Link href="/products/1">PRODUCTS</Link></li>
                    <li><Link href="/about">ABOUT</Link></li>
                    <li><Link href="/company">COMPANY</Link></li>
                    <li><Link href="mailto:xxxxx@xxx.xxx?subject=お問い合わせ">CONTACT</Link></li>
                </ul>
            </nav>

            <div className={`${styles.toggle_btn} ${isShow ? styles.active : ""}`} onClick={() => setIsShow(!isShow)}>
                <span></span>
                <span></span>
            </div>

            <div className={`${styles.background} ${isShow ? styles.active : ""}`} onClick={() => setIsShow(!isShow)}></div>
        </header>
    )
}

export default Header