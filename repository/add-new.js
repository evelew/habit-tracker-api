const db = require('./../_db')

const addNew = async (data) => {
  const Habits = db.Mongoose.model('habits', db.HabitsSchema, 'habits')

  console.log('dados recebidos: ', data)

  const {
    name,
    description,
    required_days,
    has_reminder,
    reminder_hour,
    reminder_note,
    status,
  } = data
  const newHabits = new Habits({
    name,
    description,
    required_days,
    has_reminder,
    reminder_hour,
    reminder_note,
    status,
  })

  return newHabits
    .save()
    .then((habits) => {
      return `Novo hábito "${habits.name}" criado com sucesso!`
    })
    .catch((err) => err)
}

module.exports = addNew
