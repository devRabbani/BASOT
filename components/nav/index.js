import Link from 'next/link'
import styles from './nav.module.css'

export default function Nav() {
  return (
    <nav className={styles.navWrapper}>
      <div className={`${styles.nav} wrapper`}>
        <Link href='/'>Basot</Link>
        <div className={styles.avatar}></div>
      </div>
    </nav>
  )
}
