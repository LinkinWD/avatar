import Link from "next/link"
import Image from "next/image"
import styles  from '../styles/Navbar.module.css'
import NavLinks from "./NavLinks"

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}> 
      <Image src="/img/linkin.svg" height={40} width={40} alt='linkinwd logo'/><span> Web Desings</span></div>
      <div className={styles.nav_links}>
      <NavLinks/>
      </div>
      <div className={styles.hamburger}><Image src="/img/hamburger.svg" height={40} width={40} alt='hamburger icon'/>
      </div>
    </nav>
  )
}
