import Button from '@mui/material/Button';
import { FC } from 'react';
import style from './RedButton.module.css';

type btnText = {
  btnInner: string;
  clickFunction: () => void;
};

export const RedButton: FC<btnText> = ({ btnInner, clickFunction }) => {
  return (
    <Button
      className={style.redButton}
      variant="outlined"
      color="error"
      onClick={() => clickFunction()}
    >
      {btnInner}
    </Button>
  );
};
