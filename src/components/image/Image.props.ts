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
     * @default 'auto'
     */
    width?: number | string;
    /**
     * image height
     * @default 'auto'
     */
    height?: number | string;
    /**
     * whether the image is a thumbnail
     * @default false
     */
    thumbnail?: boolean;
    /**
     * image alt
     */
    alt?: string;
    /**
     * custom className
     */
    className?: string;
};

export type PImageRoot = Required<Pick<PImage, 'width' | 'height' | 'radius' | 'thumbnail'>>;

export default PImage;
