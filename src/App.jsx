import React ,{useState}from 'react'
import Header from "./components/Header"
import InputUser from "./components/InputUser"
import Result from "./components/Result"

function App() {
      const [inputUser, setInputUser] = useState({
        initialValue: 100,
        annualValue:200,
        expectedRate:1,
        duration:5
    })
    const inputValid = inputUser.duration >0;
    function handleChange(identifier, newVal){
        setInputUser((prev)=>{
            return{
                ...prev,
               [identifier]: +newVal
            }
        })
    }
 
  return (
    <>
    <Header/>
    <InputUser inputUser={inputUser} handleChange={handleChange}/>
    {!inputValid && <p className='center'>Enter duration greater than 0</p>}
   {inputValid && <Result resultInput={inputUser}/>}
    </>
  )
}

export default App
