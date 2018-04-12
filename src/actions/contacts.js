export const addTodo = (name, email) => ({
  type: 'ADD_CONTACT',
  newContact: {
    name, email
  }
});
