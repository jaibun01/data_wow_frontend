import React from "react";

const UserIcon = ({
  width = 18,
  height = 21,
  onClick,
  className,
  stroke = "#979797",
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 18 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
  >
    <path
      d="M17 19.9253V17.9253C17 16.8644 16.5786 15.847 15.8284 15.0969C15.0783 14.3467 14.0609 13.9253 13 13.9253H5C3.93913 13.9253 2.92172 14.3467 2.17157 15.0969C1.42143 15.847 1 16.8644 1 17.9253V19.9253M13 5.92529C13 8.13443 11.2091 9.92529 9 9.92529C6.79086 9.92529 5 8.13443 5 5.92529C5 3.71615 6.79086 1.92529 9 1.92529C11.2091 1.92529 13 3.71615 13 5.92529Z"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default UserIcon;
