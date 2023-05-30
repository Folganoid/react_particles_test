import React from 'react';
import cl from './Page2.module.scss';
import ParticlesAbsorbers from '../components/ParticlesAbsorbers';

export default function Page2() {
  return (
    <>
      <ParticlesAbsorbers />
      <main className={cl.main}>
        <h1>Page2</h1>
      </main>
    </>
  );
}
