import { RouteProp } from "@react-navigation/native-stack";
import { View, Text, Image, StyleSheet } from "react-native";
import { RootStackParamList } from "../services/RootStackParamList";

type Props = {
  route: RouteProp<{ params: { name: keyof typeof renders } }, 'Gallery'>
}
const renders = {
  'rajang': require('../../assets/renders/023_05.png'),
  'nargacuga': require('../../assets/renders/037_02.png'),
  'ludroth': require('../../assets/renders/047_00.png'),
  'amatsu': require('../../assets/renders/058_00.png'),
  'valstrax': require('../../assets/renders/086_08.png'),
  'lunagaron': require('../../assets/renders/133_00.png'),
}

export default function Gallery({ route }: Props) {
  const { name }: { name: keyof typeof renders } = route.params
  console.log(name);
  

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={renders[name]}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100',
    position: 'absolute',
    top: 0,
    left: 0,
  }
})