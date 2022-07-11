import BottomBar from '../bottomBar'
import Nav from '../nav'

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <BottomBar />
    </>
  )
}
