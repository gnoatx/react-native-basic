import { type RouteProp } from "@react-navigation/native";
import { View, Text, Image, StyleSheet } from "react-native";
import { RootStackParamList } from "../services/RootStackParamList";
import { NeuBox } from "../components/NeuBox";

type Props = {
  route: RouteProp<RootStackParamList, 'Gallery'>
}

export default function Gallery({ route }: Props) {
  const { name } = route.params
  
  const renders = {
    'Rajang': require('../../assets/renders/023_05.png'),
    'Nargacuga': require('../../assets/renders/037_02.png'),
    'Ludroth': require('../../assets/renders/047_00.png'),
    'Amatsu': require('../../assets/renders/058_00.png'),
    'Valstrax': require('../../assets/renders/086_08.png'),
    'Lunagaron': require('../../assets/renders/133_00.png'),
  }

  const names = {
    'Rajang': 'Furious Rajang',
    'Nargacuga': 'Lucent Nargacuga',
    'Ludroth': 'Royal Ludroth',
    'Amatsu': 'Amatsu',
    'Valstrax': 'Risen Valstrax',
    'Lunagaron': 'Lunagaron',
  }

  return (
    <View style={styles.container}>
      <NeuBox>
        <Text style={styles.text}>{names[name as keyof typeof names]}</Text>
      </NeuBox>
      <Image resizeMode={'contain'} style={styles.image} source={renders[name as keyof typeof renders]}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
  },
  image: {
    flex: 1,
    width: '100%',
  },
  text: {
    color: '#eee',
    fontWeight: '900',
    fontSize: 18,
  },
})