import { useState } from 'react';

export const App = () => {
  const [state, setState] = useState({ isAdmin: false, userName: 'Oksana' });
  const { isAdmin, userName } = state;
  const assignAdmin = () => {
    setState({ ...state, isAdmin: true });
  };
  return (
    <>
      <h1
        style={{
          margin: '100px auto 0',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#ff0101',
        }}
      >
        Hello {userName}, you are a {isAdmin ? 'SUPER ADMIN' : 'user'}
      </h1>
      <button
        onClick={assignAdmin}
        style={{
          margin: '50px auto 0',
          // height: '100vh',
          display: 'block',
          // justifyContent: 'center',
          // alignItems: 'center',
          // fontSize: 40,
          // color: '#010101',
        }}
      >
        Assign admin
      </button>
    </>
  );
};
