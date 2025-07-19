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
          <div className="team-members-list">
          {TEAM.map(t => (
            <TeamMember
              key={t.id}
              icon={t.icon}
              name={t.name}
              title={t.title}
              clickable={t.clickable}
            />
          ))}
          </div>
          
          
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

type TeamMemberProps = {
  icon: string;
  name: string;
  title: string;
  clickable?: boolean;
}

const TeamMember = ({ icon, name, title, clickable }: TeamMemberProps) => {
  console.log(clickable)
  return (
    <div className='team-member-div'>
      <Image className={`team-member-image ${clickable ? 'clickable' : ''}`} src={icon} alt={name} width={200} height={280} />
      <h3 className="team-name">{name}</h3>
      <p className="team-title">{title}</p>
    </div>
  );
}

export default ContactUs