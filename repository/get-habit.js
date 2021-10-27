const db = require('./../_db')

const getHabit = async (_id) => {
  const Habit = db.Mongoose.model('habits', db.HabitSchema, 'habits')
  const habit = await Habit.findOne({
    _id,
  })
    .lean()
    .exec()
  return habit
}

module.exports = getHabit
