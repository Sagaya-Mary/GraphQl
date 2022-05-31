import { gql } from '@apollo/client'

export const FETCH_USER = gql`
query{
     school{
        id
        firstName
        lastName
        birthDate
     } 
}
`

export const FETCH_SINGLE_USER = gql`
query {
     schoolById(id:2){
        id
        firstName
        lastName
        birthDate
     } 
     
}
`
export const ADD_ALL = gql`
mutation CREATE_STORE($firstName:String!,$lastName:String!,$birthDate:String!) {
   addNewStudent(firstName:$firstName,lastName:$lastName,birthDate:$birthDate) {
      
             firstName
             lastName
             birthDate
     }
   }`

