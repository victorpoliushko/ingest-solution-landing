import Image from 'next/image'
import React from 'react'

const TestFeatures = () => {
  return (
    <section className="features">
      <div className="features-outer">
        <div className="features-inner">
          <Image
            src="/dots.jpg"
            alt="features"
            width={400}
            height={1000}
            className="features-image"
          />
        </div>
      </div>
    </section>
  )
}

export default TestFeatures