import React from "react";
import invappBg from  "../public/invapp-bg.png";
import baSiteBg from "../public/BAsite-bg.png";
import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

const reviews = 4;

interface ProjectProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  downloads: string;
};

const Project = ({
  backgroundImage,
  title,
  subtitle,
  downloads,
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
              {PEOPLE_URL.map(url => (
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
            <p className="people-text">{reviews} reviews</p>
          </div>
    </div>
  </div>)
};

const ProjectsHero = () => {
  return (
    <section className="projects-hero">
      <div className="projects-hero-element">
        <Project
          backgroundImage={invappBg.src}
          title="InvApp"
          subtitle="The only investment tracking app you need"
          downloads="500+ downloads"
        />
      </div>
    </section>
  );
};

export default ProjectsHero;
