import Shape from '../shape';
import Grid from '../layout/Grid';
import { convertToRgb, rgbToHex, rgbToHsl } from '../../utils';

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
                <p>{hexString}</p>
                <p>{rgbString}</p>
                <p>{hslString}</p>
            </div>
        </Grid>
    );
};

export default Swatch;
