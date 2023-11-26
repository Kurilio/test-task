import Button from '@mui/material/Button';
import { FC } from 'react';

interface IPaginateButtonProps {
  numberPage: number;
  paginate: (numberPage: number) => void;
}

export const PaginationButtons: FC<IPaginateButtonProps> = ({
  numberPage,
  paginate,
}) => {
  return (
    <Button
      onClick={() => paginate(numberPage)}
      variant="outlined"
      href="#outlined-buttons"
    >
      {numberPage}
    </Button>
  );
};
