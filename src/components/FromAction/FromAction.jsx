import React from 'react';

const FromAction = () => {
    const handleAction=(formData)=>{
  console.log(formData.get('name'));
  console.log(formData.get('email'));
    }
    return (
        <div>
            <form action={handleAction}>
                <input type="text" name='name' placeholder='Name' />
                <br />
                <input type="email" name="email" id="" placeholder='Email' />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default FromAction;