const mongoose  = require('mongoose');

const lessonSchema = new mongoose.Schema({
  title: { type: String, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  creator: String,
  city: String,
  competencies: { type: String, required: true },
  taughtBy: { type: String, required: true },
  lessonNotes: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Lesson', lessonSchema);
