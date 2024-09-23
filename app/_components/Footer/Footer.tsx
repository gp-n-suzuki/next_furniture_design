import Link from 'next/link'
import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <ul className={styles.menu}>
                <li><Link href={"https://www.instagram.com/"} target="_blank">INSTAGRAM</Link></li>
                <li><Link href={"https://x.com/"} target="_blank">X(TWITTER)</Link></li>
                <li><Link href={"https://www.facebook.com/"} target="_blank">FACEBOOK</Link></li>
            </ul>
            <p className={styles.copyright}>© Furniture Design</p>
        </footer>
    )
}

export default Footer