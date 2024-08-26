// // create mongoose library
// const mongoose = require('mongoose');

// create a schema for the reaction model
const { Schema, Types, model } = require("mongoose");

// create a schema for the reaction model
const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => new Date(timestamp).toLocaleString(),
    },

}, {
    toJSON: {
        getters: true,
    },
});

const Reaction = model("Reaction", reactionSchema);  // This line creates a Mongoose model for the reaction schema.

// create export for the reaction schema
module.exports = Reaction;  // This line exports the reaction schema for use in other files.<|fim_suffix|>// This code defines a Mongoose schema for a reaction model, which is used to represent reactions to thoughts in a social media application.    