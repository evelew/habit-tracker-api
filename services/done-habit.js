const doneHabit = require('../repository/done-habit')
const getFormattedDate = require('../helpers/getFormattedDate')

module.exports = async ({ _id, body }) => {
  if (!body.date) return 'ERR: date está vazio!'

  const date = getFormattedDate(body.date)
  const response = await doneHabit({ _id, date })

  return response
}
