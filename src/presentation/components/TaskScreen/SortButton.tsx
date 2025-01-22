import { Modal, Pressable, View } from "react-native";
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
import SortModal from "./SortModal";
import { useState } from "react";
import { RNPickerSelect}  from '@react-native-picker/picker';


const SortButton = ({...props}) => {

    const [sortModalVisible, setSortModelVisible] = useState(false);
    
    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={sortModalVisible}
                onRequestClose={() => {
                    setSortModelVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                    
                    
                    </View>
                </View>
                </Modal>

                <RNPickerSelect
                onValueChange={(value) => console.log(value)}
                items={[
                    { label: 'Cancelled', value: -1 },
                    { label: 'Completed', value: 1 },
                    { label: 'In Progress', value: 0 },
                ]}
                />

        
        <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setSortModelVisible(true)}
        >
            <FontAwesome6 name="sort" iconStyle="solid" />
        </Pressable>
      </View>
    )
}

export default SortButton

//<SortModal setSortModelVisible={() => setSortModelVisible(false)} sortItemsByStatus={props.sortItemsByStatus()} sortItemsByDate={props.sortItemsByDate()}/>


/*
import { Button, View } from "react-native";

const SortModal = ({...props}) => {

    return (
        <View style={styles.container}>
          <View style={{ alignContent: "flex-end" }}>
            <Button title="X" color="red" onPress={props.setModalVisible} />
          </View>
        
            
          <Button title="Create" onPress={handleCreateItem} />
        </View>
      );
}

export default SortModal;
*/