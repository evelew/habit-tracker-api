const doneHabit = require('./../repository/done-habit')
const getFormattedDate = require('./../helpers/getFormattedDate')

module.exports = async (_id) => {
  const date = getFormattedDate(new Date())
  const response = await doneHabit({ _id, date })

  return response
}
