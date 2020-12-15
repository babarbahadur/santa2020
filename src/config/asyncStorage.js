import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-community/async-storage'

export default asyncStorage = async() =>{
  
      try {
        const user = await AsyncStorage.getItem('userInfo');
        if (user !== null) {
            let data = JSON.parse(user); 
        }
      } catch (error) {
        console.log(error.message)
      }
    }