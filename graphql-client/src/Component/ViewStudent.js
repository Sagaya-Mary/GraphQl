import { useQuery } from '@apollo/client'
import React from 'react'
import { useLayoutEffect } from 'react'
import { useDispatch } from 'react-redux'
import { FETCH_USER } from '../GraphQl/Query'
import { Container } from '@material-ui/core'
import { useState } from 'react'
import { useEffect } from 'react'
import './index.css'
import { useSelector } from 'react-redux'
import { getAllStudents } from '../Action/SchoolAction'

export default function UserListing() {

    const dispatch = useDispatch();

    const { data, loading } = useQuery(FETCH_USER);

    console.log(data);

    const [school, setSchool] = useState(data);

    useEffect(() => {
        if (data) {
            setSchool(data);
            dispatch(getAllStudents(data));
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
            console.log(school);
            return (
                <div className='boundary'>
                    <div>
                        <Container maxWidth="lg" style={{
                            backgroundColor: 'wheat',
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                        }}>
                            <br />
                            <br />
                            <div>
                                <Container maxwidth="sm" style={{ textAlign: "center", backgroundColor: 'whitesmoke' }}>
                                    <h4>
                                        ALL STUDENTS DETAILS AVAILABLE HERE IS
                                    </h4>
                                </Container>
                                <br />
                                <br />
                            </div>
                            <Container maxWidth="md" style={{ overflowX: 'auto' }}>
                                <div className="conatiner">
                                    <div className="row">
                                        <table className="table table-light table-stripped table-hover m-auto">
                                            <thead className="table-dark">
                                                <tr className="table-secondary">
                                                    <th>ID</th>
                                                    <th>FIRST NAME</th>
                                                    <th>LAST NAME</th>
                                                    <th>
                                                        DOB
                                                    </th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {
                                                    school && school.school.map((list, key) => {
                                                        return (
                                                            <tr key={key}>
                                                                <td>{list.id}</td>
                                                                <td>{list.firstName}</td>
                                                                <td>{list.lastName}</td>
                                                                <td>{list.birthDate}</td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </Container>
                            <br />
                            <br />
                        </Container>
                    </div>

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
