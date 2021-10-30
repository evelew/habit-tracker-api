const getFormattedDate = (data) => {
  const date = new Date(data)
  const day = date.getDate()
  const month = Number(date.getMonth()) + 1
  const year = date.getFullYear()

  return `${year}-${month}-${day}`
}

module.exports = getFormattedDate
