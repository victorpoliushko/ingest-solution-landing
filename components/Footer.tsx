import { FOOTER_CONTACT_INFO, FOOTER_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-outer">
        <div className="footer-inner">
          <Link href='/' className="footer-link">
            <Image src='/ingest_solution_logo.png' alt='logo' width={120} height={60}/>
          </Link>
          <div className="footer-links-div">
            {FOOTER_LINKS.map(col => (
              <FooterColumn title={col.title}>
                <ul className="footer-links-ul">
                  {col.links.map(link => (
                    <Link href={link.href} key={link.title}>
                      {link.title}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}
            <div className="footer-links-contacts">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map(link => (
                  <Link href='/' key={link.label} className='footer-links-contacts-items'>
                    <p className="footer-links-contacts-items-label">{link.label}:</p>
                    <p className="footer-links-contacts-items-value">{link.value}</p>
                  </Link>
                ))}
              </FooterColumn>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="footer-column-div">
      <h4 className="footer-column-h4">{title}</h4>
      {children}
    </div>
  );
}

export default Footer
