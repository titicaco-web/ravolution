// react-helmet-async ships as CommonJS; named imports fail during SSR module
// evaluation ("Named export 'HelmetProvider' not found"). This shim normalizes
// the CJS/ESM interop so both server and client get the real exports.
import * as helmetPkg from "react-helmet-async";
import { Children, cloneElement, createElement, isValidElement, type ReactElement, type ReactNode } from "react";
import { clampDescription } from "./meta-description";

type HelmetModule = typeof import("react-helmet-async");

const pkg = (((helmetPkg as unknown as { default?: HelmetModule }).default ??
  helmetPkg) as HelmetModule);

const DESC_KEYS = new Set(["description", "og:description", "twitter:description"]);

// Search engines (Bing) flag descriptions outside ~25–160 chars; clamp every
// description passed through Helmet so no page ships an over-long one.
function clampChildren(children: ReactNode): ReactNode {
  return Children.map(children, (child) => {
    if (!isValidElement(child) || child.type !== "meta") return child;
    const p = child.props as { name?: string; property?: string; content?: unknown };
    const key = p.name ?? p.property;
    if (!key || !DESC_KEYS.has(key) || typeof p.content !== "string") return child;
    return cloneElement(child as ReactElement<{ content: string }>, { content: clampDescription(p.content) });
  });
}

const RealHelmet = pkg.Helmet;
export const Helmet = (props: React.ComponentProps<typeof RealHelmet>) =>
  createElement(RealHelmet, { ...props, children: clampChildren(props.children as ReactNode) } as never);
export const HelmetProvider = pkg.HelmetProvider;
