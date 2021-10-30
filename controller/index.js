const addNew = require('./../services/add-new')
const getAll = require('./../services/get-all')
const getHabit = require('./../services/get-habit')
const updateHabit = require('./../services/update-habit')
const deleteHabit = require('./../services/delete-habit')
const doneTodayHabit = require('./../services/done-today-habit')
const undoneHabit = require('./../services/undone-habit')

module.exports = (express) => {
  let api = express.Router()

  api.post('/habits/new', async (req, res) => {
    const message = await addNew(req.body)
    res.send(message)
  })

  api.get('/habits/all', async (_, res) => {
    const habits = await getAll()
    res.send(habits)
  })

  api.get('/habits/get/:id', async function (req, res) {
    const id = req.params.id
    const habit = await getHabit(id)
    res.send(habit)
  })

  api.put('/habits/update/:id', async function (req, res) {
    const _id = req.params.id
    const habit = await updateHabit({ _id, body: req.body })
    res.send(habit)
  })

  api.delete('/habits/delete/:id', async function (req, res) {
    const _id = req.params.id
    const habit = await deleteHabit(_id)
    res.send(habit)
  })

  api.put('/habits/done-today/:id', async function (req, res) {
    const _id = req.params.id
    const habit = await doneTodayHabit(_id)
    res.send(habit)
  })

  api.put('/habits/undone/:id', async function (req, res) {
    const _id = req.params.id
    const body = req.body
    const habit = await undoneHabit({ _id, body })
    res.send(habit)
  })

  return api
}
