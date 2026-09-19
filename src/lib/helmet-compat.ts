// react-helmet-async ships as CommonJS; named imports fail during SSR module
// evaluation ("Named export 'HelmetProvider' not found"). This shim normalizes
// the CJS/ESM interop so both server and client get the real exports.
import * as helmetPkg from "react-helmet-async";

type HelmetModule = typeof import("react-helmet-async");

const pkg = (((helmetPkg as unknown as { default?: HelmetModule }).default ??
  helmetPkg) as HelmetModule);

export const Helmet = pkg.Helmet;
export const HelmetProvider = pkg.HelmetProvider;
