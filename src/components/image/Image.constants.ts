import { TShapeBorderRadius } from '../../foundations/shape';
import exampleImg from '../../assets/images/image-example.png';

import TImageSize from './Image.types';

const DEFAULT_IMAGE_SIZE: TImageSize = 'auto';

const DEFAULT_IMAGE_BORDER_RADIUS: TShapeBorderRadius = 4;

const DEFAULT_IMAGE_SOURCE = exampleImg;

const IMAGE_SIZES: TImageSize[] = ['auto', 'full'];

export { IMAGE_SIZES, DEFAULT_IMAGE_SIZE, DEFAULT_IMAGE_BORDER_RADIUS, DEFAULT_IMAGE_SOURCE };
