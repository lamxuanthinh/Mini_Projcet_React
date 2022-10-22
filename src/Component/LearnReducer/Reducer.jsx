import React from 'react'
import { useReducer } from 'react';
import { useState } from 'react'


const InitialValues = 0;
const DOWN_VALUE = 'down';
const UP_VALUE = 'up';

const reducer = (state, action) => {
    switch (action) {
      case UP_VALUE:
        return state + 1;
      case DOWN_VALUE:
        return state - 1;
      default:
        throw new Error('Invalid');
    }
}

const Reducer = () => {
  const [count , dispatch] = useReducer(reducer, InitialValues);
  return (
    <>
      <h1>Learning Reducer</h1>
      <h3>{count}</h3>
      <button onClick={()=> {dispatch(UP_VALUE)}} >
        UP
      </button>
      <button onClick={()=> {dispatch(DOWN_VALUE)}} >
        DOWN
      </button>
    </>
  )
}

export default Reducer
