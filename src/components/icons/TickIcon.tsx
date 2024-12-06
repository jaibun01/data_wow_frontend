import React from "react";

const TickIcon = ({
  width = 16,
  height = 11,
  onClick,
  className,
  stroke = "#4A4A4A",
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 16 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
  >
    <path
      d="M14.2244 0.948242L5.05778 10.1149L0.891113 5.94824"
      stroke={stroke}
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default TickIcon;
