/*Controlled components in React are form elements whose values are controlled by React state. 
This means that the input values are stored in the component's state, 
and any changes to the input are handled through state updates. Controlled components provide a way to manage form data in a predictable manner.
*/

import React, { useState } from 'react';

const ControlledComponent = () => {
  const [name, setName] = useState('');
  const [tag, setTag] = useState('No Tag Found');
  console.log('ControlledComponent executed');
  
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
  
  return (
    <>
      <form onSubmit={formSubmitHandler}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            value={name}
            onChange={inputChangeHandler}
            id="name"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>Tags: {tag}</div>
    </>
  );
};

export default ControlledComponent;
