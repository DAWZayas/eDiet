export const errorMenuMessage = (error) => {
  if (error.xhr.response && error.xhr.response.error) {
    return error.xhr.response.error;
  }

  if (error.status === 403) {
    return 'The name of the menu is repeat. Please, try again!';
  }

  return error.message;
};
