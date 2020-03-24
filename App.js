import React, {useState} from 'react';
import { StyleSheet, Button, Text, View, Alert, ScrollView } from 'react-native';

import { KoroButton } from './components/Button'
import { KoroModal } from './components/Modal';
import { KoroIcon } from './components/Icon';
import { KoroDropdown } from './components/Dropdown';
import { KoroSelect } from './components/Select'
import { KoroAlert }  from './components/Alert';
import { KoroProgress } from './components/Progress'
import { KoroBadge } from './components/Badge';
import { KoroChip } from './components/Chip';
import { KoroInput } from './components/Input';
import { KoroSteps } from './components/Steps';
import { KoroCard } from './components/Card';
import { KoroTable } from './components/Table';

export default function App() {
  const [disabled, setDisabled] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [callAlert, setCallAlert] = useState(false)
  const [progressActive, setProgressActive] = useState(false)
  const [ds, setDs] = useState(1)

  const showProgress = () => {
    setProgressActive(true);
    setTimeout(()=>{
      setProgressActive(false)
    }, 4000)
  }

  const Header = () => (
    <View>
      <Text style={[{fontSize: 30, fontWeight: 'bold'}]}>Title</Text>
    </View>
  );
  
  const Footer = () => (
    <View >
      <Button title="Open Modal" onPress={()=> setModalOpen(true)} color="red" style={{width: 300}}/>
    </View>
  );

  const tableTitle = ['Title', 'Title2', 'Title3', 'Title4'];
  

  return (
    <ScrollView contentContainerStyle={{paddingVertical: 30}}>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Button title="Open Modal" onPress={()=> setModalOpen(true)} color="red" style={{width: 300}}/>
        <KoroIcon icon="alert"/>
        <KoroModal visible={modalOpen} borderStyle={{padding: 20}} onRequestClose={()=> setModalOpen(false)}>
          <KoroButton 
            title='Button'
            icon="alert"
            disabled={disabled}
            // disabledColor="yellow"
            // disabledBackgroundColor="yellow"
            // touchColor='green'
            textStyle={{color: 'white'}}
            buttonStyle={{paddingHorizontal: 30}} 
            onPress={() => Alert.alert('Hello my friend')}
            onLongPress={() => Alert.alert("Hello im being long pressed")}/>
            <View style={{width: 200}}>
              <Button title="boton normal" onPress={()=> setDisabled(!disabled)} color="red" style={{width: 300}}/>
            </View>
          </KoroModal>
          <KoroAlert
            visible={callAlert}
            confirmButton={{
              onPress: () => setCallAlert(false)
              ,
              textStyle: {
                color: 'black'
              }
            }}
            cancelButton={{
              onPress: ()=> setCallAlert(false)
            }}
          />
        <Button title="Call Alert" onPress={()=> setCallAlert(true)} color="red" style={{width: 300}}/>
        <Button title="Load Progress" onPress={() => showProgress()} color='pink'/>
        <KoroBadge value={1} showValue={true} badgeSize={25}>
          <Text>Badge</Text>
        </KoroBadge>
        <KoroProgress visible={progressActive}/>
        <KoroChip
          tags={[{title: 'Chip component', id: 1}, {title: 'Chip component 2', id: 2},
                {title: 'Chip 3', id: 3}, {title: 'Francheesssscoooooo fiauuuuu', id: 4 }]}
          onDelete={(id) => Alert.alert('deleted ' + id)}
          />
        <KoroSelect options={[1,2,3]} />
        <KoroDropdown onSelect={(val) => setDs(val)} options={[1,2,3]} />
        <Button title="alert selected value" onPress={() => alert(ds)} color='pink'/>
        <KoroInput label='pipi' onChange={(text) => setDs(text)} />
        <KoroCard header={Header} footer={Footer}>
        <Text>
          hey bitch
        </Text>
      </KoroCard>
        <KoroSteps 
          steps={['im step number 1', 'im step number 2', 'im step number 3', 'im step number 4']}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
