const getHabit = require('./../repository/get-habit')

module.exports = async (id) => {
  const habit = await getHabit(id)
  return habit
}
