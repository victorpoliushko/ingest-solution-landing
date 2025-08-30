import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import '../app/globals.css';
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/">
        <Image src="/text-logo-black.svg" alt="logo" width={130} height={80}/>
      </Link>
      <ul className="navbar-ul">
        {NAV_LINKS.map(link => (
          <Link href={link.href} key={link.key}>
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="contact-button">
        <Button 
          type="button"
          title="Contact Us"
          icon="/phone.svg"
          variant="btn_dark_green"
          href="#contact-us"
        />
      </div>

      <Image
        src="/menu.png"
        alt="menu"
        width={32}
        height={32}
        className="navbar-img"
       />
    </nav>
  )
}

export default Navbar
