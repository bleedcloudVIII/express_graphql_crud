const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const schema = require('./schema');
const users = [
    {
        id: 1,
        firstname: 'Yurii',
        nickname: 'ktoto',
        age: 19
    },
];

const app = express();
app.use(cors());

const createUser = input => {
    const id = Date.now();
    const user = {
        id, ...input
    }
    users.push(user);
    return user;
}

const updateUser = (id, input) => {
    const user = users.map(user => {
        if (user.id === id) {
            user.age = input.age;
            user.nickname = input.nickname;
            user.firstname = input.firstname;
        }
        return user;
    });
    return user[0];
}

const root = {
    getAllUsers: () => {
        return users;
    },
    getUser: ({ id }) => {
        return users.find(user => user.id == id);
    },
    createUser: ({ input }) => {
        return createUser(input);
    },
    updateUser: ({ input }) => {
        console.log(121);
        return updateUser(input);
    }
}

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema,
    rootValue: root,
}));

app.listen(3000, () => {
    console.log('Server starting...');
});