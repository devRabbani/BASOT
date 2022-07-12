import styles from './bottomBar.module.css'
import {
  MdOutlineCategory,
  MdCategory,
  MdOutlineHome,
  MdHome,
  MdOutlineMessage,
  MdMessage,
  MdOutlineAttachMoney,
  MdAttachMoney,
  MdAdd,
} from 'react-icons/md'
import NavLink from '../navLink'
export default function BottomBar() {
  return (
    <div className={styles.bottomBarWrapper}>
      <div className={`${styles.bottomBar} wrapper`}>
        <NavLink href='/' name='home'>
          Home
        </NavLink>
        <NavLink href='/category' name='category'>
          Category
        </NavLink>
        <div className={styles.add}>
          <MdAdd />
        </div>
        <NavLink href='/myad' name='myad'>
          My Ad
        </NavLink>
        <NavLink href='/chats' name='chats'>
          Chats
        </NavLink>
      </div>
    </div>
  )
}
