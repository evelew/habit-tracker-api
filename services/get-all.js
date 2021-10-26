const getAll = require('./../repository/get-all')

module.exports = async () => {
  const habits = await getAll()
  return habits
}
