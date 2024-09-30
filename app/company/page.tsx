import React from 'react'
import styles from './company.module.css'

const page = () => {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.heading}>Company</h2>
            <div className={styles.container}>
                <dl className={styles.information}>
                    <dt className={styles.title}>社名</dt>
                    <dd className={styles.detail}>株式会社ファニチャーデザイン</dd>
                    <dt className={styles.title}>住所</dt>
                    <dd className={styles.detail}>〒107-0062 東京都港区南青山１丁目××××××</dd>
                    <dt className={styles.title}>設立</dt>
                    <dd className={styles.detail}>XXXX年XX月</dd>
                    <dt className={styles.title}>資本金</dt>
                    <dd className={styles.detail}>XXXX万円</dd>
                    <dt className={styles.title}>従業員数</dt>
                    <dd className={styles.detail}>XX名</dd>
                    <dt className={styles.title}>事業内容</dt>
                    <dd className={styles.detail}>
                        家具、インテリアの企画・生産<br />
                        家具、インテリアの販売<br />
                        店舗の企画・デザイン・設計
                    </dd>
                </dl>
                <div className={styles.map}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.2914382280856!2d139.72342666557796!3d35.669825288204194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c820ac932eb%3A0xc68079dd10afd971!2z44CSMTA3LTAwNjIg5p2x5Lqs6YO95riv5Yy65Y2X6Z2S5bGx77yR5LiB55uu!5e0!3m2!1sja!2sjp!4v1611987713735!5m2!1sja!2sjp"></iframe>
                </div>
            </div>
        </div>
    )
}

export default page