import Shape from '../shape';
import Grid from '../layout/Grid';
import { convertToRgb, rgbToHex, rgbToHsl } from '../../utils';
import Typography from '../typography/Typography';

type PSwatch = {
    color: string;
};

const Swatch = ({ color }: PSwatch) => {
    const rgbString = convertToRgb(color);
    const hexString = rgbToHex(rgbString);
    const hslString = rgbToHsl(rgbString);

    return (
        <Grid row padding={12}>
            <Shape borderRadius={12} width={100} height={80} background={hexString} />
            <div>
                <Typography variant={'subtitle'}>{hexString}</Typography>
                <Typography variant={'subtitle'}>{rgbString}</Typography>
                <Typography variant={'subtitle'}>{hslString}</Typography>
            </div>
        </Grid>
    );
};

export default Swatch;
