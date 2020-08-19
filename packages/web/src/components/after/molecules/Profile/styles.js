import styled from 'styled-components';
import { prop, withProp } from 'styled-tools';

import { Link } from '@atoms';
import { PROFILE_MAX_RATIO, PROFILE_LENGTH } from '@const';

const calcLength = ratio => `${(PROFILE_LENGTH * ratio) / PROFILE_MAX_RATIO}px`;
const ratioProp = prop('ratio');
const width = withProp(ratioProp, calcLength);
const height = withProp(ratioProp, calcLength);

export const ProfileLink = styled(Link)`
  display: inline-block;
  width: ${width};
  height: ${height};
  border-radius: 50%;
`;
