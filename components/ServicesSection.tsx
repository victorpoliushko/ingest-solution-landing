import Image from "next/image";
import React from "react";

export const ServicesSection = () => {
  return (
    <section id="services" className="dev-route-block">
      <div className="dev-route-pre-title">
        <p className="dev-route-pre-title-p">How do we work</p>
        <div className="dev-route-title">
          <h2 className="dev-route-title-h2">
            Clear Path to App Development
          </h2>
          <p className="dev-route-title-p">
            We specialize in turning your ideas into fully functional
            applications. Whether you're starting from scratch or enhancing an
            existing product, our team is here to guide you through the entire
            development lifecycle. We handle every stage — from initial planning
            and UI/UX design, to backend and frontend development, cloud
            deployment, quality assurance, and post-launch support. Our goal is
            to help you launch fast, scale efficiently, and maintain long-term
            success. No matter your industry or business goals, we offer
            tailored solutions to make your vision a reality. Let's build
            something great together.
          </p>
        </div>
      </div>

      <div className="development-image-block">
        <Image
          src="/developer.jpg"
          alt="developer"
          width={1440}
          height={580}
          className="development-image" 
        />

        <div className="development-image-text-block">
          <Image
            src="/path.png"
            alt="path"
            width={16}
            height={160}
            className="development-image-text-block-path"
          />
          <div className="development-image-text-block-2">
            <div className="development-image-text-block-3">
              <div className="development-image-text-block-4">
                <p className="development-image-text-block-4-p-1">Target</p>
                <p className="development-image-text-block-4-p-2">Fast delivery</p>
              </div>
              <p className="development-image-text-block-2-p-1">You working application</p>
            </div>
            
            <div className="development-image-text-block-3">
              <p className="development-image-text-block-4-p-1">Target</p>
              <h4 className="development-image-text-block-4-h4-1">Plannig phase</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
