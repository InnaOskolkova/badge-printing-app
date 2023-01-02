import { FC } from 'react';

import './button.css';

interface ButtonProps {
  children: string;
  onClick: () => void;
}

export const Button: FC<ButtonProps> = (props) => {
  return (
    <button className='button' onClick={props.onClick}>
      {props.children}
    </button>
  );
};
