import { useInput } from '../hooks/useInput.js'
import Input from "./Input.jsx";
import {isEmail, isNotEmpty, hasMinLength } from '../util/validation.js'

export default function Login() 
{
   const {value: emailValue,
     handleInputChange: handleEmailChange,
    handelInputBlur: handleEmailBlur,
    hasError: emailHasError} = useInput('', (value) => isEmail(value) && isNotEmpty(value));

    const {value: passwordVlaue,
     handleInputChange: handlePasswordChange,
    handelInputBlur: handlePasswordBlur,
    hasError: passwordHasError} = useInput('', (value) => hasMinLength(value,6) && isNotEmpty(value));


//   const emailIsInvalid = didEdit.email && !isEmail(enteredValue.email) && isNotEmpty(enteredValue.email);
//   const passwordIsInvalid = didEdit.password && !hasMinLength(enteredValue.password,6) && isNotEmpty(enteredValue.password);

  function handleSubmit(event)
  {
    event.preventDefault();
    console.log("submitted");

    if(emailHasError || passwordHasError)
    {
        return;
    }
    console.log(emailValue,passwordVlaue);    
  }

  return (
    <form onSubmit={handleSubmit}>
        <h2>Login</h2>

        <div className="control-row">

            <Input label="Email" id="email" type="email"  name="email"
            onBlur={handleEmailBlur}
            onChange={handleEmailChange}
            value={emailValue}
            error={emailHasError && 'Please enter a valid email!'}
            />

            <Input label="password" id="password" type="password"  name="password"
            onBlur={handlePasswordBlur}
            onChange={handlePasswordChange} 
            value={passwordVlaue}
            error={passwordHasError && 'Please enter a valid password!'}
            />

        </div>
 
      <p className="form-actions">
        <button type="reset" className="button button-flat">Reset</button>
        <button  className="button">Login</button>
      </p>
    </form>
  );
}
