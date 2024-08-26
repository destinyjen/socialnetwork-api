// create router for express
const router = require('express').Router();

// import thought controllers
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtControllers');

// create routes for multiple thoughts
router.route('/').get(getThoughts).post(createThought);
// create routes for single thought
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);
// create routes for single reactions and remove reactions
router.route('/:thoughtId/reactions').post(addReaction)

router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

// export router
module.exports = router;  // export the router