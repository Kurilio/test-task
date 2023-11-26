import { PaginationButtons } from '../../ui/PaginationButtons/PaginationButtons';
import { FC } from 'react';
import style from './Pogination.module.css';

interface IPaginationProps {
  countAllProduct: number;
  countPage: number;
  paginate: (numberPage: number) => void;
}

export const Pagination: FC<IPaginationProps> = (props) => {
  const count = props.countAllProduct / props.countPage;
  const numPage = [...new Array(Math.ceil(count))];

  return (
    <div className={style.numberPageButton}>
      {numPage.map((_, index: number) => (
        <PaginationButtons
          key={`pag-${index}`}
          numberPage={index + 1}
          paginate={props.paginate}
        />
      ))}
    </div>
  );
};
