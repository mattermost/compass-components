import React from 'react';

import { DEFAULT_IMAGE_SOURCE } from './Image.constants';
import { PImage } from './Image.props';

const ImageBase: React.FC<PImage> = ({
    source = DEFAULT_IMAGE_SOURCE,
    width,
    height,
    alt,
    className,
}: PImage) => {
    if (!source) {
        return <div className={'skeleton'} />;
    }

    return <img src={source} alt={alt} width={width} height={height} className={className} />;
};

export default ImageBase;
