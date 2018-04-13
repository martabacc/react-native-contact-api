import configureStore from 'redux-mock-store'; //ES6 modules
import {addContact} from '../../src/actions/contacts';

const middlewares = [];
const mockStore = configureStore(middlewares);

// You would import the action from your codebase in a real scenario
const addTodo = () => ({ type: 'ADD_TODO' });
describe('Contact Redux', () => {
  describe('Contact Store', () => {
    it('should dispatch addContact with correct type', () => {
      // Initialize mockstore with empty state
      const initialState = {};
      const store = mockStore(initialState);

      // Dispatch the action
      const name = 'Dummy';
      const email = 'foo@bar.com';

      store.dispatch(addContact(name, email));

      // Test if your store dispatched the expected actions
      const actions = store.getActions();
      const expectedPayload = { type: 'ADD_CONTACT', newContact : {name, email} };
      expect(actions).toEqual([ expectedPayload ]);
    });
  });
});