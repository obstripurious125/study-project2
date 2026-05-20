const mongoose = require('mongoose');

const topicPerformanceSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    topic: { type: String, required: true },
    subtopic: { type: String, default: '' },
    totalQuestions: { type: Number, default: 0 },
    correct: { type: Number, default: 0 },
    lastUpdated: { type: Date, default: Date.now }
}, {
    timestamps: true,
    toJSON: { virtuals: true },   // ✅ Add this
    toObject: { virtuals: true }   // Good practice for consistency
});

topicPerformanceSchema.index({ userId: 1, topic: 1, subtopic: 1 }, { unique: true });

topicPerformanceSchema.virtual('accuracy').get(function() {
    if (this.totalQuestions === 0) return 0;
    return (this.correct / this.totalQuestions) * 100;
});

module.exports = mongoose.model('TopicPerformance', topicPerformanceSchema);
