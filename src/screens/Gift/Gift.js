import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity, Modal, TextInput, Image } from 'react-native'
import { useState, useEffect } from 'react/cjs/react.development';
import giftsover18 from '../../shared/overEighteen/overeighteen'

export default Gift = async() =>{

    const Items = giftsover18;
    const [images, setImages] = useState('')

    useEffect(() => {
        itemShuffle();
      }, []);


    const itemShuffle = () => {
        const array = []
        console.log('item shuffle count level 1', count)
        array.push(...Items)

        const randonNumber = Math.floor(Math.random()*3)    
        setImages(array[randonNumber]);
      };
  
     return(
         <View>
             <Image source={images}/>
         </View>
     )
    }