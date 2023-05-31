import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import PageBasic from '../pages/PageBasic';
import PageSnow from '../pages/PageSnow';
import PageBig from '../pages/PageBig';
import PageConfetti from '../pages/PageBubble';
import PageTest from '../pages/PageTest';
import PageFireWorks from '../pages/PageFireWorks';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PageBasic />} />
        <Route path="page1" element={<PageBasic />} />
        <Route path="page2" element={<PageSnow />} />
        <Route path="page3" element={<PageBig />} />
        <Route path="page4" element={<PageFireWorks />} />
        <Route path="page5" element={<PageConfetti />} />
        <Route path="page6" element={<PageTest />} />
      </Route>
    </Routes>
  );
}
