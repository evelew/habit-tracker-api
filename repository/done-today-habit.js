const db = require('../_db')

const doneTodayHabit = async ({ _id, date }) => {
  const Habit = db.Mongoose.model('habits', db.HabitSchema)

  return Habit.updateOne(
    { _id },
    {
      $addToSet: { history: date },
    }
  )
    .then(() => {
      return 'Hábito marcado como feito com sucesso!'
    })
    .catch((err) => {
      console.error('ERR:', err)
      return 'ERRO: Alguma coisa deu errado!'
    })
}

module.exports = doneTodayHabit
