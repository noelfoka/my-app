import React, { useState } from 'react';
import { Button, Input, Text } from '@mantine/core';
import './index.css';

function App() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    if (value === 'C') {
      setExpression('');
      setResult('');
    } else if (value === '←') {
      setExpression(expression.slice(0, -1));
    } else if (value === '=') {
      try {
        // eslint-disable-next-line no-eval
        setResult(eval(expression));
      } catch (error) {
        setResult('Error');
      }
    } else {
      setExpression(expression + value);
    }
  };

  return (
    <div className="App">
      <div className="Calculator">
        <Input
          value={expression}
          placeholder="0"
          onChange={(event) => setExpression(event.target.value)}
          style={{ marginBottom: 16 }}
        />
        <Text size="xl" weight={700} style={{ marginBottom: 16 }}>
          {result}
        </Text>
        <div className="ButtonRow">
          <Button variant="outline" onClick={() => handleButtonClick('C')}>
            C
          </Button>
          <Button variant="outline" onClick={() => handleButtonClick('←')}>
            ←
          </Button>
          <Button variant="outline" onClick={() => handleButtonClick('%')}>
            %
          </Button>
          <Button variant="outline" onClick={() => handleButtonClick('/')}>
            ÷
          </Button>
        </div>
        <div className="ButtonRow">
          <Button variant="outline" onClick={() => handleButtonClick('7')}>
            7
          </Button>
          <Button variant="outline" onClick={() => handleButtonClick('8')}>
            8
          </Button>
          <Button variant="outline" onClick={() => handleButtonClick('9')}>
            9
          </Button>
          <Button variant="outline" onClick={() => handleButtonClick('*')}>
            ×
          </Button>
        </div>
        <div className="ButtonRow">
          <Button variant="outline" onClick={() => handleButtonClick('4')}>
            4
          </Button>
          <Button variant="outline" onClick={() => handleButtonClick('5')}>
            5
          </Button>
          <Button variant="outline" onClick={() => handleButtonClick('6')}>
            6
          </Button>
          <Button variant="outline" onClick={() => handleButtonClick('-')}>
            -
          </Button>
        </div>
        <div className="ButtonRow">
          <Button variant="outline" onClick={() => handleButtonClick('1')}>
            1
          </Button>
          <Button variant="outline" onClick={() => handleButtonClick('2')}>
            2
          </Button>
          <Button variant="outline" onClick={() => handleButtonClick('3')}>
            3
          </Button>
          <Button variant="outline" onClick={() => handleButtonClick('+')}>
            +
          </Button>
        </div>
        <div className="ButtonRow">
          <Button variant="outline" onClick={() => handleButtonClick('0')}>
            0
          </Button>
          <Button variant="outline" onClick={() => handleButtonClick('.')}>
            .
          </Button>
          <Button variant="outline" onClick={() => handleButtonClick('=')}>
            =
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
