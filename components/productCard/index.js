import Link from 'next/link'
import styles from './productCard.module.css'
import { MdBookmarkBorder } from 'react-icons/md'
import moment from 'moment'

export default function ProductCard({ item, type }) {
  return (
    <Link href='/product/hgasdufatdf'>
      <a className={`${styles.card} ${type || type}`}>
        <div className={styles.img}>
          <div className={styles.heart}>
            <MdBookmarkBorder />
          </div>
        </div>
        <div className={styles.content}>
          <p className={styles.name}>Table Hai Sala</p>
          <p className={styles.price}>₹ 2000</p>
          {/* <p className={styles.description}>
            {'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nihil magnam repellat hic! Voluptate ab assumenda nam similique et sunt reprehenderit unde, cum perspiciatis nisi rem, minus quod! Repudiandae, cum.'.slice(
              0,
              60
            ) + '...'}
          </p> */}
          <div className={styles.bottomContent}>
            <p className={styles.category}>Like a New</p>
            <p className={styles.date}>
              {moment(1657813892056).format('MMM DD')}
            </p>
          </div>
        </div>
      </a>
    </Link>
  )
}
