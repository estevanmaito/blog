export function formatDate(date) {
  return new Intl.DateTimeFormat('en', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(date))
}

export function formatPath(path, replace = '') {
  return path.replace(/\.md$/, replace)
}
