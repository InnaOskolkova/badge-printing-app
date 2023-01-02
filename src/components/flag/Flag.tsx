import { FC } from 'react';
import './flag.css';
import classNames from 'classnames'; 
import {Text} from '../text';

export interface CheckboxProps {
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
}

export const Checkbox: FC<CheckboxProps> = (props) => {
    const className = classNames('checkbox', {
        "m-checked": props.checked
    })

    const onClick = () => props.onChange(!props.checked);

    return (
        <label className='flag-label' onClick={onClick}>
            <span className={className} /> 
            <Text>{props.label}</Text>     
        </label>      
    );
};

export interface RadioButtonProps {
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
}

export const RadioButton: FC<RadioButtonProps>= (props) => {
    const className = classNames('radio', {
        "m-checked": props.checked
    })

    const onClick = () => props.onChange(!props.checked);

    return (
        <label className='flag-label' onClick={onClick}>
            <span className={className}/> 
            <Text>{props.label}</Text>             
        </label>   
    );
};


export interface ToggleProps {
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
}

export const Toggle: FC<ToggleProps>= (props) => {
    const className = classNames('toggle',
        {'toggle2': !props.checked},  
        {"m-checked": props.checked},
        {"m-unchecked": !props.checked}
    )

    const onClick = () => props.onChange(!props.checked);

    return (
        <label className='flag-label' onClick={onClick}>
            <span className={className}/> 
            <Text>{props.label}</Text>             
        </label>   
    );
};
