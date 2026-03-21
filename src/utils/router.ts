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
  const path = window.location.pathname;

  // GitHub Pages or Sub-folder deployment: /h4_GameHackSite/
  if (path.startsWith('/h4_GameHackSite')) {
    return '/h4_GameHackSite';
  }

  // MPA pattern: /apps/{app_id}
  const match = path.match(/^\/apps\/[^/]+/);
  if (match) {
    return match[0];
  }

  return '/';
}

