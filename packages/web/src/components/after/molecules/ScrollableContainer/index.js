import React from 'react';
import PropTypes from 'prop-types';

import { StyledDiv, SpinnerWapper, InnerSpinner } from './styles';

const DefaultLoader = () => (
  <SpinnerWapper>
    <InnerSpinner />
  </SpinnerWapper>
);

const propTypes = {
  Loader: PropTypes.elementType,
  isLoading: PropTypes.bool.isRequired,
};

const defaultProps = {
  Loader: DefaultLoader,
};

const ScrollableContainer = React.forwardRef(
  ({ Loader, isLoading, children }, ref) => {
    return (
      <StyledDiv ref={ref}>
        {children}
        {isLoading && <Loader />}
      </StyledDiv>
    );
  },
);

ScrollableContainer.propTypes = propTypes;
ScrollableContainer.defaultProps = defaultProps;

export default ScrollableContainer;
