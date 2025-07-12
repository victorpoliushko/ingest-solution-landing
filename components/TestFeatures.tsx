import { FEATURES } from "@/constants";
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
          <ul>
            {FEATURES.map((f) => (
              <FeatureItem
                key={f.title}
                title={f.title}
                icon={f.icon}
                variant={f.variant}
                description={f.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

type FeatureItem = {
  title: string;
  icon: string;
  variant: string;
  description: string;
}

const FeatureItem = ({
  title,
  icon,
  variant,
  description,
}: FeatureItem) => {
  return (
    <li className="feature-item-li">
      <div className="feature-item-li-div">
        <Image src={icon} alt="fetures-icon" width={36} height={36}/>
      </div>
    </li>
  )
};

export default TestFeatures;
