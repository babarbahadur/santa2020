import {ScaledSheet} from 'react-native-size-matters';
import { colors } from '../../config';

export const styles = ScaledSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: colors.primary,
    padding: '20@ms'
  },
  headerText: {
    fontSize: '50@ms',
    fontWeight: 'bold',
    color: 'white',
  },
  headerText2: {
    fontSize: '30@ms',
    fontWeight: 'bold',
    color: 'white',
  },
  container: {
    height: '250@ms',
    width: '100%',
    alignItems: 'center',
  },
  loader: {
    height: '100%',
    width: '100%'
  },
  buttonView: {
    height: '40@ms',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50@ms',
    backgroundColor: '#4693FF',
    elevation: 5,
    alignSelf: 'center',
    marginTop: '50@ms'
  },
  buttonText: {
    fontSize: '16@ms',
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
  }
});
