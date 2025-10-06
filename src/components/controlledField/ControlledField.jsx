import React, { useState } from 'react';

const ControlledField = () => {
    const [password, setpassword] = useState('');
    const [error, setEroor] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitted')

    }
    const handlePasswordOnChange = e => {
        setpassword(e.target.value)
        console.log(e.target.value)
        if(password.length<6){
         setEroor('password chack 6 creackter')
        }
        else{
            setEroor('')
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>

                <input type="email" name="email"  placeholder='Email' required />
                <br />
                <input type="password" name="password"  placeholder='password' onChange={handlePasswordOnChange} defaultValue={password} required />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <p style={{color:'red'}}>
                <small>{error}</small>
                
          </p>
        </div>
    );
};

export default ControlledField;