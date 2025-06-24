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
      <div className="hero-review-dynamic relative flex flex-1 items-start border-2 border-blue-500">
        <div className="hero-review-dynamic-inner relative z-20 w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
          <div className="hero-review-dynamic-two">
            {/* some css problems here */}
            <div className="hero-review-dynamic-tree">
              <p>
                Location
                <Image src="/close.svg" alt="close" width={24} height={24}
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestHero
