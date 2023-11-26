import { FC } from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { CartBasket } from '../modules/CartBasket/CartBasket';

export const Layout: FC = () => {
  return (
    <>
      <Navbar />
      <CartBasket />
      <Outlet />
    </>
  );
};
