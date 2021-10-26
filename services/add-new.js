const Joi = require('joi')

const addNew = require('./../repository/add-new')

module.exports = async (body) => {
  const schema = Joi.object({
    name: Joi.string().alphanum().max(30).required(),
    description: Joi.string().alphanum().max(80),
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

  const data = {
    name: body.name,
    description: body.description,
    required_days: body.required_days,
    has_reminder: body.has_reminder,
    reminder_hour: body.reminder_hour,
    reminder_note: body.reminder_note,
    status: body.status,
  }

  const message = await addNew(data)

  return message
}
