const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/habit_tracker')

const habitSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    required_days: Object,
    history: Array,
    // has_reminder: Boolean,
    // reminder_hour: String,
    // reminder_note: String,
    status: String,
  },
  { collection: 'habits' }
)

module.exports = { Mongoose: mongoose, HabitSchema: habitSchema }
