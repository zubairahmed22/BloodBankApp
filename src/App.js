import React,{useEffect} from "react"

import {Text, View, StatusBar}from "react-native"
import 'react-native-gesture-handler';


import auth from "@react-native-firebase/auth"

import {NavigationContainer}from "@react-navigation/native"
import {createStackNavigator}from "@react-navigation/stack"

import {useDispatch,connect} from "react-redux"

import Donation from "./screen/Donation"
import SignIn from "./screen/SignIn"
import SignUp from "./screen/SignUp"
import Home from "./screen/Home"
import CustomHeader from "./Layout/CustomHeader"

import {SET_USER,IS_AUTHTHENTICATED} from "./actions/Action.type"
import database from "@react-native-firebase/database"
import { signIn } from "./actions/Auth";


const Stack = createStackNavigator();

  


const App =({authState}) =>{

 
   
  

  const dispatch = useDispatch()

  const onAuthStateChanged = (user) =>{
    if(user){
      dispatch({
        type: IS_AUTHTHENTICATED,
        payload: true
      })

      console.log(user._user.uid)

      database()
      .ref(`users/${user._user.uid}`)
      .on("value",(snapshot) =>{
        console.log("UserDatials",snapshot.val())
        dispatch({
          type: SET_USER,
          payload: snapshot.val()
        })
      })
    }else{
      dispatch({
        type: IS_AUTHTHENTICATED,
        payload:false
      })
    }
  }

useEffect(()=>{
  const subscriber = auth().onAuthStateChanged(onAuthStateChanged )
  return subscriber;
},[])

  return(
<>
<StatusBar backgroundColor="#EC2227"/>
<NavigationContainer>
  <Stack.Navigator
  screenOptions={{
    header:(props) => <CustomHeader{...props}/>
  }}
  >
    {authState.isAuthenticated ?(
      <>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Donation" component={Donation}/>
      </>
    ):(
      <>
        <Stack.Screen name="SignIn" component={SignIn}/> 
        <Stack.Screen name="SignUp" component={SignUp}/>
 
      </>
    )}
  </Stack.Navigator>
</NavigationContainer>
  </>
  )
  
}

const mapStateToProps = (state) =>({
  authState: state.auth
})

export default connect(mapStateToProps) (App);
