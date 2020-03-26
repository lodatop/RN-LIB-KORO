import React, {useState} from 'react';
import { StyleSheet, Text, View, Alert, ScrollView } from 'react-native';

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
import { KoroToast } from './components/Toast';
import { KoroCollapse } from './components/Collapse';
import { KoroForm } from './components/Form';
import { KoroPopover } from './components/Popover';
import { KoroTable } from './components/Table';

export default function App() {
  const [disabled, setDisabled] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [popOpen, setPopOpen] = useState(false)
  const [callAlert, setCallAlert] = useState(false)
  const [progressActive, setProgressActive] = useState(false)
  const [ds, setDs] = useState(1)
  const [toast, setToast] = useState(null);
  const [form, setForm] = useState({})

  const tryToast = () => {
    setToast(<KoroToast 
        time={1000} 
        title='im a toast'
        position='bottom'
        style={{textTransform: 'uppercase', color: 'black'}}
        />)
    setTimeout(()=>{
      setToast(null)
    }, 2000)
  }

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
    <KoroButton title="Open Modal" onPress={()=> setModalOpen(true)} style={{width: 300}}/>
  );

  const tableTitle = ['Title', 'Title2', 'Title3', 'Title4'];
  
  const tableData = [['data', 'data2', 'data3', 'data4'], ['data5', 'data6', 'data7', 'data8']];
  

  return (
    <View style={{flex: 1}}>
      <ScrollView contentContainerStyle={{paddingVertical: 30, flexGrow: 1}}>
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
          <KoroButton title="Open Modal" onPress={()=> setModalOpen(true)} style={{width: 300}}/>
          <View style={{backgroundColor: 'grey'}}><KoroIcon icon="clearWhite"/></View>
          <KoroModal visible={modalOpen} borderStyle={{padding: 20}} onRequestClose={()=> setModalOpen(false)}>
            <KoroToast />
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
              <KoroButton title="Press to disable" onPress={()=> setDisabled(!disabled)} buttonStyle={{minWidth: 200, backgroundColor: 'red'}} textStyle={{color: 'white'}}/>
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
          <KoroButton title="Call Alert" onPress={()=> setCallAlert(true)} buttonStyle={{backgroundColor: 'red', width: 200}}/>
          <KoroButton title="Load Progress" onPress={() => showProgress()} buttonStyle={{backgroundColor: 'pink', width: 200}} />
          <KoroBadge value={1} showValue={true} badgeSize={25}>
            <Text>Badge</Text>
          </KoroBadge>
          <KoroProgress visible={progressActive}/>
          <KoroChip
            tags={[{title: 'Chip component', id: 1}, {title: 'Chip component 2', id: 2},
                  {title: 'Chip 3', id: 3}, {title: 'Francheesssscoooooo fiauuuuu', id: 4 }]}
            onDelete={(id) => Alert.alert('deleted ' + id)}
            />
            <Text>Select</Text>
          <KoroSelect options={['one','two','three']} onSelect={(selection) => Alert.alert("value selected: " + selection)}/>
          <Text>Dropdown</Text>
          <KoroDropdown onSelect={(val) => setDs(val)} options={['one','two','three']} />
          <KoroButton title="alert selected value" onPress={() => alert(ds)} buttonStyle={{backgroundColor: 'pink', minWidth: 200}} textStyle={{color: 'white'}} />
          <KoroInput label='select a name please' onChange={(text) => setDs(text)} />
          <KoroCard header={Header} footer={Footer}>
            <Text>
              hey bitch
            </Text>
          </KoroCard>
          <KoroSteps 
            steps={['im step number 1', 'im step number 2', 'im step number 3', 'im step number 4', 'im step number 5']}
            type='circles'
            onDone={() => Alert.alert('Done steps')}
          />
          <KoroButton title='Try toast' onPress={tryToast}/>
      </View>
      <KoroCollapse title="This is a collapse">
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
      </KoroCollapse>
      <KoroForm inputStyle={{}} inputList={['name', 'username']} onChanges={(content) => setForm(content)} />
      <KoroButton title="alert form content" onPress={() => alert(JSON.stringify(form))} buttonStyle={{backgroundColor: 'pink', minWidth: 200}} textStyle={{color: 'white'}} />
      <KoroPopover
        visible={popOpen}
        title='Popover Title'
        content='Popover content lorem ipsum no se'
        >
          <KoroButton title="Click for Popover" onPress={()=> setPopOpen(!popOpen)} style={{width: 300}}/>
      </KoroPopover >
      <KoroTable  borderStyle={{borderWidth: 1}} widthArr={[50,50,50,50]} headStyle={[{ backgroundColor: 'gray'}]} heightArr={[28,28]} tableData={tableData} tableHead={tableTitle} />
    </ScrollView>
    
      {toast}
    </View>
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
  collapseContainer: {
    flex            : 1,
    backgroundColor : '#f4f7f9',
    paddingTop      : 30
  }
});

