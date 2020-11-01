import { withProp } from 'styled-tools';

export const withPropHelper = propsName => cb => withProp(propsName, cb);
