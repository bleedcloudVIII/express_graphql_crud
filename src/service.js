const { Sequelize } = require('sequelize');
// const User = require('./user.model');
const db = require('./db');
const User = db.user;
module.exports = class UserService {

    getAllUsers = async () => {
        const users = await User.findAll();
        return users;
    }

    getUser = async (id) => {
        const user = await User.findByPk(id);
        return user;
    }

    createUser = async (obj) => {
        const user = await  User.create(obj);
        return user;
    }

    updateUser = async (obj) => {
        await User.update({...obj}, {where: {id: obj.id}});
        const user = User.findOne({where: {id: obj.id}});
        return user;
    }
}




// try {
//     await sequelize.authenticate()
//     console.log('Соединение с БД было успешно установлено')
// } catch (e) {
//     console.log('Невозможно выполнить подключение к БД: ', e)
// }