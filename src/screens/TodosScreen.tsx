import React from "react";
import { FlatList, SafeAreaView, View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { MyButton } from "../components/common/MyButton";
import { MyTitle } from "../components/common/MyTitle";
import { fetchTodos } from "../redux/actions";
import { StoreState } from "../redux/store";

export const TodosScreen: React.VFC = () => {

    const todos = useSelector((state: StoreState) => state.todos);
    const dispatch = useDispatch();
    
    return (
        <View>
            <MyButton label={'fetch'} onPress={() => dispatch(fetchTodos())}/>
            <MyTitle label={`Amount of todos : ${todos.length}`}/>
            {
                todos.length > 0 && (
                    <SafeAreaView style={{ height: '90%'}}>
                    <FlatList
                        data={todos}
                        renderItem={({ item }) => {
                            return (
                                <View>
                                    <Text>{item.title}</Text>
                                </View>
                            )
                        }}
                        keyExtractor={item => item.id.toString()}
                    />
                    </SafeAreaView>
                )
            }
        </View>
    );
}