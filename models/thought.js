// import mongoose library

const mongoose = require('mongoose');

// create a schema for the thought model
const { Schema, model } = mongoose;

// create a schema for the reaction model
const reactionSchema = require('./Reaction');

// create a schema for the thought model
const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => new Date(timestamp).toLocaleString(),
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [reactionSchema],
}, {
    toJSON: {
        virtuals: true,
    },
    getters: true,
});

// create a virtual property for the reaction count
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

// create the Thought model
const Thought = model('Thought', thoughtSchema);

// export the Thought model
module.exports = Thought;  // This line exports the Thought model for use in other files. <|fim_suffix|>// Path: models/reaction.js
   
    