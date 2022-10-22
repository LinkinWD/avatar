import Link from "next/link"
import Image from "next/image"
import styles  from '../styles/Navbar.module.css'
import NavLinks from "./NavLinks"

import { useGlobalContext } from "../context"

export default function Navbar() {
  const {toggleSidebar, isSidebarOpen} = useGlobalContext()
  return (
    <nav className={styles.nav}>
      <Link href='/'>
      <div className={styles.logo}> 
      
      <Image src='/img/linkinb.svg' height={40} width={40}/>
      </div>
      </Link>
      
      <div className={styles.nav_links}>
       <NavLinks/>
      </div>
      <div className={`${styles.btn_div} ${isSidebarOpen ? styles.active: styles.no_active}`}>
        <button className={styles.hamburger} type='button'><Image  onClick={toggleSidebar} src="/img/hamburger.svg" height={40} width={40} alt='hamburger icon'/>
        </button>
      </div>
    </nav>
  )
}
