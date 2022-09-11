import Link from "next/link"

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/"><a >Koti</a></Link>
        </li>
        <li>
          <Link href='/freelancer'>Freelancer</Link>
        </li>
        <li>
          <Link href={'/lighthouse'}><a>Lighthouse raportti</a></Link>
        </li>
        <li>
          <Link href='/reseptit'><a>pula-aika blogi</a></Link>
        </li>
        <li>
          <Link href='/verkkokauppa'>Vintage kauppa</Link>
        </li>
        <li>
          <Link href='/kommentit'>Kommentti seinä</Link>
        </li>
      </ul>
    </nav>
  )
}
