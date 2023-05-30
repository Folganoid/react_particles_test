import React from 'react';
import cl from './Page2.module.scss';
import Particle from '../components/Particle';
import type { ISourceOptions } from 'tsparticles-engine';
import snow from '../configs/snow.json';

export default function Page2() {
  const snowOptions = snow as ISourceOptions;
  return (
    <>
      <Particle options={snowOptions} />
      <main className={cl.main}>
        <h1>Page2</h1>
      </main>
    </>
  );
}
