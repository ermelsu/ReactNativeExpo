import React from "react"; /// importa o react
import { NavigationContainer} from '@react-navigation/native'; /// importa o navigation container do módulo navigation
import {createNativeStackNavigator } from "@react-navigation/native-stack"; 


/// importa as duas páginas criadas
import Home from "./pages/Home";
import Detail from "./pages/Detail";

/// cria navigators e screens
const stack = createNativeStackNavigator();

function Routes(){
    return(
        <NavigationContainer>
            <stack.Navigator>
                <stack.Screen
                    name="Home"
                    component={Home}
                    options={{headerShown: false}} ///tira o header padrão
                />  
                <stack.Screen
                 name="Detail"
                 component={Detail}
                 />  
            </stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;