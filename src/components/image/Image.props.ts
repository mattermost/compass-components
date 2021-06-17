import { TImageBorderRadius } from './Image.types';

type PImage = {
    /**
     * the src of the image
     */
    source: string;
    /**
     * whether the image is spanning the full width of the container
     * @default false
     */
    fullWidth?: boolean;
    /**
     * the shape that the image is cropped in
     * @default 4
     */
    radius?: TImageBorderRadius;
    /**
     * image width
     */
    width?: number | string;
    /**
     * image height
     */
    height?: number | string;
    /**
     * image alt
     */
    alt?: string;
    /**
     * whether the image is a thumbnail
     */
    thumbnail?: boolean;
    className?: string;
};

export type PImageRoot = Required<Pick<PImage, 'width' | 'height' | 'radius' | 'thumbnail'>>;

export default PImage;
