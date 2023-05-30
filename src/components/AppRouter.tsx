import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Page1 />} />
        <Route path="page1" element={<Page1 />} />
        <Route path="page2" element={<Page2 />} />
      </Route>
    </Routes>
  );
}
