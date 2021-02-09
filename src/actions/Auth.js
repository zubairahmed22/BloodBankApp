
import auth from "@react-native-firebase/auth"

import Snackbar from "react-native-snackbar"
import database from "@react-native-firebase/database"


export const signUp = (data) => async (dispatch) =>{
console.log(data)
const {email,password} = data
auth().createUserWithEmailAndPassword(email,password)
.then((data)=>{
    console.log(data)
    console.log("User creation was success")

    database()
    .ref('/users/'+ data.user.uid)
    .set({
        email,
        uid: data.user.uid
    })
    .then(()=>{
        Snackbar.show({
            text:"account created",
            color:"white",
            backgroundColor:"#BF2726"
    
    })
    })

   
  
})
.catch((error) => {
    console.log(error)
    Snackbar.show({
        text:"SignUp Faild",
        textColor:"white",
        backgroundColor:"#BF2726"
    })
})
}


export const signIn = (data) => async (dispatch) =>{
    console.log(data)
    const {email,password} = data

    auth()
    .signInWithEmailAndPassword(email,password)
    .then(()=>{
        console.log("SignIn success")
        Snackbar.show({
            text:"account signIn success",
            textColor:"white",
            backgroundColor:"#BF2726"
        })
    })
    .catch((error) =>{
        console.error(error)
        Snackbar.show({
            text:"SignIn faild",
            textColor:"white",
            backgroundColor:"#BF2726"
        })
    })
}

export const signOut =() => async(dispatch) =>{
    auth()
    .signOut()
    .then(()=>{
        Snackbar.show({
            text:"SignOut success",
            textColor:"white",
            backgroundColor:"#BF2726"
        })
    })
    .catch((error) =>{
        console.log(error)
        Snackbar.show({
            text:"SignOut Faild",
            textColor:"white",
            backgroundColor:"#BF2726"
        })
    })
}