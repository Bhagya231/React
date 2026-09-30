import { useState } from "react";
import { styled } from 'styled-components'

import Button from "./Button";
import Input from "./Input.jsx";

const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`


export default function UserInput()
{
    const [enteredEmail, setEnterEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);

    function handleInput(identifier, value)
    {
        if(identifier === 'email')
        {
            setEnterEmail(value);
        }
        else{
            setEnteredPassword(value);
        }
    }

    function handleLogin()
    {
        setSubmitted(true);
    }

    const emailNotValid = submitted && !enteredEmail.includes('@');
    const passwordNotValid = submitted && enteredPassword.trim().length < 6;

    return (
        <div id ="auth-inputs">
            {/* <div className="controls"> */}
            <ControlContainer>
                {/* <p> */}
                    {/* <Label htmlFor="user-email" $invalid = {emailNotValid} >Email</Label> */}
                     <Input type="email" label = "email"  $invalid = {emailNotValid} id="user-email"
                    className={emailNotValid ? 'invalid' : undefined}
                            onChange={(event) => handleInput('email', event.target.value)} />


                    {/* <label className= {`label ${emailNotValid ? 'invalid' : ''}`}>Email</label>
                    <input type="email" 
                    // style={{backgroundColor: emailNotValid ? '#fed2d2' : '#d1d5db' }}
                    className={emailNotValid ? 'invalid' : undefined}
                            onChange={(event) => handleInput('email', event.target.value)} /> */}
                {/* </p> */}

                {/* <p> */}
                    {/* <Label htmlFor="user-password" $invalid = {passwordNotValid} >Password</Label> */}
                    <Input type="password" label="password"  $invalid = {passwordNotValid} id="user-password"
                   
                            onChange={(event) => handleInput('email', event.target.value)} />
                    {/* <label className= {`label ${passwordNotValid ? 'invalid' : ''}`}>Password</label>
                    <input type="password" className= {passwordNotValid ? 'invalid' : undefined} 
                            onChange={(event) => handleInput('password',event.target.value)} /> */}
                {/* </p> */}

            {/* </div> */}
            </ControlContainer>

            <div className="actions">
                <button type="button" className="text-button">Create a new account</button>

                {/* <button className="button" onClick={handleLogin}>Sign In</button> */}

                <Button className="button" onClick={handleLogin}>Sign In</Button>

            </div>

        </div>
    )

}

