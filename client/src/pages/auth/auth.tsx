import React from 'react';
import { AuthContainer } from './auth.styles';
import { LoginForm, SignUpForm } from '../../components';
import { Link } from 'react-router-dom';

interface Props {
  login?: boolean;
}

export function AuthPage({ login }: Props): React.ReactElement {
  return (
    <AuthContainer className='container-padding'>
      <h1 className='title'>{login ? 'Login' : 'Sign Up'}</h1>
      {login ? <LoginForm /> : <SignUpForm />}
      <div className='alternative'>
        {login ? (
          <span>
            Don't have an account? <Link to='/sign-up'>Sign Up</Link>
          </span>
        ) : (
          <span>
            Already have an account? <Link to='/login'>Login</Link>
          </span>
        )}
      </div>
    </AuthContainer>
  );
}
