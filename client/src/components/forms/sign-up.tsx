import React from 'react';
import { FormContainer, Button } from './forms.styles';

export function SignUpForm(): React.ReactElement {
  return (
    <FormContainer>
      <div className='form-group'>
        <label htmlFor='full_name'>Full Name</label>
        <input type='text' name='full_name' id='full_name' placeholder='Type your Full Name' />
      </div>
      <div className='form-group'>
        <label htmlFor='email'>Email</label>
        <input type='email' name='email' id='email' placeholder='Type a valid Email' />
      </div>
      <div className='form-group'>
        <label htmlFor='password'>Password</label>
        <input type='password' name='password' id='password' placeholder='Type a valid Password' />
      </div>
      <div className='form-group'>
        <label htmlFor='confirm_password'>Confirm Password</label>
        <input
          type='password'
          name='confirm_password'
          id='confirm_password'
          placeholder='Type your Password again'
        />
      </div>
      <Button>Sign Up</Button>
    </FormContainer>
  );
}
