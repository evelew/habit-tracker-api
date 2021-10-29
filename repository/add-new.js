const db = require('./../_db')

const addNew = async (data) => {
  const Habits = db.Mongoose.model('habits', db.HabitSchema)
  const newHabits = new Habits({ ...data })

  return newHabits
    .save()
    .then((habits) => {
      return `Novo hábito "${habits.name}" criado com sucesso!`
    })
    .catch((err) => {
      console.log('ERR: ', err)
      return 'ERRO: Alguma coisa deu errado!'
    })
}

module.exports = addNew
