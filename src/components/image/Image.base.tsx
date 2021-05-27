import React, { useCallback, useEffect, useState } from 'react';

import { PImage } from './Image.props';

const ImageBase: React.FC<PImage> = ({ source, width, height, alt, className }: PImage) => {
    if (!source) {
        throw new Error('Compass Components: You need to provide image source');
    }

    const [loading, setLoading] = useState(true);
    const [image, setImage] = useState('');

    const fetchUrl = useCallback(async () => {
        const response = await fetch(source);
        const imgUrl = await response.url;

        setLoading(false);
        setImage(imgUrl);
    }, [source]);

    useEffect(() => {
        fetchUrl();
    }, [source, fetchUrl]);

    return loading ? (
        <div className={'skeleton'} />
    ) : (
        <img src={image} alt={alt} width={width} height={height} className={className} />
    );
};

export default ImageBase;
