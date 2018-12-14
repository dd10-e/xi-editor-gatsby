/**
 * Util for tags
 * Transform this kind of tags: 'My Tag'
 * to this 'my-tag'
 * @param {string} item
 */
function toKebabCase(item) {
  return item
    .toLowerCase()
    .split(' ')
    .join('-')
    .split('.')
    .join('')
}

module.exports = toKebabCase
