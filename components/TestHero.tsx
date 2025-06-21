import React from 'react';
import '../app/globals.css';
import Image from 'next/image';

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
        </div>
      </div>
    </section>
  )
}

export default TestHero
