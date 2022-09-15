
import Image from "next/image"
import styles  from '../styles/Navbar.module.css'
import NavLinks from "./NavLinks"

import { useGlobalContext } from "../context"

export default function Navbar() {
  const {toggleSidebar} = useGlobalContext()
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}> 
      <Image src="/img/linkin.svg" height={40} width={40} alt='linkinwd logo'/><span> Web Desings</span></div>
      <div className={styles.nav_links}>
      <NavLinks/>
      </div>
      <button className={styles.hamburger} ><Image onClick={toggleSidebar} src="/img/hamburger.svg" height={40} width={40} alt='hamburger icon'/>
      </button>
    </nav>
  )
}
