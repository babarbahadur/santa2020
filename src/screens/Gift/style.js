import {ScaledSheet} from 'react-native-size-matters';
import { colors } from '../../config';

export const styles = ScaledSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: colors.primary,
    // padding: '20@ms'
    // justifyContent: "center",
    alignItems: "center"
  },
  gift:{
    width: '90%',
    height: '200@ms',
    marginTop: '30@ms'
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
  heading: {
    fontSize: '80@ms',
    fontWeight: 'bold',
    color: 'white',
    marginTop: '50@ms'
  },
  subHeading: {
    fontSize: '25@ms',
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
  buttonView: {
    height: '40@ms',
    width: '50%',
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
  },
});
