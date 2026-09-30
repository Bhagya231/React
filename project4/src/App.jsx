import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import UserInput from './components/UserInput'
import Results from './components/Results'

function App() {

  const [userInput,setUserInput] = useState({
      initialInvestment: 10000,
      annualInvestment: 1200,
      expectedReturn:6,
      duration:10
  })

  const inputValid = userInput.duration >= 1;

    function handleChange(inputIdentifier,newValue)
  {
     const value = +newValue;

    if (value < 0) {
        return;
    }
      setUserInput(prevUserInput =>{
          return {
              ...prevUserInput,[inputIdentifier]:  value
          }
      });
  }

  return (
    <>
      <Header />
      <main className='container py-4'>
        <UserInput userInput ={userInput}  onChange = {handleChange}/>

         {/* <Results  input = {userInput}/> */}

      {!inputValid && <p className='text-danger text-center mt-3'> Please enter a duration greater than zero.</p>}

      {inputValid && <Results  input = {userInput}/>}

      </main>
      
     
    </>
  );
}

export default App
