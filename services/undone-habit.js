const updoneHabit = require('./../repository/undone-habit')
const getFormattedDate = require('./../helpers/getFormattedDate')

module.exports = async ({ _id, body }) => {
  if (!body.date) return 'ERR: date está vazio!'

  const date = getFormattedDate(body.date)
  const message = await updoneHabit({ _id, date })

  return message
}
