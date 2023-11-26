import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

function HomePage(): ReactElement {
  return <Navigate to={'/product/food'} />;
}

export default HomePage;
