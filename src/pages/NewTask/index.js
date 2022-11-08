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
      <Text style={styles.label}>Descrição</Text>
      <TextInput
      style={styles.input}
      placeholder="Ex: Jogar o lixo fora"
      onChangeText={setDescription}
      value={description}
      />
      <Text style={styles.textInfo}>Clique em "Salvar" para cadastrar sua Tarefa</Text>
      <TouchableOpacity 
        style={styles.buttonNewTask}
        onPress={()=>{
          addTask()
        }}
      >
        <Text style={styles.iconButton}>Salvar</Text>
      </TouchableOpacity>
    </View>
  )
}