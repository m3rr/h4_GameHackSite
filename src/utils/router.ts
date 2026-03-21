/**
 * Router utilities for MPA architecture
 * Router utilities for GitHub Pages deployment
 *
 * This utility automatically detects the basename from the URL, primarily for GitHub Pages.
 */

/**
 * Extracts the basename from the current URL path
 *
 * @returns The basename for React Router (e.g., "/h4_GameHackSite")
 *
 * @example
 * getBasename() // Returns: "/apps/my-app"
 */
export function getBasename(): string {
  // Use Vite's build-time base path, ensuring no trailing slash for React Router compatibility
  const base = import.meta.env.BASE_URL || '/';
  return base === '/' ? '' : base.replace(/\/$/, '');
}

