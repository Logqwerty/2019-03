import styled from 'styled-components';
import { prop, withProp } from 'styled-tools';

import Flex from '../../atoms/Flex';

const calcLength = ratio => `${(32 * ratio) / 10}px`;
const ratioProp = prop('ratio');
const width = withProp(ratioProp, calcLength);
const height = withProp(ratioProp, calcLength);

export const ProfileFlex = styled(Flex)`
  width: ${width};
  height: ${height};
  border-radius: 50%;
`;
