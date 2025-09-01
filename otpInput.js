import React, { useRef } from 'react';
import './style.css';

export default function App() {
  const inputRefs = useRef([
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ]);
  const inputCount = 5;

  const handleChange = (event, index) => {
    if (event.target.value != '') {
      if (index < inputCount - 1) {
        inputRefs.current[index + 1].current.focus();
      }
    }
  };

  const handleKeyDown = (event, index) => {
    if (event.key === 'Backspace') {
      if (index > 0) {
        if (event.target.value === '') {
          inputRefs.current[index - 1].current.focus();
        } else {
          event.target.value = '';
        }
      }
    }
  };

  return (
    <div>
      <h1>Validate OTP</h1>
      <div className="container">
        <input
          key="0"
          type="text"
          maxLength="1"
          inputMode="numeric"
          ref={inputRefs.current[0]}
          onChange={(event) => handleChange(event, 0)}
          onKeyDown={(event) => handleKeyDown(event, 0)}
          name="otp-box"
          className="digit"
        />
        <input
          key="1"
          type="text"
          maxLength="1"
          inputMode="numeric"
          ref={inputRefs.current[1]}
          onChange={(event) => handleChange(event, 1)}
          onKeyDown={(event) => handleKeyDown(event, 1)}
          name="otp-box"
          className="digit"
        />
        <input
          key="2"
          type="text"
          maxLength="1"
          inputMode="numeric"
          ref={inputRefs.current[2]}
          onChange={(event) => handleChange(event, 2)}
          onKeyDown={(event) => handleKeyDown(event, 2)}
          name="otp-box"
          className="digit"
        />
        <input
          key="3"
          type="text"
          maxLength="1"
          inputMode="numeric"
          ref={inputRefs.current[3]}
          onChange={(event) => handleChange(event, 3)}
          onKeyDown={(event) => handleKeyDown(event, 3)}
          name="otp-box"
          className="digit"
        />
        <input
          key="4"
          type="text"
          maxLength="1"
          inputMode="numeric"
          ref={inputRefs.current[4]}
          onChange={(event) => handleChange(event, 4)}
          onKeyDown={(event) => handleKeyDown(event, 4)}
          name="otp-box"
          className="digit"
        />
      </div>
    </div>
  );
}
