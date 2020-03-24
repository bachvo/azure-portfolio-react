/**
 * Capitalize the first char of a given string
 *
 * @param {string} str - some string
 * @return {string} same string, but the first char is capitalized
 */
export function capitalize(str){
  return str.charAt(0).toUpperCase() + str.slice(1);
}