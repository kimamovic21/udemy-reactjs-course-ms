import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

const App = () => {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 1
  });

  const inputIsValid = userInput.duration >= 1;

  if (userInput.duration >= 25) return;

  const handleChangeInput = (inputIdentifier, newValue) => {
    setUserInput(prevUserInput => {
        return {
            ...prevUserInput,
            [inputIdentifier]: +newValue
        };
    });
  };

  return (
    <>
      <Header />
      <UserInput 
          userInput={userInput}
          onChangeInput={handleChangeInput}
      />
      {!inputIsValid && (<p className="center">Please enter a duration greater than zero.</p>)}
      {inputIsValid && (<Results input={userInput} />)}
    </>
  );
};

export default App;
