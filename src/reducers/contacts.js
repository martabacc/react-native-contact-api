const defaultContact = [
  { name: 'Dhivya', email: 'raj.dhivya@gmail.com' , pinged: false},
  { name: 'DP', email: 'hsdpal@gmail.com' , pinged: false},
  { name: 'Neel', email: 'vascodagama1@gmail.com' , pinged: false},
  { name: 'Cheetan', email: 'mail@chetankothari.in', pinged: false },
  { name: 'Dewa', email: 'awidiya.dewa@gmail.com' , pinged: false},
  { name: 'Kim', email: 'mail@gmail.com' , pinged: true},
  { name: 'Other Kim', email: 'mail@gmail.com' , pinged: true},
  { name: 'Another Kim', email: 'mail@gmail.com' , pinged: true},
  { name: 'Friend of Kim', email: 'mail@gmail.com' , pinged: true},
  { name: 'Mother of Kim', email: 'mail@gmail.com' , pinged: false},
  { name: 'Father of Kim', email: 'mail@gmail.com' , pinged: false}
];

const contacts = ( state = defaultContact, action) => {
  switch(action.type){
    case 'ADD_CONTACT':
      return [
        { ...action.newContact, pinged: false },
          ...state
      ];
    case 'DELETE_CONTACT':
      return state.filter( (contact, i) => contact.name !== action.name )
    default:
      return state
  }
};

export default contacts