const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const captainSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, 'First name must be at least 3 characters long'],
        },
        lastname: {
            type: String,
            minlength: [3, 'Last name must be at least 3 characters long'],
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: true,
        select:false, // Password should not be returned in queries
        minlength: [6, 'Password must be at least 6 characters long'],
    },
    socketId: {
        type: String,
    },
    isOnline: {
        type: Boolean,
        default: false,
    },
    vehicle: {
        color : {
            type: String,
            required: true,
            minlength: [3, 'Color must be at least 3 characters long'],
        },
        plate : {
            type: String,
            required: true,
            unique: true,
            match: [/^[A-Z]{2}\s\d{2}\s[A-Z]{2}\s\d{4}$/, 'Please fill a valid vehicle plate number']
        },
        capacity: {
            type: Number,
            required: true,
            min: [1, 'Capacity must be at least 1'],
            max: [10, 'Capacity cannot exceed 10']
        },
        vehicleType: {
            type: String,
            required: true,
            enum: ['car', 'bike', 'auto']
        }
    },
    location: {
        latitude: {
            type: Number,
        },
        longitude: {
            type: Number,
        }
    },
});


captainSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({ _id: this._id}, process.env.JWT_SECRET, {
        expiresIn: '24h' // Token will expire in 24 hours
    })
    return token;
}

captainSchema.methods.comparePassword = async function(candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);  
};

captainSchema.statics.hashPassword = async function(password) {
    return await bcrypt.hash(password, 10); // Hash the password with a salt rounds of 10
};

const captainModel = mongoose.model('Captain', captainSchema);

module.exports = captainModel;
