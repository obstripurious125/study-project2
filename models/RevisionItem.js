const mongoose = require('mongoose');

const revisionItemSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    questionId: { type: String, required: true },  // e.g., "q1" from DPP
    lectureId: { type: String, required: true },
    lectureName: String,
    questionText: String,
    options: [String],
    correctAnswer: Number,
    nextReviewDate: { type: Date, required: true },
    easeFactor: { type: Number, default: 2.5 },
    interval: { type: Number, default: 1 },       // days
    repetitions: { type: Number, default: 0 }
});

revisionItemSchema.index({ userId: 1, nextReviewDate: 1 });

module.exports = mongoose.model('RevisionItem', revisionItemSchema);
