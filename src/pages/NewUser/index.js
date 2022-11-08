import React, { useState } from 'react';
import { KeyboardAvoidingView, View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './style';
import firebase from '../../config/firebase'
import { MaterialCommunityIcons } from "@expo/vector-icons";


export default function NewUser({ navigation }){
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorRegister, setErrorRegister] = useState("");

  const register = () =>{
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {

      let user = userCredential.user;
      navigation.navigate("Tarefas" , { idUser: user.uid });
      
  
    })
    .catch((error) => {
      setErrorRegister(true)
      let errorCode = error.code;
      let errorMessage = error.message;
    });
  };
  

    return (
      <KeyboardAvoidingView
      behavior={Platform.OS === "ios"? "padding" : "height"}
      style={styles.container}
      >
        <Text style={styles.title}>Crie sua conta!</Text>
      <TextInput
        style={styles.input} 
        placeholder="Insira seu E-mail"
        type="text"
        value={email}
        onChangeText={(text) => setEmail(text)}
     />
      <TextInput
      style={styles.input} 
      secureTextEntry={true}
      placeholder="Insira uma Senha"
      type="text"
      value={password}
      onChangeText={(text) => setPassword(text)}
      />
      {errorRegister === true
      ? 
      <View style={styles.contentAlert}>
        <MaterialCommunityIcons 
        name="alert-circle" 
        size={24} 
        color="#bdbdbd" 
        />
        <Text style={styles.warningAlert}>Email ou Senha Inválidos</Text>
      </View>
      :
        <View/>
      }
      { email === "" || password === ""
      
      ? 
      <TouchableOpacity
      disabled={true}
      style={styles.buttonRegister}
      >
      <Text style={styles.textButtonRegister}>Criar Conta</Text>
      </TouchableOpacity>
      :
      <TouchableOpacity
      style={styles.buttonRegister}
      onPress={register}
      >
      <Text style={styles.textButtonRegister}>Registro</Text>
      </TouchableOpacity>
      }
      <Text style={styles.Login}>
      Já possui Login?
      </Text>
      <Text
      style={styles.linkLogin}
      onPress={() => navigation.navigate("Login")}
      >
      Faça Login!
      </Text>
     
      <View style={{height:100}}/>
      </KeyboardAvoidingView>
    );
}
