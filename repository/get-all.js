const db = require('./../_db')

const getAll = async () => {
  const Habits = db.Mongoose.model('habits', db.HabitSchema)
  const habits = await Habits.find({}).lean().exec()

  return habits
}

module.exports = getAll
