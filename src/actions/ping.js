export const pingContact = (name) => ({
  type: 'PING_CONTACT',
  name
});

export const successPingContact = (name) => ({
  type: 'PING_CONTACT_SUCCESS',
  name
});



export const failedPingContact = () => ({
  type: 'PING_CONTACT_FAIL'
});