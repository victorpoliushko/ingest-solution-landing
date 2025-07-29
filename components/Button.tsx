import Image from "next/image";
import React from "react";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
  href?: string;
};

const Button = ({ type, title, icon, variant, href }: ButtonProps) => {
  return (
    <a href={href}>
      <button className={`button ${variant}`} type="button">
        {icon && <Image src={icon} alt={title} width={24} height={24} />}
        <label className="button-title">{title}</label>
      </button>
    </a>
  );
};

export default Button;
