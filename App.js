import React from 'react';
import Loading from './Loading';
import * as Location from "expo-location";
import { Alert } from 'react-native';
const API_KEY = "3061ca2a0dcde02c56e7946152c4ceef";
import axios from "axios";
import Weather from './Weather';

export default class extends React.Component {
  state={
    isLoading:true
  }
  getWeahter = async(latitude,longitude) =>{
    const {
      data:{
        main:{temp},
        weather
      }
    } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`);
    this.setState({
      isLoading:false,
      condition: weather[0].main,
      temp:data.main.temp
    });
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
    const {isLoading, temp,condition} = this.state;
    return isLoading ? <Loading/>:<Weather temp ={Math.round(temp)} condition={condition}/>;
  }
}
