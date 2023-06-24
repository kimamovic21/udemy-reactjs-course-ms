import React from 'react';
import MainNavigation from '../MainNavigation';

const Error = () => {
  return (
    <>
        <MainNavigation />
        <main>
            <h1>An error occurred!</h1>
            <p>Couldn't find this page!</p>
        </main>
    </>
  );
};

export default Error;
