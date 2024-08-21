// create express router for user routes
const router = require('express').Router();

// create user controllers route
const { userControllers } = require('../../controllers/userControllers');

// create routes for multiple users
router.route('/').get(userControllers.getUsers).post(userControllers.createUser);

// create routes for single user
router.route('/:userId').get(userControllers.getSingleUser).put(userControllers.updateUser).delete(userControllers.deleteUser);

// create routes for user friends
router.route('/:userId/friends/:friendId').post(userControllers.addFriend).delete(userControllers.removeFriend);

// export router
