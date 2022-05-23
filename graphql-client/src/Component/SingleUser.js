import { useQuery } from '@apollo/client'
import React from 'react'
import { FETCH_SINGLE_USER } from '../GraphQl/Query'
import { useState } from 'react'
import { useEffect } from 'react'
import './index.css'

export default function UserListing() {


    const { data, loading } = useQuery(FETCH_SINGLE_USER);

    console.log(data);
    const [schoolById, setSchool] = useState(data);

    useEffect(() => {
        if (data) {
            setSchool(data);
        }
    }, [data, schoolById])

    const dataListing = () => {
        if (loading) {
            return (
                <div>Loading...</div>
            )
        }
        else {
            console.log(data.schoolById.firstName);
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
