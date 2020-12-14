import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import LottieView from 'lottie-react-native';
import santa from '../../assets/animations/santa.json';
import { styles } from "./style"; 
import { colors } from '../../config';

export default StartScreen = (props) => {
    const backgroundAnimation = () => {
        return(
          <View style={styles.container}>
            <LottieView
              source={santa}
              autoPlay
              loop
              style={styles.loader}
            />
          </View>
        )
    }

    return (
        <View style={{ backgroundColor: colors.primary, flex: 1}} >
            <Text style={[styles.heading]}>Santa2020</Text>
            {backgroundAnimation()}
            <TouchableOpacity style={styles.buttonView} onPress={ () => props.navigation.navigate('InformationScreen')}>
                <Text style={styles.buttonText}>Let's start!</Text>
            </TouchableOpacity>
        </View>
    )
}