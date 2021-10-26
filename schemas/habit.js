const Joi = require('joi')

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
  // has_reminder: Joi.boolean().required(),
  // reminder_hour: Joi.date(), // TODO: usar essa chave pra definir horário do lembrete
  // reminder_note: Joi.string().max(80),
  status: Joi.string().valid('working', 'done', 'waiting').required(),
})

module.exports = schema
