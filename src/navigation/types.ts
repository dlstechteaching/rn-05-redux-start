import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Navigation } from "./Navigation";

export type AppStackNavigatorParamList = {
    [Navigation.Todos] : undefined,
};

export type HomeStackScreenProps = NativeStackScreenProps<
    AppStackNavigatorParamList,
    typeof Navigation.Todos
>;
