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
        <NeuButton target={'Gallery'} name={'rajang'}>
          <Icon name={'rajang'}/>
          <Text style={styles.text}>Rajang</Text>
        </NeuButton>
        <NeuButton target={'Gallery'} name={'nargacuga'}>
          <Icon name={'nargacuga'}/>
          <Text style={styles.text}>Nargacuga</Text>
        </NeuButton>
        <NeuButton target={'Gallery'} name={'ludroth'}>
          <Icon name={'ludroth'}/>
          <Text style={styles.text}>Ludroth</Text>
        </NeuButton>
        <NeuButton target={'Gallery'} name={'amatsu'}>
          <Icon name={'amatsu'}/>
          <Text style={styles.text}>Amatsu</Text>
        </NeuButton>
        <NeuButton target={'Gallery'} name={'valstrax'}>
          <Icon name={'valstrax'}/>
          <Text style={styles.text}>Valstrax</Text>
        </NeuButton>
        <NeuButton target={'Gallery'} name={'lunagaron'}>
          <Icon name={'lunagaron'}/>
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
