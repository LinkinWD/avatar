import Sidebar from './Sidebar'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Layout({children}) {
  return (
    <>
    <Navbar/>
    <Sidebar />
        <main>{children}</main>
    <Footer/>
    </>
  )
}
