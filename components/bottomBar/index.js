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
  MdClose,
} from 'react-icons/md'
import NavLink from '../navLink'
import { useEffect, useState } from 'react'
import CategorySection from '../categorySection'
export default function BottomBar() {
  const [catClicked, setCatClicked] = useState(false)

  return (
    <div className={styles.bottomBarWrapper}>
      <div className={`${styles.bottomBar} wrapper`}>
        <NavLink
          catClicked={catClicked}
          setCatClicked={setCatClicked}
          href='/'
          name='home'
        >
          Home
        </NavLink>

        <div
          onClick={() => setCatClicked((prev) => !prev)}
          className={`${styles.menu} ${catClicked ? 'active' : ''}`}
        >
          {catClicked ? (
            <>
              <MdClose />
              Close
            </>
          ) : (
            <>
              <MdOutlineCategory />
              Category
            </>
          )}
        </div>
        {/*         
        <NavLink href='/category' name='category'>
          Category
        </NavLink> */}
        <div className={styles.add}>
          <MdAdd />
        </div>
        <NavLink
          catClicked={catClicked}
          setCatClicked={setCatClicked}
          href='/myad'
          name='myad'
        >
          My Ad
        </NavLink>
        <NavLink
          catClicked={catClicked}
          setCatClicked={setCatClicked}
          href='/chats'
          name='chats'
        >
          Chats
        </NavLink>
      </div>
      {catClicked && <CategorySection setCatClicked={setCatClicked} />}
    </div>
  )
}
