const { buildSchema } = require('graphql');

const schema = buildSchema(`

    type User {
        id: ID
        firstname: String
        nickname: String
        age: Int
    }

    input UserInput {
        id: ID
        firstname: String!
        nickname: String!
        age: Int!
    }

    type Query {
        getAllUsers: [User]
        getUser(id: ID): User
    }

    type Mutation {
        createUser(input: UserInput): User
        updateUser(input: UserInput): User
        deleteUser(input: UserInput): User
    }
`);

module.exports = schema;