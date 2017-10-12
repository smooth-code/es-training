var date = new Date()

function getEllapsedMinutes() {
  return date.getHours() * 60 + date.getMinutes()
}

console.log(
  [
    'hello world! ',
    date.getHours(),
    ':',
    date.getMinutes(),
    ' (',
    getEllapsedMinutes(),
    'min',
    ')',
  ].join(''),
)
