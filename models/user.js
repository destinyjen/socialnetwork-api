// create mongoose library
const mongoose = require('mongoose');

// create a schema for the user model
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /.+\@.+\..+/,
    },
    thoughts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Thought',
    }],
    friends: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
}, {
    toJSON: {
        virtuals: true,
    },
});

// create a virtual property for the friend count
userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

// create the User model
const User = mongoose.model('User', userSchema);

// export the User model
module.exports = User;  // This line exports the User model for use in other files. <|fim_suffix|>// Path: models/reaction.js   