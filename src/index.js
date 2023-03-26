const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const schema = require('./schema');
const UserService = require('./service');
const db = require('./db');
const app = express();
app.use(cors());

const userService = new UserService;

const root = {
    getAllUsers: () => {
        return userService.getAllUsers();
    },
    getUser: ({ id }) => {
        return userService.getUser(id);
    },
    createUser: ({ input }) => {
        return userService.createUser(input);
    },
    updateUser: ({ input }) => {
        return userService.updateUser(input);
    },
    deleteUser: ({ input }) => { // Костыльное удаление
        return userService.deleteUser(input);
    }
}

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema,
    rootValue: root,
}));

db.sequelize.sync().then(async () => {
    app.listen(3000);
}).catch((err) => {
    console.log("Failed to sync db: " + err.message);
});

