import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerRoot: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 60,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 5,
    paddingBottom: 5,
  },
  containerContact: {
    flex: 4,
    padding: 8,
    flexDirection: 'column'
  },
  containerImage: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingRight: 8
  },
  contactName: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
    color: 'white',
  },
  contactImage: {
    height: 50,
    width: 50,
    borderRadius: 25
  }
});

export default styles;