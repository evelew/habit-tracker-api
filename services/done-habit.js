const doneHabit = require('./../repository/done-habit')

module.exports = async (_id) => {
  const today = new Date()
  const day = today.getDate()
  const month = Number(today.getMonth()) + 1
  const year = today.getFullYear()
  const todayFormatted = `${year}-${month}-${day}`

  const response = await doneHabit({ _id, date: todayFormatted })
  return response
}
