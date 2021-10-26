const Joi = require('joi')

const addNew = require('./../repository/add-new')

module.exports = async (body) => {
  const schema = Joi.object({
    name: Joi.string().max(30).required(),
    description: Joi.string().max(80),
    required_days: Joi.object({
      sunday: Joi.boolean(),
      monday: Joi.boolean(),
      tuesday: Joi.boolean(),
      wednesday: Joi.boolean(),
      thursday: Joi.boolean(),
      friday: Joi.boolean(),
      saturday: Joi.boolean(),
    }).required(),
    has_reminder: Joi.boolean().required(),
    reminder_hour: Joi.date(), // TODO: usar essa chave pra definir horário do lembrete
    reminder_note: Joi.string().max(80),
    status: Joi.string().valid('working', 'done', 'waiting').required(),
  })

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
