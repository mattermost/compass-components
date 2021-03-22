import React from 'react';

import Heading from '../../components/heading';
import Text from '../../components/text';
import Grid, { GridSpacing } from '../layout';
import Shape from '../shape';
import { convertToRgb, rgbToHex, rgbToHsl } from '../../utils';

type PSwatch = {
    color: string;
    shade: number;
    colorName?: string;
    variant?: 'noText' | 'bottom' | 'right';
};

const Swatch: React.FC<PSwatch> = ({
    color,
    shade,
    colorName,
    variant = 'right',
}: PSwatch): JSX.Element => {
    const rgbString = convertToRgb(color);
    const hexString = rgbToHex(rgbString);
    const hslString = rgbToHsl(rgbString);
    const isRow = variant === 'right';
    const hasText = variant !== 'noText';

    return (
        <Grid
            row={isRow}
            alignment={'stretch'}
            padding={isRow ? GridSpacing.symmetric({ vertical: 50 }) : GridSpacing.all(50)}
            flex={0}
        >
            <Grid alignment={'flex-end'} flex={1}>
                <Shape
                    border
                    borderRadius={4}
                    elevation={1}
                    elevationOnHover={3}
                    width={140}
                    height={100}
                    background={hexString}
                />
            </Grid>
            {hasText && (
                <Grid
                    alignment={'flex-end'}
                    flex={2}
                    padding={GridSpacing.trbl({ top: 50, right: 0, bottom: 50, left: 75 })}
                >
                    <Grid flex={1}>
                        <Heading variant={'h6'} size={200} gutter={isRow ? 'none' : 'bottom'}>
                            {`${colorName || ''} ${shade}`.trim()}
                        </Heading>
                    </Grid>
                    <Grid>
                        <Text variant={'p'} size={75} gutter={'none'} color={'secondary'}>
                            {hexString.toUpperCase?.()}
                        </Text>
                        <Text variant={'p'} size={75} gutter={'none'} color={'secondary'}>
                            {rgbString}
                        </Text>
                        <Text variant={'p'} size={75} gutter={'none'} color={'secondary'}>
                            {hslString}
                        </Text>
                    </Grid>
                </Grid>
            )}
        </Grid>
    );
};

export default Swatch;
