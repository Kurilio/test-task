import { ReactElement } from 'react';
import ProductCards from '../../modules/ProductCards/ProductCards';

function ProductPage(): ReactElement {
  return (
    <div className="container">
      <ProductCards />
    </div>
  );
}

export default ProductPage;
