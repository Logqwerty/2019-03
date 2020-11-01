import { useCookies } from 'react-cookie';

const useMyInfoCookie = () => {
  const [{ myInfo }] = useCookies(['myInfo']);
  return myInfo;
};

export default useMyInfoCookie;
