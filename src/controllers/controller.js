const Mongo = require('./../database/mongo');

const getUserModel = async () => {
    const database = new Mongo();
    const models = await database.models();
    return models;
}

const getUSer = async () => {
    const {
        User
    } = await getUserModel();

    const users = User.find();

    return users;
};

const createUSer = async ({
    name
}) => {
    const {
        User
    } = await getUserModel();

    const user = new User({
        name
    });

    user.save();
};

const updateUser = async ({
    id
}, {
    name
}) => {
    const {
        User
    } = await getUserModel();

    return User.update({
        _id: id
    }, {
        name
    });
};

const deleteUser = async ({
    id
}) => {
    const {
        User
    } = await getUserModel();

    return User.deleteOne({
        _id: id
    });
};

module.exports = {
    getUSer,
    createUSer,
    updateUser,
    deleteUser
}