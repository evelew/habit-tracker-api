const db = require('./../_db')

const updateHabit = async ({ _id, body }) => {
  const Habit = db.Mongoose.model('habits', db.HabitSchema)

  return Habit.updateOne({ _id }, body)
    .then(() => {
      return 'Hábito atualizado com sucesso!'
    })
    .catch((err) => {
      console.error('ERR:', err)
      return 'ERRO: Alguma coisa deu errado!'
    })
}

module.exports = updateHabit
