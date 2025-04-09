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
