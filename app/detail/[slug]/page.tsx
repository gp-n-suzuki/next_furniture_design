import React from 'react'
import styles from './detail.module.css'
import { Item } from '@/types/Item';
import Image from 'next/image';
import Link from 'next/link';

const page = async ({ params }: { params: { slug: string } }) => {

  const res = await fetch(`http://localhost:3000/api/detail/${params.slug}`, { cache: 'no-store' })
  const item: Item = await res.json();

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>{item.title}</h2>
      <div className={styles.flex_container}>
        <Image src={item.url} alt={item.title} width={400} height={400} className={styles.image} />
        <div className={styles.explanation}>
          {item.texts.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
          <p>¥{item.price} +tax</p>
          <dl className={styles.specs}>
            <dt className={styles.title}>SIZE:</dt>
            <dd className={styles.detail}>W{item.size.width} × D{item.size.depth} × H{item.size.height}</dd>
            <dt className={styles.title}>COLOR:</dt>
            <dd className={styles.detail}>{item.color}</dd>
            <dt className={styles.title}>MATERIAL:</dt>
            <dd className={styles.detail}>{item.material}</dd>
          </dl>
        </div>
      </div>
      <div className={styles.more}>
        <Link href={"/products/1"}>Back To Products</Link>
      </div>
    </div>
  )
}

export default page