import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Layout } from '../layout/Layout';
import { ReactElement } from 'react';
import HomePage from '../pages/HomePage/HomePage';
import ProductPage from '../pages/ProductPage/ProductPage';
import { ErrorPage } from '../pages/ErrorPage/ErrorPage';

function App(): ReactElement {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:path" element={<ProductPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
