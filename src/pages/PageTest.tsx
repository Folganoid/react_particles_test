import React from 'react';
import cl from './Page.module.scss';
import Particle from '../components/Particle';
import type { ISourceOptions } from 'tsparticles-engine';
import options from '../configs/test.json';

export default function PageTest() {
  return (
    <>
      <Particle options={options as ISourceOptions} />
      <main className={cl.main}>
        <h1>{options.name}</h1>
      </main>
    </>
  );
}
