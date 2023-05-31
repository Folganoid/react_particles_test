import React from 'react';
import cl from './Page.module.scss';
import Particle from '../components/Particle';
import type { ISourceOptions } from 'tsparticles-engine';
import snow from '../configs/snow.json';

export default function PageSnow() {
  return (
    <>
      <Particle options={snow as ISourceOptions} />
      <main className={cl.main}>
        <h1>Snow</h1>
      </main>
    </>
  );
}
