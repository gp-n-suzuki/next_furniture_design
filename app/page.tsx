import { Item } from "@/types/Item";
import styles from "./page.module.css"
import Link from "next/link";
import Card from "./_components/Card/Card";

export default async function Home() {

  const limit = 8;
  const res = await fetch(`http://localhost:3000/api?limit=${limit}`, {cache: 'no-store'})
  const {items}:{items:Item[]} = await res.json();
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.grid_container}>
          {items.map((item, index) => (
            <Card item={item} key={index} />
          ))}
      </div>
      <div className={styles.more}>
        <Link href={"/products/1"}>View More</Link>
      </div>
    </div>
  );
}
