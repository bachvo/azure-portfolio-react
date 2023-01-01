/**
 * Generates an object with the `__html` so dangerouslySetInnerHTML
 * can consume and serialize.
 *
 * @param {string} text - the text that may contain markup
 * @return {object} returns an object so dangerouslySetInnerHTML can consume
 */
export function createMarkup(text: string): object {
  return { __html: text };
}