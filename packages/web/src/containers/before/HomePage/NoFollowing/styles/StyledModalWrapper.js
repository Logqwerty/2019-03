import styled from 'styled-components';

import { ModalWrapper } from '../../../../../components/before/Modal/styles';

const StyledModalWrapper = styled(ModalWrapper)`
  /* BOX */
  border: solid 1px ${({ theme }) => theme.palette.border};
`;

export default StyledModalWrapper;
