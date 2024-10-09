import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.neueBox}>
        <Text style={{color: '#eee', fontSize: 18}}>Qual É O Tema..?</Text>
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
  },
  neueBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    height: '15%',
    borderRadius: 30,
    shadowColor: '#fff',
    shadowOffset: {width: 500, height: 500},
    shadowRadius: 55,
    backgroundColor: '#555',
  },
});
