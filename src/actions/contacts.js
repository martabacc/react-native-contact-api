export const addContact = (name, email) => ({
  type: 'ADD_CONTACT',
  newContact: {
    name, email
  }
});

export const deleteContact = (name) => ({
  type: 'DELETE_CONTACT',
  name
});
