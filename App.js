import React from 'react';
import Loading from './Loading';
import * as Location from "expo-location";
import { Alert } from 'react-native';
const API_KEY = "3061ca2a0dcde02c56e7946152c4ceef";
import axios from "axios";
export default class extends React.Component {
  state={
    isLoading:true,
  }
  getWeahter = async(latitude,longitude) =>{
    const {data} = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}`);
    console.log(data);
  }
  getLocation = async() =>{
    try{
      // throw Error();
      await Location.requestPermissionsAsync();
      const {coords:{latitude, longitude}} = await Location.getCurrentPositionAsync();
      this.getWeahter(latitude,longitude);
      this.setState({isLoading:false});
    }catch(error){
      Alert.alert("Can't find you.", "So sad");
    }
  }
  componentDidMount(){
    this.getLocation();
  }
  render(){
    const {isLoading} = this.state;
    return isLoading ? <Loading/>:null;
  }
}
