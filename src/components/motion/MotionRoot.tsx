import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useParallax } from "@/hooks/use-parallax";
import LiveToast from "./LiveToast";
import CustomCursor from "./CustomCursor";
import PageTransition from "./PageTransition";

/**
 * Mounts the global motion layer:
 * - Scroll-reveal observer for [data-reveal] elements
 * - Parallax for [data-parallax] elements
 * - Live activity toast
 * - Custom cursor (desktop only)
 * - Route transition overlay
 */
export default function MotionRoot() {
  useScrollReveal();
  useParallax();
  return (
    <>
      <PageTransition />
      <LiveToast />
      <CustomCursor />
    </>
  );
}
