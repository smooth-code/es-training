var date = new Date()

var dateUtil = {
  getEllapsedMinutes(date) {
    return date.getHours() * 60 + date.getMinutes()
  },
  getTime(date) {
    return date.getHours() + ':' + date.getMinutes()
  },
}

console.log(
  [
    'hello world! ',
    dateUtil.getTime(date),
    ' (',
    dateUtil.getEllapsedMinutes(date),
    'min',
    ')',
  ].join(''),
)
