import React from 'react'
import styles from "../../page.module.css";
import { Item } from '@/types/Item';
import Card from '@/app/_components/Card/Card';
import Paginator from '@/app/_components/Paginator/Paginator';

const page = async ({ params }: { params: { slug: string } }) => {

    const limit = 12;
    const res = await fetch(`http://localhost:3000/api?page=${params.slug}&limit=${limit}`, { cache: 'no-store' })
    const { items, totalPages }: { items: Item[], totalPages: number } = await res.json();

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.heading}>Products</h2>
            <div className={styles.grid_container}>
                <Card items={items} />
            </div>
            <Paginator totalPages={totalPages} />
        </div>
    )
}

export default page