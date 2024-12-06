import React from "react";

const Hamburger = ({
  width = 20,
  height = 15,
  onClick,
  className,
  stroke = "#FFFFFF",
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 20 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
  >
    <path
      d="M1 7.40674H19M1 1.40674H19M1 13.4067H19"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Hamburger;
