import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Modal, TextInput, Image } from 'react-native'
import overeighteen from '../../shared/overEighteen'
import undereighteen from '../../shared/underEighteen'
import { styles } from './style';
// import gift from '../../assets/animations/28583-gift-animation'; 
// import LottieView from 'lottie-react-native';
// import AsyncStorage from '@react-native-community/async-storage'


export default Gift = (props) =>{

    const { age } = props.route.params;
    console.log('age from gift --->',age)
    const Items1 = overeighteen.overeighteen;
    const Items2 = undereighteen.undereighteen;
    const [images, setImages] = useState('')

      useEffect(() => {
        itemShuffle();
      }, []);
    

    // useEffect(() => {
    //     setTimeout(() => {
    //         renderGift
    //     }, 2000);
    // }, [])


    const itemShuffle = () => {
        const array = []

        if(age > 18)
        {
            array.push(...Items1)
        }
        else if(age < 18){
            array.push(...Items2)
        }

        const randonNumber = Math.floor(Math.random()*3)    
        setImages(array[randonNumber]);
      };

    // const renderGift = () =>{
    //     return(
    //         <View style={styles.container}>
    //           <LottieView
    //             source={gift}
    //             autoPlay
    //             loop
    //             style={styles.loader}
    //           />
    //         </View>
    //       )
    // }
  
     return(
         <View style={styles.mainView}>
            <Image source={images.image} style={styles.gift}/>
         </View>
     )
    }