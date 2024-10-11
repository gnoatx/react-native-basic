import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Shadow, ShadowProps } from "react-native-shadow-2";
import { RootStackParamList } from '../services/RootStackParamList';
import { NeuBox } from '../components/NeuBox';
import { NeuButton } from '../components/NeuButton';
import { useNavigation } from '@react-navigation/native';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>



export default function Homepage({ route }: Props) {
  return (
    <View style={styles.container}>
      <NeuBox><Text style={styles.text}>Test</Text></NeuBox>
      <NeuButton target={'Credits'}>Text</NeuButton>
      <NeuButton target={'Gallery'} id={'1'}>AAAAAA</NeuButton>
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
  }
});
