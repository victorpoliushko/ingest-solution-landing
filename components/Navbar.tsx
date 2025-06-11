import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import '../app/globals.css';

const Navbar = () => {
  return (
    <nav className="navbar flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/ingest_solution_logo.png" alt="logo" width={274} height={150}/>
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map(link => (
          <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
