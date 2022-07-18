import { useRouter } from 'next/router'
import styles from '../../styles/Product.module.css'
import moment from 'moment'
import Link from 'next/link'
import ProductCard from '../../components/productCard'
import HorizontalList from '../../components/horizontalList'

export default function ProductPage() {
  const router = useRouter()
  return (
    <>
      <div className={styles.mainWrapper}>
        <div className='wrapper'>
          <div className={styles.photoWrapper}></div>
          <div className={styles.content}>
            <p className={styles.name}>Table Hai Sala</p>
            <div className={styles.priceWrapper}>
              <p className={styles.price}>$ 3000</p>
              <p className={styles.date}>
                {moment(1657813892056).format('MMM DD')}
              </p>
            </div>
            <hr />
            <div className={styles.bottomWrapper}>
              <p>
                Condition : <span className={styles.condition}>Like a New</span>
              </p>
              <p>
                Category : <span className={styles.category}>Table Top</span>
              </p>
            </div>
            <hr />
            <p className={styles.clgName}>Sambhram Institute of Technology</p>
          </div>
        </div>
      </div>
      <div className={`${styles.mainWrapper} contact`}>
        <button className={styles.offerBtn}>Make An Offer</button>
      </div>
      <div className={styles.mainWrapper}>
        <div className='wrapper'>
          <h3 className={styles.title}>Info</h3>
          <p className={styles.info}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
            doloremque accusamus eaque pariatur saepe sit illo fugit unde sequi
            magni! Minus quaerat consequuntur sint veniam inventore amet tempora
            eligendi quos!
          </p>
        </div>
      </div>
      <div className={styles.mainWrapper}>
        <div className='wrapper'>
          <h3 className={styles.title}>Seller</h3>
          <div className={styles.sellerCard}>
            <div className={styles.sellerAvatar}></div>
            <div className={styles.sellerContent}>
              <p className={styles.sellerName}>Ganesh Kumar</p>
              <Link href='/profile/hdsgdgsdgsg'>
                <a>View Profile</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.mainWrapper}>
        <div className='wrapper'>
          <h3 className={styles.title}>Releted</h3>
          <HorizontalList data={[...Array(10)]} />
        </div>
      </div>
      <div className={styles.mainWrapper}>
        <div className='wrapper'>
          <h3 className={styles.title}>Info</h3>
          <p className={styles.info}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
            doloremque accusamus eaque pariatur saepe sit illo fugit unde sequi
            magni! Minus quaerat consequuntur sint veniam inventore amet tempora
            eligendi quos!
          </p>
        </div>
      </div>
    </>
  )
}
