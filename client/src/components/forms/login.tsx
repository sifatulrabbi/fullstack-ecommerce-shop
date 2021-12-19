import React from 'react';
import { FormContainer, Button } from './forms.styles';

export function LoginForm(): React.ReactElement {
  return (
    <FormContainer>
      <div className='form-group'>
        <label htmlFor='email'>Email</label>
        <input type='email' name='email' id='email' placeholder='Type your Email' />
      </div>
      <div className='form-group'>
        <label htmlFor='password'>Password</label>
        <input type='password' name='password' id='password' placeholder='Type your Password' />
      </div>
      <Button>Login</Button>
    </FormContainer>
  );
}
