import React from 'react';
import '../app/globals.css';
import Image from 'next/image';
import Button from './Button';

const TestHero = () => {
  return (
    <section className="hero-section">
      {/* <div className='hero-map'/> */}
      <div className="hero-body">
        <h1 className="hero-title">Let's make products together</h1>
        <p className="hero-description">
          We want to deliver the best match for your business needs. High performance, high quality and big experiece are our strengths!
        </p>

        <div className="hero-outer-block">
          <div className="hero-innter-block">
            {Array(5).fill(1).map((_, index) => (
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
            2
            <span className="hero-review-title">Excellent reviwes</span>
          </p>
        </div>
        <div className="hero-review-buttons flex flex-col w-full gpa-3 sm:flex-row">
          <Button
            type="button"
            title="Get App"
            variant="btn_green"
           />
           <Button
            type="button"
            title="How it works?"
            icon="/circle-play.svg"
            variant="btn_white_text"
           />
        </div>
      </div>
    </section>
  )
}

export default TestHero
