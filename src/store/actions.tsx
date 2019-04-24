/*
 * action types
 */

export const TOGGLE_SITE_DISPLAY = "TOGGLE_SITE_DISPLAY"

/*
 * action creators
 */

export function toggleSiteDisplay(visible: boolean) {
  return { type: TOGGLE_SITE_DISPLAY, visible }
}
