const db = require('./../_db')

const addNew = async (data) => {
  const Habits = db.Mongoose.model('habits', db.HabitSchema)
  const newHabits = new Habits({ ...data })

  return newHabits
    .save()
    .then((habits) => {
      return `Novo hábito "${habits.name}" criado com sucesso!`
    })
    .catch((err) => err)
}

module.exports = addNew
