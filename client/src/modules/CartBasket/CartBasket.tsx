import { ReactElement } from 'react';
import style from './CartBasket.module.css';
import { useAppDispatch, useAppSelector } from '../../store/hooks/storeHooks';
import { basketProducts } from '../../store/selectors/productSelectors';
import { IProduct } from '../../store/types/types';
import { MiniCardBasket } from '../../components/MiniCardBasket/MiniCardBasket';
import { GreenButtonPay } from '../../ui/GreenButtonPay/GreenButtonPay';
import { RedButton } from '../../ui/RedButton/RedButton';
import { clearBasket } from '../../store/slices/productSlice';

type BasketType = [IProduct, number];

export function CartBasket(): ReactElement {
  const basket = useAppSelector(basketProducts);
  const dispatch = useAppDispatch();
  const result = new Map();

  basket.forEach((product: IProduct) => {
    if (result.get(product)) {
      result.set(product, result.get(product) + 1);
    } else result.set(product, 1);
  });

  const ArrayBasket = [];
  for (const key of result.entries()) {
    ArrayBasket.push(key);
  }

  const clearHandler = () => {
    dispatch(clearBasket());
  };

  return (
    <>
      <div className={style.basket}>
        {ArrayBasket.length > 0 && (
          <h3 className={style.countProduct}>{ArrayBasket.length}</h3>
        )}

        <div className={style.basketInner}>
          {ArrayBasket.map((product: BasketType) => (
            <MiniCardBasket
              key={product[0].id}
              {...product[0]}
              count={product[1]}
            />
          ))}

          {ArrayBasket.length > 0 && (
            <>
              <GreenButtonPay btnInner={'Order'} clickFunction={() => {}} />
              <RedButton btnInner={'Clear'} clickFunction={clearHandler} />
            </>
          )}
        </div>
      </div>
    </>
  );
}
