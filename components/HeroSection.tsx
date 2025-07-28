import React from "react";
import "../app/globals.css";
import Image from "next/image";
import Button from "./Button";

export const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-body">
        <h1 className="hero-title">Let's make products together</h1>
        <p className="hero-description">
          We want to deliver the best match for your business needs. High
          performance, high quality and big experiece are our strengths!
        </p>

        <div className="hero-outer-block">
          <div className="hero-innter-block">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>
          <p className="hero-review-count">
            5<span className="hero-review-title">Excellent reviwes</span>
          </p>
        </div>
        <div className="hero-review-buttons flex flex-col w-full gpa-3 sm:flex-row">
          <Button type="button" title="Find us" variant="btn_green" />
          <Button
            type="button"
            title="How do we work?"
            icon="/circle-play.svg"
            variant="btn_white_text"
          />
        </div>
      </div>
      <div className="hero-review-dynamic">
        <div className="hero-review-dynamic-inner">
          <div className="hero-review-dynamic-two">
            <div className="hero-review-location-div">
              <p className="hero-review-location-title-name">
                Country
              </p>
            </div>
            <p className="hero-review-location-title">Ukraine</p>
          </div>

          <div className="hero-review-location-div">
            <div className="hero-review-dynamic-two">
              <p className="hero-review-location-title-name">City</p>
              <p className="hero-review-location-title">Lviv</p>
            </div>
            <div className="hero-review-dynamic-two">
              <p className="hero-review-location-title-name">City</p>
              <p className="hero-review-location-title">Rivne</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
