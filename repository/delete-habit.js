const db = require('./../_db')

const getAll = async (_id) => {
  const Habits = db.Mongoose.model('habits', db.HabitSchema)

  return Habits.deleteOne({ _id })
    .then(() => {
      return 'Hábito deletado com sucesso!'
    })
    .catch((err) => {
      return `ERR: ${err}`
    })
}

module.exports = getAll
