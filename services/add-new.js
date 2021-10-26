const addNew = require('./../repository/add-new')
const schema = require('./../schemas/habit')

module.exports = async (body) => {
  const { error, value } = schema.validate(body, {
    abortEarly: false,
  })

  if (error) {
    const response = {
      name: 'ERR: erro ao validar dados',
      errors: error.details.map((x) => ({
        message: x.message,
        field: x.context.key,
      })),
    }

    return response
  } else {
    const message = await addNew(value)

    return message
  }
}
