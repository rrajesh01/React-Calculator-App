import './App.css';
import ButtonContainer from './components/ButtonContainer';
import Display from './components/Display';
import { useState } from 'react';

function App() {
  const [calValue, setCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      try {
        const result = eval(calValue);
        setCalVal(result.toString());
      } catch (error) {
        setCalVal("Error");
      }
    } else {
      const newDisplayVal = calValue + buttonText;
      setCalVal(newDisplayVal);
    }
  };

  return (
    <div className="calculator">
      <Display displayValue={calValue} />
      <ButtonContainer onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;
