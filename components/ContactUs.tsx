import { TEAM } from '@/constants'
import Image from 'next/image'
import React from 'react'

const ContactUs = () => {
  return (
    <section className='contact-us'>
      <div className="contact-us-div">
        <div className="contact-us-div-inner">
          <h2 className='contact-us-div-inner-h2'>
            Our team
          </h2>
          {TEAM.map(t => (
            <Image src={t.icon} alt={t.name} width={300} height={400} />
          ))}
          
          {/* <div className="contact-us-div-inner-columns">
          <p className='contact-us-div-inner-p'><strong>Email:</strong> ingest.solution@gmail.com</p>
          <p className='contact-us-div-inner-p'><strong>Phone:</strong> +380974763051</p>
          <p className='contact-us-div-inner-p'><strong>Linkedin:</strong> in progress</p>
          <p className='contact-us-div-inner-p'><strong>Youtube:</strong> in progress</p>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default ContactUs