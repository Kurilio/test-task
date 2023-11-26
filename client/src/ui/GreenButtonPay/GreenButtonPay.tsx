import Button from '@mui/material/Button';
import { FC } from 'react';
import style from './GreenButtonPay.module.css';

type btnText = {
  btnInner: string;
  clickFunction: () => void;
};

export const GreenButtonPay: FC<btnText> = ({ btnInner, clickFunction }) => {
  return (
    <Button
      className={style.greenButton}
      variant="contained"
      color="success"
      onClick={() => clickFunction()}
    >
      {btnInner}
    </Button>
  );
};
