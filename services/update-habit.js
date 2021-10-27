const updateHabit = require('./../repository/update-habit')

module.exports = async ({ _id, body }) => {
  const message = await updateHabit({ _id, body })

  return message
}
