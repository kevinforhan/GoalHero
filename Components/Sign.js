import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TextInput,
  TouchableHighlight,
  Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import User from "./User";
import { useForm } from "react-hook-form";
import axios from "axios";
import {connect} from 'react-redux'
import {auth} from '../Store/user'

const Sign = (props) => {
    const { handleSubmit, register, setValue } = useForm();
   
    useEffect(() => {
        register("name");
      register("email");
      register("password");
    }, [register]);




const onSubmit=async(values)=>{

  try {
      
  
       
        const formName = 'signup'
        const email = values.email
        const password = values.password
      await  props.signup(email,password,formName)
       
       const res = await axios.get('http://localhost:8080/auth/me')
     //  console.log("res.data",res.data)
       //console.log("&&&&&",props.user,"^^^^^^^^^^^")
       if(!res.data) throw new Error;
       Alert.alert("Congratulations")
       props.navigation.navigate("HomeScreen")
    } catch (error) {
        Alert.alert("Invalid Input")
    }
}




const error = props.error
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Sign Up!</Text>
        <TextInput placeholder="Name:" style={styles.textInputStyle}  onChangeText={(text) => setValue("name", text)}/>
        <TextInput placeholder="Email:" style={styles.textInputStyle}  onChangeText={(text) => setValue("email", text)}/>
        <TextInput
          placeholder="Password:"
          password={true}
          style={styles.textInputStyle}
          onChangeText={(text) => setValue("password", text)}
        />
        <View>{ error && error.response && <View> {error.response.data} </View>}</View>
  
        <View style={styles.buttonStyle}>
        <Button
            title="Signup"
            onPress={handleSubmit(onSubmit)}
          />
  
        </View>
  
        <StatusBar style="auto" />
      </View>
    );
  };



  const styles = StyleSheet.create({
    container: {
      height: 666,
      // flex: 0,
      //   flexDirection:"row",
      //   flexWrap: "wrap",
      backgroundColor: "#dddddd",
      alignItems: "center",
      // justifyContent: 'center',
    },
    img: {
      width: 55,
      height: 55,
      borderRadius: 200 / 2,
    },
  
    welcome: {
      marginTop: 111,
      fontSize: 28,
      marginBottom: 99,
    },
  
    textInputStyle: {
      marginTop: 8,
      width: "100%",
      height: 38,
      backgroundColor: "white",
      borderRadius: 100 / 50,
    },
    buttonStyle: {
      backgroundColor: "pink",
      width: 200,
      height: 40,
      borderRadius: 200 / 20,
      marginTop: 55,
      alignItems: "center",
      justifyContent: "center",
    },
  });
  


  const mapSignup = state => {
    return {
     
      user: state.user
    }
  }
  
  const mapDispatch = dispatch => {
   
    return {
    
     signup:(email, password, formName)=>
        dispatch(auth(email, password, formName))
      
    }
  }
  




  export default connect(mapSignup, mapDispatch)(Sign)