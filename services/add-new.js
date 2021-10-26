const addNew = require('./../repository/add-new')

module.exports = async (body) => {
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
