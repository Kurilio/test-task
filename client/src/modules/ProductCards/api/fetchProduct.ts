import { Product } from '../../../../data/db.js';

export const fetchGetProduct = async (path: string) => {
  //   const products = await fetch('url' + path);
  //   return await products.json();
  //---------------------------------------------- имитация запроса

  return Product[path];
};
