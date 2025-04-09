/*
Uncontrolled components in React are form elements that manage their own state internally rather than relying on React to manage their state. 
This means that the form data is handled by the DOM itself, and React does not have direct control over the input values.
*/


import React, { useState, useRef } from 'react';

const UncontolledComponent = () => {
  const inputRef = useRef(null);
  const [tag, setTag] = useState('No Tag Found');
  console.log('Trial executed');

  const formSubmitHandler = (event) => {
    debugger;
    event.preventDefault();
    console.log('submit executed');
   setTag(inputRef?.current?.value);
    inputRef.current.value = '';
  };
  return (
    <>
      <form onSubmit={formSubmitHandler}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" ref={inputRef} id="name" />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>Tags: {tag}</div>
    </>
  );
};

export default UncontolledComponent;
