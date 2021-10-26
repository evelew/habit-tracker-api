const addNew = require('./../services/add-new')
const getAll = require('./../services/get-all')

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

  return api
}
