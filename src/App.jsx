import { useState } from "react";
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import  {calculateInvestmentResults} from "./util/investment";
import Result from "./components/Result";

function App() {
  const [initialInvestment, setInitialInvestment] = useState(10000);
  const [annualInvestment, setannualInvestment] = useState(1200);
  const [expectedReturn, setExpectedReturn] = useState(6);
  const [duration, setDuration] = useState(10);
  // const [durationError, setDurationError] = useState(false);

  const durationCorrect = duration>=1;
  function handleInitialInvestmentChange(event){
    setInitialInvestment(+event.target.value);
    console.log(event.target.value);
 }

 function handleAnnualInvestmentChange(event){
  setannualInvestment(+event.target.value);
  console.log(event.target.value);
}

function handleExpectedReturnChange(event){
  setExpectedReturn(+event.target.value);
  console.log(event.target.value);
}

function handleDurationChange(event){
//   if (+event.target.value < 1) {
//     setDurationError(true);
// }
//    else{
//     setDurationError(false);
//    }
  setDuration(+event.target.value);
  console.log(event.target.value);
}

let result;
 result = calculateInvestmentResults({ initialInvestment , annualInvestment , expectedReturn , duration});



  return (
    <>
    <Header/>
   <UserInput  changeInitialInvestment={handleInitialInvestmentChange} changeAnnualInvestment={handleAnnualInvestmentChange} changeExpectedReturn={handleExpectedReturnChange} changeDuration={handleDurationChange}/>
   {/* <Result output={result}/> */}
   {!durationCorrect && <p className="center">Duration cannot be less than 1</p>}
            {durationCorrect && <Result output={result}/>}
    </>
  )
}

export default App
