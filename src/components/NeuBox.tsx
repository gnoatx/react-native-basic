import { StyleSheet, View, Text } from "react-native";
import { Shadow, ShadowProps } from "react-native-shadow-2";

export function NeuBox({ children }: { children: any}) {
  return (
    <Shadow {...ShadowPresets.neuBoxSE}>
      <Shadow {...ShadowPresets.neuBoxNW}>
        <View style={styles.neuBox}>
          {children}
        </View>
      </Shadow>
    </Shadow>
  )
}

const ShadowPresets = {
  neuBoxNW: {
    startColor: '#151515',
    offset: [-3, -3],
    distance: 10,
    style: {
      borderRadius: 30,
    },
  } as ShadowProps,
  neuBoxSE: {
    startColor: '#0d0d0d',
    offset: [5, 5],
    distance: 10,
    style: {
      borderRadius: 30,
    },
  } as ShadowProps,
}

const styles = StyleSheet.create({
  neuBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50,
    paddingVertical: 40,
    borderRadius: 30,
    backgroundColor: '#141414',
  },
});