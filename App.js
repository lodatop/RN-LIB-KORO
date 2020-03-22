import React, {useState} from 'react';
import { StyleSheet, Button, Text, View, Alert } from 'react-native';

import { KoroButton, KotoModal } from './components/Button'
import { KoroModal } from './components/Modal';
 
export default function App() {
  const [disabled, setDisabled] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="Open Modal" onPress={()=> setModalOpen(true)} color="red" style={{width: 300}}/>
      <KoroModal visible={modalOpen} onRequestClose={()=> setModalOpen(false)}>
      <KoroButton 
        title='Button'
        disabled={disabled}
        // disabledColor="yellow"
        // disabledBackgroundColor="yellow"
        // touchColor='green'
        textStyle={{color: 'white'}}
        buttonStyle={{paddingVertical: 10, backgroundColor: 'blue'}} 
        onPress={() => Alert.alert("Hello my fridend")}
        onLongPress={() => Alert.alert("Hello im being long pressed")}/>
        <View style={{width: 200}}>
          <Button title="boton normal" onPress={()=> setDisabled(!disabled)} color="red" style={{width: 300}}/>
        </View>
        </KoroModal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
