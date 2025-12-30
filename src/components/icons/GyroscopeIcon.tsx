import { SVGProps } from "react";

interface GyroscopeIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

const GyroscopeIcon = ({ size = 24, className, ...props }: GyroscopeIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Outer ring - tilted */}
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-30 12 12)" />
      {/* Middle ring - opposite tilt */}
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(30 12 12)" />
      {/* Inner ring - horizontal */}
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(90 12 12)" />
      {/* Center sphere */}
      <circle cx="12" cy="12" r="2" fill="currentColor" />
    </svg>
  );
};

export default GyroscopeIcon;
