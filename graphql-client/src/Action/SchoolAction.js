import { useQuery } from "@apollo/client"
import { FETCH_USER } from "../GraphQl/Query"
import { ActionTypes } from "./ActionTypes"

export const getAllStudents = (school) => {
    return{
        type:ActionTypes.GET_ALL_STUDENTS,
        payload:school
    }
}
export function GetAllStudent(dst){
   
    const {data,loading}=useQuery(FETCH_USER);
    return(dispatch)=>{ 
        console.log(data)
        dispatch(getAllStudents(data.dst))
    }
   
}