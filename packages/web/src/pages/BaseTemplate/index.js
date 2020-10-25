import React from 'react';

import Navigation from '../../containers/before/Navigation';
import { BaseTemplateFlex } from './styles';

const BaseTemplate = ({ children, className }) => {
  return (
    <BaseTemplateFlex className={className}>
      <Navigation />
      {children}
    </BaseTemplateFlex>
  );
};

export default BaseTemplate;
