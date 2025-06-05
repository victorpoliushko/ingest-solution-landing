import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className='flexBetween max-container padding-container relative z-30 py-5'>
      <Link href="/">
        <Image src="/ingest_solution_logo.png" alt="logo" width={274} height={50}/>
      </Link>
    </nav>
  )
}

export default Navbar
