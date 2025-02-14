import styled from 'styled-components';
import { ifProp } from 'styled-tools';

export const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: ${ifProp('round', '50%', '')};
`;
