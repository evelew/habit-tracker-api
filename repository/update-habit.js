const db = require('./../_db')

const updateHabit = async ({ _id, body }) => {
  const Habit = db.Mongoose.model('habits', db.HabitSchema)

  await Habit.updateOne({ _id }, body)

  return `Hábito atualizado com sucesso!`
}

module.exports = updateHabit
