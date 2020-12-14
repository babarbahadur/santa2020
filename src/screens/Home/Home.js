import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from "./style";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LottieView from 'lottie-react-native';
import gift from '../../assets/animations/gift.json'; 

export default function Home() {

  const renderHeader = () => {
    return(
      <View>
        <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
          <Text style={styles.headerText}>Hi,</Text>
          <TouchableOpacity style={{ marginTop: 10}}>
            <Icon name="dots-vertical" size={30} color='white' />
          </TouchableOpacity>
        </View>
        <Text style={styles.headerText2}>Babar Bahadur</Text>
      </View>
    )
  }

  const renderGift = () => {
    return(
      <View style={styles.container}>
        <LottieView
          source={gift}
          autoPlay
          loop
          style={styles.loader}
        />
      </View>
    )
  }


  return (
    <View style={styles.mainView}>
      { renderHeader() }
      { renderGift() }
      <TouchableOpacity style={styles.buttonView} activeOpacity={0.8}>
        <Text style={styles.buttonText}>Let's see what Santa has for you!</Text>
      </TouchableOpacity>
    </View>
  )
}
