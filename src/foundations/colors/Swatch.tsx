import Shape from '../shape';
import Grid from '../layout/Grid';
import { convertToRgb, rgbToHex, rgbToHsl } from '../../utils';
import Typography from '../typography/Typography';

type PSwatch = {
    color: string;
    shade: number;
    colorName?: string;
    variant?: 'noText' | 'bottom' | 'right';
};

const Swatch = ({ color, shade, colorName, variant = 'right' }: PSwatch) => {
    const rgbString = convertToRgb(color);
    const hexString = rgbToHex(rgbString);
    const hslString = rgbToHsl(rgbString);
    const isRow = variant === 'right';
    const hasText = variant !== 'noText';

    return (
        <Grid row={isRow} alignment={'stretch'} padding={isRow ? [8, 0] : 8} flex={0}>
            <Grid alignment={'end'} flex={1}>
                <Shape border borderRadius={4} elevation={1} width={140} height={100} background={hexString} />
            </Grid>
            {hasText && (
                <Grid alignment={'end'} flex={2} padding={[8, 0, 8, 12]}>
                    <Grid flex={1}>
                        <Typography variant={'subtitle'} size={200} gutter={isRow ? 'none' : 'bottom'}>
                            {`${colorName || ''} ${shade}`.trim()}
                        </Typography>
                    </Grid>
                    <Grid>
                        <Typography variant={'body'} size={75} gutter={'none'} color={'secondary'}>
                            {hexString.toUpperCase?.()}
                        </Typography>
                        <Typography variant={'body'} size={75} gutter={'none'} color={'secondary'}>
                            {rgbString}
                        </Typography>
                        <Typography variant={'body'} size={75} gutter={'none'} color={'secondary'}>
                            {hslString}
                        </Typography>
                    </Grid>
                </Grid>
            )}
        </Grid>
    );
};

export default Swatch;
