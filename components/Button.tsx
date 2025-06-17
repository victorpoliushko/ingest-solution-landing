import Image from "next/image";
import React from "react";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: "btn_dark_green";
};

const Button = ({ type, title, icon, variant }: ButtonProps) => {
  return (
    <button className={`button ${variant}`} type="button">
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="button-title">{title}</label>
    </button>
  );
};

export default Button;
