const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    otp: { type: String, required: true },
    expiresAt: { type: Date, required: true, expires: 600 }  // 600 seconds = 10 minutes
});

module.exports = mongoose.model('Otp', otpSchema);
