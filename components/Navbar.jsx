import Link from "next/link"

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/"><a >Koti</a></Link>
        </li>
        <li>
          <Link href='/reseptit'><a>Koodaava kokki</a></Link>
        </li>
        <li>
          <Link href={'/lighthouse'}><a>Lighthouse raportti</a></Link>
        </li>
      </ul>
    </nav>
  )
}
