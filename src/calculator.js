// src/Calculator.js
import React, { useState } from 'react';

function Calculator() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleButtonPress = (value) => {
    if (value === '=') {
      try {
        setOutput(eval(input));
      } catch (error) {
        setOutput('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setOutput('');
    } else {
      setInput(input + value);
    }
  };

  const buttons = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', 'C', '=', '+'];

  return (
    <div className="calculator">
      <div className="display">
        {input || '0'}
        <div className="result">{output}</div>
      </div>
      <div className="buttons">
        {buttons.map((button, index) => (
          <button key={index} onClick={() => handleButtonPress(button)}>
            {button}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Calculator;

