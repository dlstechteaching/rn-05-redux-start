import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TodosScreen } from "../screens/TodosScreen";
import { Navigation } from "./Navigation";

const Stack = createNativeStackNavigator();

export const AppStack = () => {
    return (
        <Stack.Navigator initialRouteName={Navigation.Todos}>
            <Stack.Screen name={Navigation.Todos} component={TodosScreen} options={{ title: 'Todos' }}/>
        </Stack.Navigator>
    )
}