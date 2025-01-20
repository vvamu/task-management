/*import type {PropsWithChildren} from 'react';*/

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

export default function TaskList(){
return (
    <SafeAreaView >
      
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        >
        
        <View
          style={{
            backgroundColor:   Colors.white,
          }}>
          
        </View>
      </ScrollView>
    </SafeAreaView>
)
}