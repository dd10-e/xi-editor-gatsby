function toKebabCase(item) {
  return item
    .toLowerCase()
    .split(' ')
    .join('-')
    .split('.')
    .join('')
}

module.exports = toKebabCase
