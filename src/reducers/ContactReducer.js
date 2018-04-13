const defaultContact = [
  { name: 'Dhivya', email: 'raj.dhivya@gmail.com' , pinged: 0},
  { name: 'DP', email: 'hsdpal@gmail.com' , pinged: 0},
  { name: 'Neel', email: 'vascodagama1@gmail.com' , pinged: 0},
  { name: 'Cheetan', email: 'mail@chetankothari.in', pinged: 0},
  { name: 'Dewa', email: 'awidiya.dewa@gmail.com' , pinged: 0},
  { name: 'Kim', email: 'mail@gmail.com' , pinged: 0},
  { name: 'Other Kim', email: 'mail@gmail.com' , pinged: 0},
  { name: 'Another Kim', email: 'mail@gmail.com' , pinged: 0},
  { name: 'Friend of Kim', email: 'mail@gmail.com' , pinged: 0},
  { name: 'Mother of Kim', email: 'mail@gmail.com' , pinged: 0},
  { name: 'Father of Kim', email: 'mail@gmail.com' , pinged: 0}
];

const incrementPing = (state, action) => {
  return state.map(contact =>
    contact.name === action.name ?
        { ...contact, pinged: contact.pinged+1 } :
        contact
  );
};

const contactReducer = ( state = defaultContact, action) => {
  switch(action.type){
    case 'ADD_CONTACT':
      return [
        { ...action.newContact, pinged: 0 },
          ...state
      ];
    case 'DELETE_CONTACT':
      return state.filter( (contact, i) => contact.name !== action.name )
    case 'PING_CONTACT_SUCCESS':
      return incrementPing(state, action.name)
    default:
      return state
  }
};

export default contactReducer