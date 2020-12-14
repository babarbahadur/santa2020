import { ScaledSheet } from 'react-native-size-matters';
import { colors } from './index';

export const commonStyles = ScaledSheet.create({
    lightThemeView: {
        backgroundColor: colors.themeLight
    },
    darkThemeView: {
        backgroundColor: colors.themeDark
    },
    modalStyle: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 18,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 20
    },

});
