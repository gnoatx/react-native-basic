import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,  View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../services/RootStackParamList';
import { NeuBox } from '../components/NeuBox';
import { NeuButton } from '../components/NeuButton';
import { Icon } from '../components/Icon';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>

export default function Homepage({ route }: Props) {
  return (
    <View style={styles.container}>
      <NeuBox><Text style={styles.h1}>Bem vindo</Text></NeuBox>
      <View style={styles.buttons}>
        <NeuButton target={'Gallery'} name={'Rajang'}>
          <Icon name={'Rajang'}/>
          <Text style={styles.text}>Rajang</Text>
        </NeuButton>
        <NeuButton target={'Gallery'} name={'Nargacuga'}>
          <Icon name={'Nargacuga'}/>
          <Text style={styles.text}>Nargacuga</Text>
        </NeuButton>
        <NeuButton target={'Gallery'} name={'Ludroth'}>
          <Icon name={'Ludroth'}/>
          <Text style={styles.text}>Ludroth</Text>
        </NeuButton>
        <NeuButton target={'Gallery'} name={'Amatsu'}>
          <Icon name={'Amatsu'}/>
          <Text style={styles.text}>Amatsu</Text>
        </NeuButton>
        <NeuButton target={'Gallery'} name={'Valstrax'}>
          <Icon name={'Valstrax'}/>
          <Text style={styles.text}>Valstrax</Text>
        </NeuButton>
        <NeuButton target={'Gallery'} name={'Lunagaron'}>
          <Icon name={'Lunagaron'}/>
          <Text style={styles.text}>Lunagaron</Text>
        </NeuButton>
      </View>
      <NeuButton target={'Credits'}>Crédito</NeuButton>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 40,
  },
  text: {
    color: '#eee',
    fontWeight: '900',
    // paddingHorizontal: 5,
  },
  h1: {
    color: '#eee',
    fontWeight: '900',
    fontSize: 24,
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,

  }
});
