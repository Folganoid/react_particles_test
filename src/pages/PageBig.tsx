import React from 'react';
import cl from './Page.module.scss';
import Particle from '../components/Particle';
import type { ISourceOptions } from 'tsparticles-engine';
import big from '../configs/big.json';

export default function PageBig() {
  return (
    <>
      <Particle options={big as ISourceOptions} />
      <main className={cl.main}>
        <h1>{big.name}</h1>
      </main>
    </>
  );
}
