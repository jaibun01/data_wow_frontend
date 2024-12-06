import React from "react";

const ArrowDownIcon = ({
  width = 13,
  height = 7,
  onClick,
  className,
  stroke = "#191919",
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 13 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
  >
    <path
      d="M1.26123 0.819824L6.26123 5.81982L11.2612 0.819824"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ArrowDownIcon;
