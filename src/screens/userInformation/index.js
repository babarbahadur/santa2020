import React, { useState} from 'react'
import { View, Text, TouchableOpacity,Image } from 'react-native'
import LottieView from 'lottie-react-native';
import information from '../../assets/animations/information.json';
import { styles } from "./style"; 
import { colors } from '../../config';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment'
import { TextInput } from 'react-native-gesture-handler';
// import validate from '../utils/validate_wrapper';
// import { isOverEighteen } from '../utils/validateAge';
import AsyncStorage from '@react-native-community/async-storage'

export default UserInformation = (props) => {

    const [name, setName] = useState('')
    const [dob, setDob] = useState('')
    const [calanderVisible, setCalanderVisible] = useState(false)

    const handlePicker = (date) => {

        setDob(moment(date).format('MMMM Do YYYY'))
        setCalanderVisible(false)
    }

    const setItemsToStorage = async() =>{

        if(name && dob == '')
            alert('Invalid Input') 

        let obj = {  
            name,  
            dob 
        }
        try {
            await AsyncStorage.setItem('userInfo',JSON.stringify(obj));  
            props.navigation.navigate('Home')
        } catch (error) {
            alert(error.message)
        }
    }

    const backgroundAnimation = () => {
        return(
          <View style={styles.container}>
            <LottieView
              source={information}
              autoPlay
              loop
              style={styles.loader}
            />
          </View>
        )
    }

    return (
        <View style={{ backgroundColor: colors.primary, flex: 1}} >
            <Text style={[styles.heading]}>User Info</Text>
            {backgroundAnimation()}

            <View style={[styles.nameDateView, { marginTop: 50}]}>
                <View style={styles.backgroundView} />
                <TextInput
                    placeholder={'YOUR NAME..'}
                    value={name}
                    onChangeText={(value) => setName(value)}
                    style={styles.nameInput}
                    maxLength={30}
                    autoCapitalize={'characters'}
                />
            </View>

            <TouchableOpacity activeOpacity={0.8} onPress={() => setCalanderVisible(true)} style={styles.nameDateView}>
                <View style={styles.backgroundView} />
                <Text style={styles.dobText}>{dob !='' ? dob : 'YOUR DATE OF BIRTH'}</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.buttonView} onPress={() => setItemsToStorage()}>
                <Text style={styles.buttonText}>Next!</Text>
            </TouchableOpacity>
             <DateTimePickerModal
                isVisible={calanderVisible}
                onConfirm={handlePicker}
                onCancel={() => setCalanderVisible(false)}
                mode="date"
                date={new Date()}
            />
        </View>
    )
}