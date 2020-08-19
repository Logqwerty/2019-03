import styled, { css } from 'styled-components';
import { prop } from 'styled-tools';

import { FLEX_DIRECTION } from '@const';

const alignChildren = ({ direction, align, verticalAlign }) => {
  const justifyContent =
    direction === FLEX_DIRECTION.row ? align : verticalAlign;
  const alignItems = direction === FLEX_DIRECTION.row ? verticalAlign : align;
  return css`
    justify-content: ${justifyContent};
    align-items: ${alignItems};
  `;
};

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: ${prop('direction', 'row')};
  ${alignChildren}
`;
