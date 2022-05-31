import { useQuery } from '@apollo/client'
import React from 'react'
import { FETCH_SINGLE_USER } from '../GraphQl/Query'
import { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import './index.css'
import { getStudentById } from '../Action/SchoolAction'
import { useLayoutEffect } from 'react'

export default function UserListing() {


    const { data, loading } = useQuery(FETCH_SINGLE_USER);
    const dispatch = useDispatch();

    // console.log(data);
    const [school, setSchool] = useState(data);
    const idRef = useRef(null);
    useLayoutEffect(() => {
        if (data) {
            setSchool(data);
            dispatch(getStudentById(data));
            console.log(school);
        }
    }, [data, school])

    const dataListing = () => {
        if (loading) {
            return (
                <div>Loading...</div>
            )
        }
        else {
            //   console.log(school);
            return (
                <div>


                    <div > Id : {data.schoolById.id}</div>
                    <div >Student First Name : {data.schoolById.firstName}</div>
                    <div >Student Last Name : {data.schoolById.lastName}</div>
                    <div>Student DOB : {data.schoolById.birthDate}</div>


                </div>
            )
        }
    }
    return (
        <div>
            {dataListing()}
        </div>
    )
}
