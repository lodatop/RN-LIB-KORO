import React, {useState} from 'react';
import { StyleSheet, Button, Text, View, Alert } from 'react-native';

import { KoroButton } from './components/Button'
import { KoroModal } from './components/Modal';
import { KoroIcon } from './components/Icon';
import { KoroAlert } from './components/Alert';
 
export default function App() {
  const [disabled, setDisabled] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="Open Modal" onPress={()=> setModalOpen(true)} color="red" style={{width: 300}}/>
      <KoroIcon icon="alert"/>
      <KoroModal visible={modalOpen} onRequestClose={()=> setModalOpen(false)}>
        <KoroButton 
          title='Button'
          icon="alert"
          disabled={disabled}
          // disabledColor="yellow"
          // disabledBackgroundColor="yellow"
          // touchColor='green'
          textStyle={{color: 'white'}}
          buttonStyle={{backgroundColor: 'blue'}} 
          onPress={() => Alert.alert("Hello my fridend")}
          onLongPress={() => Alert.alert("Hello im being long pressed")}/>
          <View style={{width: 200}}>
            <Button title="boton normal" onPress={()=> setDisabled(!disabled)} color="red" style={{width: 300}}/>
          </View>
        </KoroModal>
        <KoroAlert />
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
