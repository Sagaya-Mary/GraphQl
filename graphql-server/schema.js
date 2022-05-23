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
      addNewStudent(student:studentInput):School
}


input studentInput{
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
