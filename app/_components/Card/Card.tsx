import { Item } from '@/types/Item'
import Image from 'next/image'
import React from 'react'
import styles from './Card.module.css'
import Link from 'next/link'

const Card = ({ items }: { items: Item[] }) => {
    return (
        <>
            {items.map((item) => {
                return (
                    <div key={item.id} className={styles.card}>
                        <Link href={`/detail/${item.id}`}>
                            <Image src={item.url} alt={item.title} width={300} height={300} />
                            <p>{item.title}</p>
                            <p>¥{item.price} +tax</p>
                        </Link>
                    </div>
                )
            })}
        </>
    )
}

export default Card