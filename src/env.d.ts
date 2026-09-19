/// <reference types="vite/client" />

// Explicit declarations so import.meta.env.VITE_* passes
// noPropertyAccessFromIndexSignature under the strict tsconfig.
interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL: string;
  readonly VITE_SUPABASE_PUBLISHABLE_KEY: string;
  readonly VITE_SUPABASE_PROJECT_ID: string;
}
