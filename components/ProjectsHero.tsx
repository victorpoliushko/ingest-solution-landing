import React from "react";
import invappBg from  "../public/invapp-bg.png";
import baSiteBg from "../public/BAsite-bg.png";

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
  console.log('backgroundImage ', backgroundImage)
  return <div className="project" style={{ backgroundImage: `url('${backgroundImage}')` }}>Test1</div>;
};

const ProjectsHero = () => {
  return (
    <section className="projects-hero">
      <div className="projects-hero element">
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
