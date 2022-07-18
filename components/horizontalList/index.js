import ProductCard from '../productCard'
import styles from './horizontalList.module.css'

export default function HorizontalList({ data, margin }) {
  return (
    <div className={`${styles.wrapper} ${margin || margin}`}>
      {data.map((item, i) => (
        <ProductCard key={i} type='small' />
      ))}
    </div>
  )
}
