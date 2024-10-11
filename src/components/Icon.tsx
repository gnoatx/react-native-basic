import { Image, StyleSheet } from 'react-native'

export function Icon({ name }: { name: string }) {
  const icons = {
    'rajang': require('../../assets/icons/023_05.png'),
    'nargacuga': require('../../assets/icons/037_02.png'),
    'ludroth': require('../../assets/icons/047_00.png'),
    'amatsu': require('../../assets/icons/058_00.png'),
    'valstrax': require('../../assets/icons/086_08.png'),
    'lunagaron': require('../../assets/icons/133_00.png'),
  }

  return <Image style={styles.image} source={icons[name as keyof typeof icons]}/>
}

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  }
})