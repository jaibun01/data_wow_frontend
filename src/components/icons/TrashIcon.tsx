import React from "react";

const TrashIcon = ({
  width = 15,
  height = 15,
  onClick,
  className,
  stroke = "#2B5F44",
  strokeWidth = "1.5",
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
  >
    <path
      d="M9.9279 3.57536V3.04202C9.9279 2.29529 9.9279 1.92192 9.78257 1.6367C9.65474 1.38582 9.45077 1.18185 9.19988 1.05402C8.91467 0.908691 8.5413 0.908691 7.79456 0.908691H6.7279C5.98116 0.908691 5.60779 0.908691 5.32258 1.05402C5.07169 1.18185 4.86772 1.38582 4.73989 1.6367C4.59456 1.92192 4.59456 2.29529 4.59456 3.04202V3.57536M5.9279 7.24202V10.5754M8.59456 7.24202V10.5754M1.26123 3.57536H13.2612M11.9279 3.57536V11.042C11.9279 12.1621 11.9279 12.7222 11.7099 13.15C11.5182 13.5263 11.2122 13.8323 10.8359 14.024C10.4081 14.242 9.848 14.242 8.7279 14.242H5.79456C4.67446 14.242 4.11441 14.242 3.68658 14.024C3.31026 13.8323 3.0043 13.5263 2.81255 13.15C2.59456 12.7222 2.59456 12.1621 2.59456 11.042V3.57536"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default TrashIcon;
