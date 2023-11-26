import { useParams } from 'react-router-dom';
import { ImgProductCard } from '../../components/ImgProductCard/ImgProductCard';
import { useAppDispatch, useAppSelector } from '../../store/hooks/storeHooks';
import { getProducts } from '../../store/selectors/productSelectors';
import { IProduct } from '../../store/types/types';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { fetchGetProduct } from './api/fetchProduct';
import { setProduct } from '../../store/slices/productSlice';
import style from './ProductCards.module.css';
import { Pagination } from '../../components/Pagination/Pagination';
import { InputSearch } from '../../ui/InputSearch/InputSearch';

function ProductCards() {
  const cards = useAppSelector(getProducts);
  const [inputDate, setInputDate] = useState<string>('');
  const { path } = useParams();
  const dispatch = useAppDispatch();
  const [page, setPage] = useState<number>(1);
  const countPage = 12;
  const lastIndexPage = page * countPage;
  const firstIndexPage = lastIndexPage - countPage;

  const filterPage = cards.filter((product: IProduct) =>
    product.name.includes(inputDate)
  );
  const currentPage = filterPage.slice(firstIndexPage, lastIndexPage);

  const paginate = useCallback((numberPage: number) => setPage(numberPage), []);

  async function helpFetchQuery() {
    dispatch(setProduct(await fetchGetProduct(path as string)));
  }

  const inputHandler = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setInputDate(event.target.value);
    setPage(1);
  }, []);

  useEffect(() => {
    setPage(1);
    helpFetchQuery();
  }, [path]);

  return (
    <div className={style.gridContainer}>
      {path === 'food' && <h1>Food</h1>}
      {path === 'electronics' && <h1>Electronics</h1>}
      {path === 'clothing' && <h1>Clothing</h1>}
      <InputSearch value={inputDate} inputHandler={inputHandler} />
      <div className={style.productContainer}>
        {currentPage.map((product: IProduct) => (
          <ImgProductCard key={`pr-${product.name}`} {...product} />
        ))}
      </div>
      <Pagination
        countPage={countPage}
        countAllProduct={filterPage.length}
        paginate={paginate}
      />
    </div>
  );
}

export default ProductCards;
