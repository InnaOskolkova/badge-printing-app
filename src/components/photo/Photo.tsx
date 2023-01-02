// @ts-nocheck

import React, { FC, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './Photo.css';


interface PhotoProps {
    photo?: string;
    onChange: (photo: string) => void;
}

export const Photo: FC<PhotoProps> = (props) => {
    const [photo, setPhoto] = useState(props.photo);

    const onDrop = ([rawPhoto]: Blob[]) => {
        const photo = URL.createObjectURL(rawPhoto);
        setPhoto(photo);
        props.onChange(photo);
    };

    const { getRootProps, getInputProps } = useDropzone({
        maxFiles: 1,
        accept: { 'image/*': [] },
        onDrop
    });

    return (
        <div {...getRootProps({ className: 'photo' })}>
            <input {...getInputProps()} />
            {photo && <img className='photo-image' src={photo} />}
        </div>
    );
};
