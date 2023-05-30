import React from 'react';
import cl from './Page1.module.scss';
import ParticlesLinear from '../components/ParticlesLinear';

export default function Page1() {
  return (
    <>
      <ParticlesLinear />
      <main className={cl.main}>
        <h1>Page1</h1>
      </main>
    </>
  );
}
