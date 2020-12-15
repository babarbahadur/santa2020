import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import LottieView from 'lottie-react-native';
import santa from '../../assets/animations/santa.json';
import { styles } from "./style"; 
import { colors } from '../../config';
import AsyncStorage from '@react-native-community/async-storage'


export default StartScreen = (props) => {

  const getUserInfo = async() =>{

    try {
      const user = await AsyncStorage.getItem('userInfo');
      if (user !== null) {
        props.navigation.navigate('Home')
      }
    } catch (error) {
      console.log(error.message)
    }
  }

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
            <TouchableOpacity style={styles.buttonView} onPress={ () => getUserInfo()}>
                <Text style={styles.buttonText}>Let's start!</Text>
            </TouchableOpacity>
        </View>
    )
}