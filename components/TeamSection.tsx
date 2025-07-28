import { TEAM } from '@/constants'
import Image from 'next/image'
import React from 'react'

export const TeamSection = () => {
  return (
    <section className='contact-us' id="contact-us">
      <div className="contact-us-div">
        <div className="contact-us-div-inner">
          <h2 id="team" className='contact-us-div-inner-h2'>
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
