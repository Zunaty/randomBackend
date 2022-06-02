const router = require('express').Router();

const {
    getAllUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser
} = require('../../controllers/user-controllers');

// /api/user/
router.route('/')
    .get(getAllUsers)
    .post(createUser);

// /api/user/:id
router.route('/:id')
    .get(getOneUser)
    .put(updateUser)
    .delete(deleteUser);

module.exports = router;