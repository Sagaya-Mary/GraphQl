import { useQuery } from "@apollo/client"
import { FETCH_USER } from "../GraphQl/Query"
import { ActionTypes } from "./ActionTypes"

export const getAllStudents = (school) => {
    return{
        type:ActionTypes.GET_ALL_STUDENTS,
        payload:school
    }
}

export const getStudentById =(school)=>{
    return{
        type:ActionTypes.GET_BYID_STUDENT,
        payload:school
    }
}

export const addStudent=()=>{
    return{
        type:ActionTypes.ADD_STUDENT,
        
    }
}

