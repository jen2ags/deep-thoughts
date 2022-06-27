// import the gql tagged template function
const { gql } = require('apollo-server-express');

//create our typeDefs
const typeDefs = gql
    `
type User {
    _id: ID
    username: String
    email: String
    friendCount: Int
    thoughts: [Thought]
    friends: [User]
}

type Thought {
    _id: ID
    thoughtText: String
    createdAt: String
    username: String
    reactionCount: Int
    reactions: [Reaction]
}  

type Reaction {
    _id: ID
    reactionBody: String
    createdAt: String
    username: String
}
    
type Query {
    thoughts(username: String): [Thought]
    thought(_id: ID!): Thought
    users: [User]
    user(username: String!): User

}

 
type Mutation {
    login(email: String!, password: String!): User
    assUser(username: String!, email: String!, password: String!): User
}
`;

// ! indicates that the argument is required (lines 42 & 43) 
// export the typeDefs
module.exports = typeDefs;