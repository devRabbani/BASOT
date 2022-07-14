import { productData } from '../../data'
import ProductCard from '../productCard'
import styles from './productList.module.css'

export default function ProductList() {
  return (
    <div className={styles.mainWrapper}>
      {console.log(productData)}
      <h2 className='title'>Trending Items</h2>
      <div className={styles.productListWrapper}>
        {[...Array(20)].map((item, i) => (
          <ProductCard item={item} key={i} />
        ))}
      </div>
    </div>
  )
}
