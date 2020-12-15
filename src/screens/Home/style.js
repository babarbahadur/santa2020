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
  },
  container1: {
    flex:1,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: "center",
    width: null,
    height: null,
  },
  modalBackgroundStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    width: '300@ms',
    height: '300@ms',
    borderRadius: 20,
    padding: '30@ms',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: "center",
  },
  elementView:{
    flexDirection: "row", 
    marginTop: '30@ms'
  },
  elements:{
    color: 'black', 
    borderBottomWidth: 1, 
    borderBottomColor: 'grey', 
    width: '150@ms', 
    textAlign: "center", 
    paddingBottom: '3@ms', 
    marginLeft: '15@ms',
    marginTop: '-10%'
  },
  elementText:{
    color: 'black',
    fontSize: '14@ms',
    fontWeight: 'bold'
  },
  openButton: {
    backgroundColor: '#4693FF',
    borderRadius: '50@ms',
    height: '30@ms',
    width: '150@ms',
    elevation: 5,
    marginTop: '60@ms',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: '5@ms'
  },
});
