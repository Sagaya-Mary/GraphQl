import React, { useEffect, useRef, useState } from "react";
import { ADD_ALL } from '../GraphQl/Query';

import { useMutation } from '@apollo/client'

function AddStudent(props) {

  const idRef = useRef(null);
  const nameRef = useRef(null);
  const dobRef = useRef(null);
  const [addTodo, { data, error }] = useMutation(ADD_ALL);



  useEffect(() => {
    if (error) {
      console.error(error);
    } else {

      console.log(data);
    }
  }, [data, error]);
  const addStudentHandler = (e) => {
    e.preventDefault();

    addTodo({
      variables: {
        firstName: idRef.current.value,
        lastName: nameRef.current.value,
        birthDate: dobRef.current.value,
      },

    });

  };


  return (
    <div>
      <form onSubmit={addStudentHandler}>
        <br />
        <br />
        <input ref={idRef} type="text" placeholder="first Name" required />
        <br />
        <br />
        <input ref={nameRef} type="text" placeholder="last Name" required />
        <br />
        <br />
        <input ref={dobRef} type="text" placeholder="birth Date" required />
        <br />
        <br />
        <button >Add</button>

        <br />
        <br />

      </form>
    </div>
  );
}

export default AddStudent;