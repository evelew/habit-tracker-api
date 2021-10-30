const doneTodayHabit = require('../repository/done-today-habit')
const getFormattedDate = require('../helpers/getFormattedDate')

module.exports = async (_id) => {
  const date = getFormattedDate(new Date())
  const response = await doneTodayHabit({ _id, date })

  return response
}
