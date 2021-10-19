const addNew = require('./../services/add-new')

module.exports = (express) => {
  let api = express.Router()

  api.post('/habits/new', async (req, res) => {
    const message = await addNew(req.body)
    res.send(message)
  })

  return api
}
