import { categoryData } from '../../data'
import styles from './categorySection.module.css'
import Link from 'next/link'

export default function CategorySection({ setCatClicked }) {
  return (
    <div className={styles.categorySectionWrapper}>
      <div className='wrapper'>
        <div className={styles.categorySection}>
          {/* <button
            className={styles.clsBtn}
            onClick={() => setCatClicked(false)}
          >
            Close
          </button> */}
          {categoryData.map((item, i) => (
            <div className={styles.catGroup} key={i}>
              <p className={styles.catName}>{item.name}</p>
              <div className={styles.subCats}>
                {item.subcat.map((sub) => (
                  <Link
                    href={{ pathname: '/', query: { category: sub } }}
                    key={sub}
                  >
                    <a
                      onClick={() => setCatClicked(false)}
                      className={styles.subCatName}
                    >
                      {sub}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
