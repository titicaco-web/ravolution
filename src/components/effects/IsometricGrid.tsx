/**
 * Drifting isometric diamond grid background.
 * Absolutely positioned SVG, pointer-events: none, z-index 0.
 * Parent must be position: relative; overflow: hidden.
 */
const IsometricGrid = ({ stroke = "rgba(220,70,70,0.12)" }: { stroke?: string }) => {
  return (
    <div
      aria-hidden
      className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block iso-grid-wrap"
      style={{ zIndex: 0 }}
    >
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="isoGrid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path
              d="M0 24 L24 0 L48 24 L24 48 Z"
              fill="none"
              stroke={stroke}
              strokeWidth="0.7"
            />
          </pattern>
        </defs>
        <rect className="iso-grid-rect" width="200%" height="200%" x="-50%" y="-50%" fill="url(#isoGrid)" />
      </svg>
    </div>
  );
};

export default IsometricGrid;
