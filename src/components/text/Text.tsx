import { FC, ReactNode } from 'react';
import classNames from 'classnames';
import './text.css';
import { type } from '@testing-library/user-event/dist/type';

type Align = 'left' | 'center' | 'right'
type Size = 'small' | 'medium' | 'large'
type Weight = 'normal' | 'bold'
type Color = 'blue' | 'green' | 'black'

interface TextProps {
  children: ReactNode;
  align?: Align;
  size?: Size;
  weight?: Weight;
  color?: Color;
}

export const Text: FC<TextProps> = (props) => {
  const { align = 'left', size = 'medium', weight = 'normal', color = 'black' } = props;
  const className = classNames('text', `m-align-${align}`, `m-size-${size}`, `m-weight-${weight}`, `m-color-${color}`);

  return (
    <div className={className}>
      {props.children}
    </div>
  );
};
