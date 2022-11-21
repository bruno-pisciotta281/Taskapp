import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import firebase from "../../config/firebase.js";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./style";

export default function Task({ route, navigation }) {
    const [task, setTask] = useState([]);
    const database = firebase.firestore()

    function logout(){
      firebase.auth().signOut().then(()=>{
        navigation.navigate("Login")
      }).catch((error)=>{
        
      });
    }

    
    
    function deleteTask(id) {
      database.collection(route.params.idUser).doc(id).delete();
    }
   
    useEffect(() => {
      database.collection(route.params.idUser).onSnapshot((query) => {
        const list = [];
        query.forEach((doc) => {
          list.push({ ...doc.data(), id: doc.id });
        });
        setTask(list);
      });
    }, []);
    
    return(
        <View style={styles.container}>
          
          <FlatList
            showsVerticalScrollIndicator={false}
            data={task}
            renderItem={( { item } )=>{
               return(
              <View style={styles.Tasks}>
                <TouchableOpacity
                  style={styles.deleteTask}
                  onPress={() => {
                    deleteTask(item.id)
                  }}
                >
                <FontAwesome
                  name="trash"
                  size={23}
                  color="#2e8daf"
                >
                </FontAwesome>
                </TouchableOpacity>
                <Text
                  style={styles.DescriptionTask}
                  onPress={()=>
                    navigation.navigate("Detalhes da Tarefa",{
                      id: item.id,
                      description: item.description,
                      idUser: route.params.idUser
                    })
                  }
                >
                {item.description}  
                </Text>  
     
              </View>
              )
            }}
          />
          <TouchableOpacity
            style={styles.buttonNewTask}
            onPress={() => navigation.navigate("Nova Tarefa", { idUser: route.params.idUser })}
          >
            <Text style={styles.iconButton}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonLogout}
            onPress={() => {logout()}}
            >
              <Text style={styles.iconButtonLogout}>
                <MaterialCommunityIcons 
                name="location-exit" 
                size={23} 
                color="#ffffff" 
                />
              </Text>
          </TouchableOpacity>
        </View>
      )
    }

      
    