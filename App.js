import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
 
import Task from "./src/pages/Task/";
import NewTask from "./src/pages/NewTask/";
import Details from "./src/pages/Details/";
import NewUser from "./src/pages/NewUser/";
import Login from "./src/pages/Login";


 
const Stack = createStackNavigator();
 
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
         <Stack.Screen
          name="Novo Usuário"
          component={NewUser}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Tarefas"
          component={Task}
          options={{
            headerLeft: null,
            headerTintColor: "#2e8daf",
          }}
        />
        <Stack.Screen
          name="Nova Tarefa"
          component={NewTask}
          options={{
            headerTintColor: "#2e8daf",
          }}
          
        />
        <Stack.Screen
          name="Detalhes da Tarefa"
          component={Details}
          options={{
            headerTintColor: "#2e8daf",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}