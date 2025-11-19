import React from "react";
import { PROJECTS } from "@/constants";
import Image from "next/image";

interface ProjectProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  reviews: string;
  people: string[];
  type: "product" | "service";
}

const Project = ({
  backgroundImage,
  title,
  subtitle,
  reviews,
  people,
  type,
}: ProjectProps) => {
  return (
    <div className="project-wrapper">
      <div className="project-header-row">
        <div className="project-title-block-3">
          {type === "product" ? <h4>Product</h4> : <h4>Service</h4>}
        </div>

        <div className="project-title-text">
          <h4 className="project-title-text-title">{title}</h4>
          <p className="project-title-text-subtitle">{subtitle}</p>
        </div>
      </div>

      <div
        className="project"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      <div className="people-block">
        <span className="people-block-1">
          {people.map((url) => (
            <Image
              className="people-image"
              src={url}
              key={url}
              alt="person"
              width={52}
              height={52}
            />
          ))}
        </span>
        <p className="people-text">{reviews}</p>
      </div>

    </div>
  );
};



export const ProjectsSection = () => {
  return (
    <section id="products" className="projects-hero">
      <div className="projects-hero-element">
        {PROJECTS.map((p) => (
          <Project
            key={p.key}
            backgroundImage={p.background}
            title={p.title}
            subtitle={p.subtitle}
            reviews={p.reviews}
            people={p.people_url}
            type={p.type}
          />
        ))}
      </div>

      <div className="dont-know-block">
        <div className="dont-know-block-inner">
          <h2 className="dont-know-title">
            <strong>Don't know</strong> where to start?
          </h2>
          <p className="dont-know-subtitle">
            Whether you're launching a new product, scaling your business, or
            optimizing existing systems — we're here to help. Our team of
            experienced professionals will guide you through every step, from
            idea to implementation. Get in touch today to receive a detailed
            overview of our services and discover the real impact we can make on
            your growth and success.
          </p>
        </div>
      </div>
    </section>
  );
};
