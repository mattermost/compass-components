import React, { useEffect, useState } from 'react';

import { Utils } from '../../shared';

import {
    DEFAULT_IMAGE_BORDER_RADIUS,
    DEFAULT_IMAGE_HEIGHT,
    DEFAULT_IMAGE_WIDTH,
} from './Image.constants';
import PImage from './Image.props';
import ImageRoot from './Image.root';

const Image: React.FC<PImage> = ({
    source,
    alt,
    className,
    fullWidth = false,
    thumbnail = false,
    radius = DEFAULT_IMAGE_BORDER_RADIUS,
    width = DEFAULT_IMAGE_WIDTH,
    height = DEFAULT_IMAGE_HEIGHT,
    ...rest
}: PImage) => {
    Utils.assert(Boolean(source), 'Image: You need to provide a valid image source');

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

    const rootProperties = {
        className,
        alt,
        radius,
        thumbnail,
        src: image,
        width: fullWidth ? '100%' : width,
        height: fullWidth ? 'auto' : height,
    };

    return loading ? <div className={'skeleton'} /> : <ImageRoot {...rootProperties} {...rest} />;
};

export default Image;
