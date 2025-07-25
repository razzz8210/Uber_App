const mongoose = require('mongoose');

// Blacklist Token Schema
const blacklistTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 86400
    }
});

module.exports = mongoose.model('BlacklistToken', blacklistTokenSchema);