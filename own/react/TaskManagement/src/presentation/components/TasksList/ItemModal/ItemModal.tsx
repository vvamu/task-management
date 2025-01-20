import { Button, TextInput, View } from "react-native";

export default function ItemModal(){
    return(<View>
        <TextInput >Title</TextInput>
        <TextInput >Description</TextInput>
        <TextInput >ExecutionDateTime</TextInput>
        <TextInput >Adress</TextInput>
        <TextInput >Status</TextInput>
        <Button title="Create"/>
    </View>)
}