/**
 * Is the url string from the video folder
 *
 * @param {string} str - url string
 * @return {bool}
 */
export function isMediaVideo(str: string): boolean {
  const firstChars = str.substring(1, 6);
  return firstChars === 'video';
}