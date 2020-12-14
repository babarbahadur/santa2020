import { ScaledSheet } from 'react-native-size-matters';
import { colors } from '../../config';


export const styles = ScaledSheet.create({
    mainView: {
        flex: 1,
    },
    heading: {
        fontSize: '50@ms',
        fontWeight: 'bold',
        alignSelf: 'center',
        marginHorizontal: '20@ms',
        marginTop: '30@ms',
        color: colors.white
    },
    container: {
        height: '100@ms',
        width: '100%',
        alignItems: 'center',
        marginTop: '50@ms'
    },
    loader: {
        height: '100%',
        width: '100%'
    },
    buttonView: {
        height: '35@ms',
        width: '60%',
        marginTop: '10@ms',
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
    nameDateView:{ 
        height: '40@ms',
        width: '80%',
        borderRadius: '50@ms',
        alignSelf: 'center',
        marginBottom: '15@ms',
        justifyContent: 'center',
        alignItems: 'center'
    },
    backgroundView: {
        position: 'absolute',
        opacity: 0.5,
        borderRadius: '50@ms',
        height: '100%',
        width: '100%',
        backgroundColor: '#efefef',
    },
    nameInput: {
        fontSize: '14@ms',
        fontWeight: 'bold',
        color: 'white',
        width: '100%',
        alignSelf: 'center',
        textAlign: 'center',
        color: 'white'
    },
    dobText: {
        fontSize: '14@ms',
        fontWeight: 'bold',
        color: 'white',
        width: '100%',
        alignSelf: 'center',
        textAlign: 'center',
        color: 'white'
    }
});
