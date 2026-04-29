/**
 * Slow radial pulse blob — top-center of section.
 * Parent must be position: relative; overflow: hidden.
 */
const RadialPulseBlob = () => (
  <div
    aria-hidden
    className="radial-pulse-blob pointer-events-none"
    style={{ zIndex: 0 }}
  />
);

export default RadialPulseBlob;
