import styles from './bottomBar.module.css'

export default function BottomBar() {
  return (
    <div className={styles.bottomBarWrapper}>
      <div className={`${styles.bottomBar} wrapper`}>
        <span>Home</span>
        <span>Category</span>
        <span>Add</span>
        <span>MyAd</span>
        <span>Chats</span>
      </div>
    </div>
  )
}
