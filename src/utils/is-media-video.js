/**
 * Is the url string from the video folder
 *
 * @param {string} str - some string
 * @return {string} same string, but the first char is capitalized
 */
export function isMediaVideo(str){
  const firstChars = str.substring(1, 6);
  return firstChars === 'video';
}