import React from "react";
import invappBg from  "../public/invapp-bg.png";
import baSiteBg from "../public/BAsite-bg.png";
import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface ProjectProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  reviews: string;
  people: string[]
};

const Project = ({
  backgroundImage,
  title,
  subtitle,
  reviews,
  people
}: ProjectProps) => {
  return (<div className="project" style={{ backgroundImage: `url(${backgroundImage})` }}>
    <div className="project-title-block">
      <div className="project-title-block-2">
        <div className="project-title-block-3">
          <h4>Product</h4>
        </div>
        <div className="project-title-text">
          <h4 className="project-title-text-title">{title}</h4>
          <p className="project-title-text-subtitle">{subtitle}</p>
        </div>
      </div>

      <div className="people-block">
        <span className="people-block-1">
          {people.map(url => (
            <Image
              className="people-image"
              src={url}
              key={url}
              alt='person'
              width={52}
              height={52}
            />
          ))}
        </span>
        <p className="people-text">{reviews}</p>
      </div>
    </div>
  </div>)
};

export const ProjectsSection = () => {
  return (
    <section id="products" className="projects-hero">
      <div className="projects-hero-element">
        <Project
          backgroundImage={invappBg.src}
          title="InvApp"
          subtitle="The only investment tracking app you need"
          reviews="4 reviews"
          people={PEOPLE_URL}
        />
        <Project
          backgroundImage={baSiteBg.src}
          title="InvApp"
          subtitle="The only investment tracking app you need"
          reviews="1 review"
          people={[PEOPLE_URL[0]]}
        />
      </div>

      <div className="dont-know-block">
        <div className="dont-know-block-inner">
          <h2 className="dont-know-title">
            <strong>Don't know</strong> where to start?
          </h2>
          <p className="dont-know-subtitle">Whether you're launching a new product, scaling your business, or optimizing existing systems — we're here to help.
Our team of experienced professionals will guide you through every step, from idea to implementation.
Get in touch today to receive a detailed overview of our services and discover the real impact we can make on your growth and success.
</p>
        </div>
      </div>
    </section>
  );
};
