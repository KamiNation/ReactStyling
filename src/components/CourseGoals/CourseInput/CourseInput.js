import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import styles from  './CourseInput.module.css';
// import styled from 'styled-components'


// const FormControl = styled.div`

//   margin: 0.5rem 0;


// & label {
//   font-weight: bold;
//   display: block;
//   margin-bottom: 0.5rem;
//   color:  ${props => (props.invalid ? 'red': 'black') };
  
// }

// & input {
//   display: block;
//   width: 100%;
//   border: 1px solid ${props => (props.invalid ? 'red': '#ccc') };
//   background: ${props => (props.invalid ? '#ffd7d7': 'transparent') };
//   font: inherit;
//   line-height: 1.5rem;
//   padding: 0 0.25rem;
// }

// & input:focus {
//   outline: none;
//   background: #fad0ec;
//   border-color: #8b005d;
// }




// `








const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');

  const [isValid, setIsValid] = useState(true);


  const goalInputChangeHandler = event => {
    if (event.target.value.trim() > 0 ){
      setIsValid(true)
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();

    // trim is a built-in method that removes excess
    // whitespace at the beginning or the end and has been used 
    // here to rule out that the user entered a bunch of blank


    // check if the trimmed value length equals to zero, 
    // then the input is empty
    if(enteredValue.trim().length === 0)
    {
      setIsValid(false)
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
        <label>Course Goal</label>
        <input 
        type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
