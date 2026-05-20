const mongoose = require('mongoose');

const plannerTaskSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        default: ''
    },
    subject: {
        type: String,
        enum: ['quant', 'reasoning', 'english', 'banking', 'current', 'other'],
        default: 'other'
    },
    dueDate: {
        type: Date,
        required: true,
        index: true
    },
    priority: {
        type: String,
        enum: ['low', 'medium', 'high'],
        default: 'medium'
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Date,
        default: null
    },
    order: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});

// Compound index for efficient queries
plannerTaskSchema.index({ userId: 1, dueDate: 1, completed: 1 });

module.exports = mongoose.model('PlannerTask', plannerTaskSchema);
