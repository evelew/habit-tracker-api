const deleteHabit = require('./../repository/delete-habit')

module.exports = async (id) => {
  const response = await deleteHabit(id)
  return response
}
