import { View, Text, StyleSheet } from "react-native";
import { NeuBox } from "../components/NeuBox";

export default function Credits() {
  return (
    <View style={styles.container}>
      <NeuBox>
        <Text style={styles.h1}>Créditos</Text>
      </NeuBox>
      <NeuBox>
        <View style={styles.creditBox}>
          <View style={styles.credit}>
            <Text style={styles.text}>Ideação:</Text>
            <Text style={styles.text}>Victor Gnoato</Text>
          </View>
          <View style={styles.credit}>
            <Text style={styles.text}>Design:</Text>
            <Text style={styles.text}>Victor Gnoato</Text>
          </View>
          <View style={styles.credit}>
            <Text style={styles.text}>Programação:</Text>
            <Text style={styles.text}>Victor Gnoato</Text>
          </View>
          <View style={styles.credit}>
            <Text style={styles.text}>Imagens:</Text>
            <Text style={styles.text}>Capcom</Text>
          </View>
          
          
          
        </View>
      </NeuBox>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 40,
    paddingHorizontal: 30,
  },
  text: {
    color: '#eee',
    textAlign: 'justify',
    // fontWeight: '900',
    // paddingHorizontal: 5,
  },
  h1: {
    color: '#eee',
    fontWeight: '900',
    fontSize: 24,
  },
  creditBox: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
  },
  credit: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  }
})