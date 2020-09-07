import { Link } from 'react-router-dom';

import styled, { css } from 'styled-components';
import { palette, ifProp, prop, switchProp } from 'styled-tools';

import { MODAL_MENU_POSITION } from '@const';

const styleAtPosition = switchProp(
  prop('position', MODAL_MENU_POSITION.middle),
  {
    top: css`
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    `,
    middle: css`
      border-radius: 0px;
      border-top: none;
    `,
    bottom: css`
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      border-top: none;
    `,
  },
);

const styles = css`
  width: 100%;
  min-height: 48px;
  padding: 4px 8px;
  box-sizing: border-box;

  font-size: 0.9rem;
  font-weight: ${ifProp('bold', 700, 400)};
  border: 1px solid ${palette('border')};
  background-color: ${palette('white')};
  color: ${ifProp('danger', palette('danger', 4), palette('black'))};

  ${styleAtPosition}
`;

export const StyledLink = styled(Link)`
  ${styles}
  display: inline-flex;
  justify-content: center;
  align-items: center;

  text-decoration: none;
  appearance: none;
  cursor: default;
`;

export const StyledButton = styled.button`
  ${styles}
  &:focus {
    outline: none;
  }
`;
