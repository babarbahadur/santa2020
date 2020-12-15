import {ScaledSheet} from 'react-native-size-matters';
import { colors } from '../../config';

export const styles = ScaledSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: colors.primary,
    // padding: '20@ms'
    justifyContent: "center",
    alignItems: "center"
  },
  gift:{
    width: '150@ms', 
    height: '200@ms'
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
});
