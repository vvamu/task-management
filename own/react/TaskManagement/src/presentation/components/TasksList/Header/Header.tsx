import { Button, View } from "react-native";

export default function Header(){
    return (
        <View>
            <Button title="+" color='green' onPress={() => handleBtnCreateTask()}></Button>
        </View>
    )
}

function handleBtnCreateTask(){
    
}