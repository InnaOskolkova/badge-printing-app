import { FC } from 'react';
import classNames from 'classnames';
import { Text } from '../text';
import { Photo } from '../photo';
import './badge.css';

interface FullName {
    lastName: string;
    firstName: string;
    patronymic: string;
}

interface Position {
    role: string;
    level: number;
}

export interface BadgeProps {
    photo: string;
    fullName: FullName;
    position: Position;
}

export const Badge: FC<BadgeProps> = (props) => {
    return (
        <div className='div'>
            {/* <Photo photo={props.photo} onChange={() => ({})}/> */}
            <Text align='center'>
                {props.fullName.lastName}
                <br />
                {props.fullName.firstName} {props.fullName.patronymic}               
            </Text>
            <Text>
                {props.position.role}
                {props.position.level}
            </Text>
        </div>
    );
};
