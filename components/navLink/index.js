import Link from 'next/link'
import { useRouter } from 'next//router'
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
import styles from './navLink.module.css'

export default function NavLink({ href, children, name }) {
  const router = useRouter()
  const flag = router.pathname === href
  const iconMap = {
    home: { out: <MdOutlineHome />, fill: <MdHome /> },
    category: { out: <MdOutlineCategory />, fill: <MdCategory /> },
    myad: { out: <MdOutlineAttachMoney />, fill: <MdAttachMoney /> },
    chats: { out: <MdOutlineMessage />, fill: <MdMessage /> },
  }

  return (
    <Link href={href}>
      <a className={`${styles.menu} ${flag ? 'active' : ''}`}>
        {flag ? iconMap[name].fill : iconMap[name].out}
        {children}
      </a>
    </Link>
  )
}
