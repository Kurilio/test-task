import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { IProduct } from '../../store/types/types';
import { FC } from 'react';
import { GreenButtonPay } from '../../ui/GreenButtonPay/GreenButtonPay';
import { useAppDispatch } from '../../store/hooks/storeHooks';
import { addToBasket } from '../../store/slices/productSlice';

export const ImgProductCard: FC<IProduct> = (props) => {
  const dispatch = useAppDispatch();

  const clickFunction = () => {
    dispatch(addToBasket(props));
  };

  return (
    <Card
      sx={{
        minWidth: 200,
        maxWidth: 200,
        minHeight: 260,
        maxHeight: 400,
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
      }}
    >
      <CardMedia component="img" alt="img" height="100" image={props.img} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <GreenButtonPay
          btnInner={'add to cart'}
          clickFunction={clickFunction}
        />
        {'Price ' + props.price}
      </CardActions>
    </Card>
  );
};
