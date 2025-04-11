import React, { useState } from 'react';
import styled from 'styled-components';

const StyledComponent = () => {
  const [name, setName] = useState('');
  const [tag, setTag] = useState('No Tag Found');
  console.log('StyledComponent executed');

  const inputChangeHandler = (event) => {
    setName(event.target.value);
  };

  const formSubmitHandler = (event) => {
    debugger;
    event.preventDefault();
    console.log('submit executed');
    setTag(name);
    setName('');
  };

  const StyledForm = styled.form`
    font-size: 25px;
    padding: 5px;
    margin: 2px;
    background: green;

    &:hover,
    &:active{
      background: red;
    }

    & label{
      color: #fff;
    }

     @media (max-width: 600px){
      font-size: 50px;
    }
  `;

  const StyledSubmitbutton = styled.button`
  background-color: violet;
  font-size: 18px;
  padding: 5px;
  margin: 10px;
  border-radius: 4px;
  color:#fff;
  border: none;
  
  &:hover{
    background: blue;
    color: #fff;
  }
  `;

  return (
    <>
      <StyledForm onSubmit={formSubmitHandler}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            value={name}
            onChange={inputChangeHandler}
            id="name"
          />
        </div>
        <StyledSubmitbutton type="submit">Submit</StyledSubmitbutton>
      </StyledForm>
      <div>Tags: {tag}</div>
    </>
  );
};

export default StyledComponent;
