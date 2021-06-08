import React, { useEffect, useState } from 'react';

import { Utils } from '../../shared';

import { PImage } from './Image.props';

const ImageBase: React.FC<PImage> = ({ source, width, height, alt, className }: PImage) => {
    Utils.assert(source !== undefined, 'Compass Components: You need to provide image source');

    const [loading, setLoading] = useState(true);
    const [image, setImage] = useState('');

    useEffect(() => {
        Utils.getBase64(source)
            .then((imageString) => {
                setLoading(false);

                return setImage(imageString);
            })
            .catch(() => {});
    }, [source]);

    return loading ? (
        <div className={'skeleton'} />
    ) : (
        <img src={image} alt={alt} width={width} height={height} className={className} />
    );
};

export default ImageBase;
