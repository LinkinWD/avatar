import Link from "next/link"
import styles  from '../styles/Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}> logo</div>
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
      <div className={styles.hamburger}>Hamburger</div>
    </nav>
  )
}
