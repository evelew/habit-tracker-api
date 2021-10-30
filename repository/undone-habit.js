const db = require('./../_db')

const updateHabit = async ({ _id, date }) => {
  const Habit = db.Mongoose.model('habits', db.HabitSchema)

  return Habit.updateOne(
    { _id },
    {
      $pull: { history: date },
    }
  )
    .then(() => {
      return 'Hábito atualizado com sucesso!'
    })
    .catch((err) => {
      console.error('ERR:', err)
      return 'ERRO: Alguma coisa deu errado!'
    })
}

module.exports = updateHabit
