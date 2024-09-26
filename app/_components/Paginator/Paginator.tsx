import React from 'react'
import styles from './Paginator.module.css'
import Link from 'next/link';

const Paginator = ({ totalPages }: { totalPages: number }) => {

    let pageNumbers: number[] = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers = [...pageNumbers, i]
    }

    return (
        <div className={styles.container}>
            {pageNumbers.map((number) => (
                <Link href={`/products/${number}`} className={styles.link} key={number}>
                    <p>{number}</p>
                </Link>
            ))}
        </div>
    )
}

export default Paginator