export const setCookie = (name, value) => {
  const cookieValue = typeof value === 'object' ? JSON.stringify(value) : value;
  const cookie = `${name}=${encodeURIComponent(cookieValue)}`;
  document.cookie = cookie;
};
