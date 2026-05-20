const mongoose = require('mongoose');

const studyLogSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    date: {
        type: Date,
        required: true,
        default: () => {
            const now = new Date();
            now.setUTCHours(0, 0, 0, 0);
            return now;
        }
    },
                                           activities: [{
                                               startTime: String,   // "06:00"
                                               endTime: String,     // "08:00"
                                               activity: String,    // "Quant: Simplification DPP"
                                               topic: String,       // optional
                                               notes: String
                                           }],
                                           totalMinutes: { type: Number, default: 0 },
                                           createdAt: { type: Date, default: Date.now }
});

studyLogSchema.index({ userId: 1, date: 1 }, { unique: true });

module.exports = mongoose.model('StudyLog', studyLogSchema);
