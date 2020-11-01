export const LOAD_TYPE = Object.freeze({
  load: 'load',
  success: 'success',
  error: 'error',
  recover: 'recover',
});

export const createLoadDataAction = what => {
  const upperCase = what.toUpperCase();
  return {
    [LOAD_TYPE.load]: `${what}/LOAD_${upperCase}`,
    [LOAD_TYPE.success]: `${what}/LOAD_${upperCase}_SUCCESS`,
    [LOAD_TYPE.error]: `${what}/LOAD_${upperCase}_ERROR`,
    [LOAD_TYPE.recover]: `${what}/LOAD_${upperCase}_RECOVER`,
  };
};
