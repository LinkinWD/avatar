import Link from "next/link"
import Image from "next/image"
import styles  from '../styles/Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}> 
      <Image src="/img/linkin.svg" height={40} width={40} alt='linkinwd logo'/><span> Web Desings</span></div>
      <div className={styles.nav_links}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link href="/"><a>Koti</a></Link>
        </li>
        <li className={styles.li}>
          <Link href='/freelancer'><a>Freelancer</a></Link>
        </li>
        <li className={styles.li}>
          <Link href={'/lighthouse'}><a>Lighthouse raportti</a></Link>
        </li>
        <li className={styles.li}>
          <Link href='/reseptit'><a>pula-aika blogi</a></Link>
        </li>
        <li className={styles.li}>
          <Link href='/verkkokauppa'><a>Vintage kauppa</a></Link>
        </li>
        <li className={styles.li}>
          <Link href='/kommentit'><a>Kommentti seinä</a></Link>
        </li>
      </ul>
      </div>
      <div className={styles.hamburger}><Image src="/img/hamburger.svg" height={40} width={40} alt='hamburger icon'/>
      </div>
    </nav>
  )
}
