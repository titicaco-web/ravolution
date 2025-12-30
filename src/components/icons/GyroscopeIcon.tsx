import { SVGProps } from "react";

interface GyroscopeIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

const GyroscopeIcon = ({ size, className, ...props }: GyroscopeIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || 24}
      height={size || 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Outer ring - tilted */}
      <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(-30 12 12)" />
      {/* Middle ring - opposite tilt */}
      <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(30 12 12)" />
      {/* Inner ring - vertical */}
      <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(90 12 12)" />
      {/* Center sphere */}
      <circle cx="12" cy="12" r="2.5" fill="currentColor" stroke="none" />
    </svg>
  );
};

export default GyroscopeIcon;
