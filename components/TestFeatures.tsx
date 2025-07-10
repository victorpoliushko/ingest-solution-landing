import Image from "next/image";
import React from "react";

const TestFeatures = () => {
  return (
    <section className="features">
      <div className="features-outer">
        <div className="features-inner-left">
          <Image
            src="/dots4.png"
            alt="features"
            width={400}
            height={600}
            className="features-image-left"
          />
        </div>

        <div className="features-outer-right">
          <h2 className="features-outer-right-h2">What we do</h2>
        </div>
      </div>
    </section>
  );
};

export default TestFeatures;
