const { gql } = require('apollo-server');

module.exports = gql`

type Query{
   school( id:ID
      firstName:String,
      lastName:String,
      birthDate:String 
      ):[School],
    schoolById(id:ID):School
}

type Mutation{
      addNewStudent(firstName:String!,lastName:String!,birthDate:String!):SchoolType!
}


input studentInput{
   id:ID
   firstName:String,
   lastName:String,
   birthDate:String 
}
type SchoolType{
   firstName:String,
   lastName:String,
   birthDate:String 
}

type School{
   id:ID!
   firstName:String,
   lastName:String,
   birthDate:String 
}`
