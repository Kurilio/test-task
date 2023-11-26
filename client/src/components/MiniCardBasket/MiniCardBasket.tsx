import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { IProduct } from '../../store/types/types';
import { FC } from 'react';
import style from './MiniCardBasket.module.css';

interface IProductValue extends IProduct {
  count: number;
}

export const MiniCardBasket: FC<IProductValue> = (props) => {
  return (
    <div className={style.cardInner}>
      <Card sx={{ maxWidth: 150 }}>
        <CardMedia component="img" alt="img" height="50" image={props.img} />
        <CardContent>
          <Typography gutterBottom component="div">
            {props.name}
          </Typography>
        </CardContent>
        <CardActions>
          <span className={style.priceSpan}>
            {'Price '}
            {props.price * props.count}
          </span>
          <strong>{'x ' + props.count}</strong>
        </CardActions>
      </Card>
    </div>
  );
};
