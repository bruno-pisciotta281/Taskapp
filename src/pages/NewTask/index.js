import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import firebase from '../../config/firebase.js'
import styles from "./style";

export default function NewTask({ navigation, route }, props) {
 
    const [description, setDescription] = useState(null);
    const database = firebase.firestore()
    function addTask(){
      database.collection(route.params.idUser).add({
        description: description,
        status: false
      })
      navigation.navigate("Tarefas")
    }

return(
    <View style={styles.container}>
      <Text style={styles.label}>Description</Text>
      <TextInput
      style={styles.input}
      placeholder="Ex: Jogar o lixo fora"
      onChangeText={setDescription}
      value={description}
      />
      <TouchableOpacity 
        style={styles.buttonNewTask}
        onPress={()=>{
          addTask()
        }}
      >
        <Text style={styles.iconButton}>Save</Text>
      </TouchableOpacity>
    </View>
  )
}