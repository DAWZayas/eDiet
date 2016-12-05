export const errorMenuMessage = (error) => {

  if (error.status === 403) {
    return 'The name of the menu is repeat. Please, try again!';
  }

  return error.message;
};
