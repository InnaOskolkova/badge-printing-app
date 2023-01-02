import { FC, ChangeEventHandler } from 'react';
import classNames from 'classnames';
import { Text } from '../text';
import './field.css';

export interface InputProps {
    className?: string;
    label: string;
    value: string;
    placeholder: string;
    onChange: (value: string) => void;
}

export const Input: FC<InputProps> = (props) => {
    const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        props.onChange(event.target.value);
    };
    
    const className = classNames('field-label', props.className);

    return (
        <label className={className}>
            <Text>{props.label}</Text>
            <input 
                className='field' 
                value={props.value} 
                placeholder={props.placeholder}
                onChange={onChange} />
        </label>
    );
};

interface Option {
    value: string;
    label: string;
}

export interface SelectProps {
    className?: string;
    label: string;
    value: string;
    options: Option[];
    placeholder: string;
    onChange: (value: string) => void;
}

export const Select: FC<SelectProps> = (props) => {
    const onChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
        props.onChange(event.target.value);
    };

    const className = classNames('field-label', props.className);

    return (
        <label className={className}>
            <Text>{props.label}</Text>
            <select
                className='field'
                value={props.value}
                onChange={onChange}>
                <option value="" disabled selected>{props.placeholder}</option>
                {props.options.map((option) => (
                    <option
                        value={option.value}
                        label={option.label}
                        selected={option.value === props.value} />
                ))}
            </select>
        </label>
    );
};
