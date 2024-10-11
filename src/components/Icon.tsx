import { Image, StyleSheet } from 'react-native'

export function Icon({ name }: { name: string }) {
  const icons = {
    'Rajang': require('../../assets/icons/023_05.png'),
    'Nargacuga': require('../../assets/icons/037_02.png'),
    'Ludroth': require('../../assets/icons/047_00.png'),
    'Amatsu': require('../../assets/icons/058_00.png'),
    'Valstrax': require('../../assets/icons/086_08.png'),
    'Lunagaron': require('../../assets/icons/133_00.png'),
  }

  return <Image style={styles.image} source={icons[name as keyof typeof icons]}/>
}

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  }
})