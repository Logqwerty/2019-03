import styled, { css } from 'styled-components';
import { prop } from 'styled-tools';

const convertToFlexProp = name => {
  switch (name) {
    case 'start':
    case 'top':
      return 'flex-start';
    case 'middle':
    case 'center':
      return 'center';
    case 'end':
    case 'bottom':
      return 'flex-end';
    default:
      return 'flex-start';
  }
};

const alignChildren = ({ direction, align, verticalAlign }) => {
  const justifyContent = direction === 'row' ? align : verticalAlign;
  const alignItems = direction === 'row' ? verticalAlign : align;
  return css`
    justify-content: ${convertToFlexProp(justifyContent)};
    align-items: ${convertToFlexProp(alignItems)};
  `;
};

export const Wrapper = styled.div`
  display: flex;
  flex-direction: ${prop('direction', 'row')};
  ${alignChildren}
`;
