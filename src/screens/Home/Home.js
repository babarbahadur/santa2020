import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Modal, TextInput } from 'react-native'
import { styles } from "./style";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LottieView from 'lottie-react-native';
import gift from '../../assets/animations/gift.json'; 
import AsyncStorage from '@react-native-community/async-storage'
import moment from 'moment'
import DateTimePickerModal from "react-native-modal-datetime-picker";


export default function Home(props) {

  const [name, setName] = useState()
  const [dob, setDOB] = useState('')
  const [modalView, setModalView] = useState(false)
  const [calanderVisible, setCalanderVisible] = useState(false)


  useEffect(() => {
    getUserInfo()
  }, [])

  const getUserInfo = async() =>{
    try {
      const user = await AsyncStorage.getItem('userInfo');
      if (user !== null) {
        let data = JSON.parse(user); 
        setName(data.name)
        setDOB(data.dob)
        console.log('data . name --->', data.name)
        console.log('data . dob --->', data.dob)
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  const updateInfo = async() =>{

    try {
      const user = await AsyncStorage.getItem('userInfo');
      if (user !== null) {
        let data = JSON.parse(user); 
        data.name = name
        data.dob = dob

        await AsyncStorage.setItem('userInfo',JSON.stringify(data))
        setModalView(false)
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  const handleModal = () =>{
    setModalView(true)
  }

  const handlePicker = (date) => {

    setDOB(moment(date).format('MMMM Do YYYY'))
    setCalanderVisible(false)
  }

  const ViewGift = async () =>{

    try {
      const user = await AsyncStorage.getItem('userInfo');
      if (user !== null) {
        let data = JSON.parse(user); 
        var today = new Date();
        var birthDate = data.dob.split(' ')
        var age = today.getFullYear() - +birthDate[2]
        console.log('age --->', age)
        props.navigation.navigate('Gift', {age: age})

      }
    } catch (error) {
      console.log(error.message)
    }
  }
  
  const renderHeader = () => {
    return(
      <View>
        <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
          <Text style={styles.headerText}>Hi,</Text>
          <TouchableOpacity style={{ marginTop: 10}} onPress={() => handleModal()}>
            <Icon name="dots-vertical" size={30} color='white' />
          </TouchableOpacity>
        </View>
        <Text style={styles.headerText2}>{name}</Text>
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
      <TouchableOpacity style={styles.buttonView} activeOpacity={0.8} onPress={() => ViewGift()}>
        <Text style={styles.buttonText}>Let's see what Santa has for you!</Text>
      </TouchableOpacity>

      <Modal 
        animationType="slide"
        transparent={true}
        visible={modalView}
        onRequestClose={() => setModalView(false)}>
        <View style={[styles.container1, styles.modalBackgroundStyle]}>
            <View style={styles.modalView}>
              <View style={{flexDirection: "row"}}>
                <Text style={{color: 'black', borderBottomWidth: 1, borderBottomColor: 'grey', width: '80%', textAlign: "center", paddingBottom: 10, fontSize: 16, fontWeight: 'bold'}}>Update Information</Text>
              </View>
              <View style={{flexDirection: "row", marginTop: '25%'}}>
                <Text style={styles.elementText}>Name : </Text>
                <TextInput style={styles.elements} value={name} onChangeText ={(text)=> setName(text)}/>
              </View>
              <View style={styles.elementView}>
                <Text style={styles.elementText}>DOB : </Text>
                <TouchableOpacity onPress={() => setCalanderVisible(true)} style={{marginTop: '5%'}}>
                  <Text style={styles.elements}>{dob !='' ? dob : 'YOUR DATE OF BIRTH'}</Text>
                </TouchableOpacity>
              </View>
              <DateTimePickerModal
                isVisible={calanderVisible}
                onConfirm={handlePicker}
                onCancel={() => setCalanderVisible(false)}
                mode="date"
                date={new Date()}
              />
              <TouchableOpacity
                style={styles.openButton}
                onPress={() => updateInfo()}>
                <Text style={styles.textStyle}>Update</Text>
              </TouchableOpacity>
            </View>
        </View>
      </Modal>
    </View>
  )
}
