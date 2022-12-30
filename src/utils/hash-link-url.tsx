/**
 * Generates the anchor hash url for the index page
 *
 * @param {string} anchor - the anchor hash
 * @return {string} returns a url string concat with anchor hash
 */
export function hashLinkUrl(anchor){
  return `/#${anchor}`;
}