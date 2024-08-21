// create models for thoughts and users and express server
const Thought = require('./models/Thought');
const User = require('./models/User');

// export modules for thoughts and users with aysnc and await
// create thoughts and users with async and await
const createThought = async (req, res) => {
    try {
        const thought = await Thought.create(req.body);
        res.status(201).json(thought);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
// Create GET for all thoughts
const getThoughts = async (req, res) => {
    try {
        const thoughts = await Thought.find();
        res.status(200).json(thoughts);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Create GET for single thought by ID
const getSingleThought = async (req, res) => {
    try {
        const thought = await Thought.findById(req.params.thoughtId);
        if (!thought) {
            return res.status(404).json({ message: 'Thought not found' });
        }
        res.status(200).json(thought);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update thought by ID
const updateThought = async (req, res) => {
    try {
        const thought = await Thought.findByIdAndUpdate(req.params.thoughtId, req.body, { new: true });
        if (!thought) {
            return res.status(404).json({ message: 'Thought not found' });
        }
        res.status(200).json(thought);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete thought by ID
const deleteThought = async (req, res) => {
    try {
        const thought = await Thought.findByIdAndDelete(req.params.thoughtId);
        if (!thought) {
            return res.status(404).json({ message: 'Thought not found' });
        }
        res.status(200).json({ message: 'Thought deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Add reaction to thought
const addReaction = async (req, res) => {
    try {
        const thought = await Thought.findById(req.params.thoughtId);
        if (!thought) {
            return res.status(404).json({ message: 'Thought not found' });
        }
        thought.reactions.push(req.body);
        await thought.save();
        res.status(200).json(thought);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Remove reaction from thought
const removeReaction = async (req, res) => {
    try {
        const thought = await Thought.findById(req.params.thoughtId);
        if (!thought) {
            return res.status(404).json({ message: 'Thought not found' });
        }
        thought.reactions.pull(req.body.reactionId);
        await thought.save();
        res.status(200).json(thought);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Export all functions
module.exports = {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction,
};  // export all functions





// create function for new thoughts
 


