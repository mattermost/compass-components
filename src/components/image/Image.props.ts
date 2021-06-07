import { TShapeBorderRadius } from '../../foundations/shape';

import TImageSize from './Image.types';

export type PImage = {
    /**
     * the src of the image
     * */
    source: string;
    /**
     * whether the image is full sized or auto
     * @default auto
     * */
    size?: TImageSize;
    /**
     * the shape that the image is cropped in
     * @default 4
     * */
    radius?: TShapeBorderRadius;
    /**
     * image width
     * */
    width?: number;
    /**
     * image height
     * */
    height?: number;
    /**
     * image alt
     * */
    alt?: string;
    /**
     * whether the image is a thumbnail
     * */
    thumbnail?: boolean;
    /**
     * provided custom class
     * */
    className?: string;
};
