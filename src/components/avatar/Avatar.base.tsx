import Grid from '../../foundations/layout';
import Shape from '../../foundations/shape';
import Heading from '../heading';

import { AVATAR_SIZE_MAP, DEFAULT_AVATAR_SIZE } from './Avatar.constants';
import PAvatar from './Avatar.props';

const AvatarBase = ({ userName, size = DEFAULT_AVATAR_SIZE, ...rest }: PAvatar): JSX.Element => (
    <Shape borderRadius={'circle'} width={AVATAR_SIZE_MAP[size]} {...rest}>
        <Grid flex={1} alignment={'center'} justify={'center'}>
            <Heading element={'h6'} weight={'bold'} margin={'none'}>
                {userName.slice(0, 2)}
            </Heading>
        </Grid>
    </Shape>
);

export default AvatarBase;
