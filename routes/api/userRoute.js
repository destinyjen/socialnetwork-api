// create express router for user routes
const router = require('express').Router();

// create user controllers route
const {  createUser, getUsers, getSingleUser, updateUser, deleteUser, addFriend, removeFriend, } = require('../../controllers/userControllers');

// create routes for multiple users
router.route('/').get(getUsers).post(createUser);

// create routes for single user
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// create routes for user friends
router.route('/:userId/friends').post(addFriend);

router.route('/:userId/friends/:friendId').delete(removeFriend);
// export router
module.exports = router;
