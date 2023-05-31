import React from 'react';
import cl from './Page.module.scss';
import Particle from '../components/Particle';
import type { ISourceOptions } from 'tsparticles-engine';
import options from '../configs/fireworks.json';

export default function PageFireWorks() {
  return (
    <>
      <Particle options={options as ISourceOptions} />
      <main className={cl.main}>
        <h1>{options.name}</h1>
      </main>
    </>
  );
}
