import Input from '@mui/joy/Input';
import { ChangeEvent, FC } from 'react';

interface IInputProps {
  value: string;
  inputHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const InputSearch: FC<IInputProps> = (props) => {
  return (
    <Input
      color="primary"
      placeholder="Name search..."
      size="lg"
      variant="outlined"
      value={props.value}
      onChange={props.inputHandler}
    />
  );
};
