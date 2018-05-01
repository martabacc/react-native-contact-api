import configureStore from 'redux-mock-store'; //ES6 modules
import { addContact, deleteContact } from '../../src/actions/contacts';
import saga from 'redux-saga';

const middlewares = [saga];
const mockStore = configureStore(middlewares);

// You would import the action from your codebase in a real scenario
const addTodo = () => ({ type: 'ADD_TODO' });
describe('Contact Redux', () => {
  describe('Contact Store', () => {
    it('should dispatch addContact with correct type', () => {
      const initialState = {};
      const store = mockStore(initialState);

      const name = 'Dummy';
      const email = 'foo@bar.com';

      store.dispatch(addContact(name, email));

      const actions = store.getActions();
      const expectedPayload = { type: 'ADD_CONTACT', newContact : {name, email} };
      expect(actions).toEqual([ expectedPayload ]);
    });
    it('should dispatch deleteContact with correct type:DELETE_CONTAT', () => {
      const initialState = {};
      const store = mockStore(initialState);

      const name = 'Dummy';
      const email = 'foo@bar.com';

      store.dispatch(deleteContact(name, email));

      const actions = store.getActions();
      const expectedPayload = { type: 'DELETE_CONTACT', name };
      expect(actions).toEqual([ expectedPayload ]);
    });

    it('should dispatch PING_CONTACT_SUCCESS with correct type:DELETE_CONTAT', () => {
      const initialState = {};
      const store = mockStore(initialState);

      const name = 'Dummy';
      const email = 'foo@bar.com';

      store.dispatch(deleteContact(name, email));

      const actions = store.getActions();
      const expectedPayload = { type: 'DELETE_CONTACT', name };
      expect(actions).toEqual([ expectedPayload ]);
    });
  });
});