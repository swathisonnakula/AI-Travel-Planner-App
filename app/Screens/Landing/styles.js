import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    height: '100%',
  },
  bgImage: {
    width: '100%',
    height: 440,
  },
  textContainer: {
    width: '100%',
    height: 400,
    backgroundColor: 'white',
    marginTop: -30,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 40,
  },
  title: {
    marginHorizontal: 'auto',
    fontSize: 34,
    fontWeight: 'bold',
    color: 'black',
  },
  subTitle: {
    marginHorizontal: 'auto',
    fontSize: 16,
    textAlign: 'center',
    color: 'black',
    paddingVertical: 20,
  },
  buttonContainer: {
    marginBottom: 'auto',
    marginTop: '35%',
  },
  button: {
    backgroundColor: 'black',
    textAlign: 'center',
    color: 'white',
    borderRadius: 25,
    padding: 18,
  },
});
export default styles;
