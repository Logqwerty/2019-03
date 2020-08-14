import sha256 from 'crypto-js/sha256';
import { getFormData } from '../../../utils';

const isPlain = process.env.REACT_APP_PWD_TYPE === 'plain';

export default function changeToHashedPassword(form) {
  const plaintextPassword = getFormData(form, 'password');
  return isPlain ? plaintextPassword : sha256(plaintextPassword);
}
