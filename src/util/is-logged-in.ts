const SESSION_COOKIE_NAME = "JSESSIONID=";

//i hate this, but i guess it works so it'll stay for now
export const isLoggedIn = (): boolean => {
  return document.cookie.indexOf(SESSION_COOKIE_NAME) !== -1;
};
