import { StyleSheet, View, Text, TouchableHighlight } from "react-native";
import { Shadow, ShadowProps } from "react-native-shadow-2";

import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from "@react-navigation/native";

import { RootStackParamList } from "../services/RootStackParamList";

type GalleryProps = {
  target: 'Gallery',
  name: string,
  children: any,
}

type OtherProps = {
  target: Exclude<keyof RootStackParamList, 'Gallery'>,
  name?: never,
  children: any,
}

type Props = GalleryProps | OtherProps
 
export function NeuButton({ target, name, children }: Props) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  function navigate() {
    if (target === 'Gallery') {
      navigation.navigate(target, { name: name })
    } else {
      navigation.navigate(target)
    }
  }

  let innerContent = typeof children === 'string' ?
    (<Text style={styles.buttonText}>{ children }</Text>) :
    (children)


  return (
    <Shadow {...ShadowPresets.neueBoxSE} style={{borderRadius: 20}}>
      <Shadow {...ShadowPresets.neueBoxNW} style={{borderRadius: 20}}>
        <TouchableHighlight style={radius} onPress={() => navigate()}>
          <View style={styles.neueButton}>
            { innerContent }
          </View>
        </TouchableHighlight>
      </Shadow>
    </Shadow>
  )
}

const radius = { borderRadius: 20 }

const ShadowPresets = {
  neueBoxNW: {
    startColor: '#151515',
    offset: [-3, -3],
    distance: 6,
    style: {
      ...radius,
    },
  } as ShadowProps,
  neueBoxSE: {
    startColor: '#0f0f0f',
    offset: [6, 6],
    distance: 8,
    style: {
      ...radius,
    },
  } as ShadowProps,
}

const styles = StyleSheet.create({
  neueButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    paddingHorizontal: 15,
    paddingVertical: 15,
    ...radius,
    backgroundColor: '#141414',
  },
  buttonText: {
    color: '#eee',
    paddingHorizontal: 5,
  },
});

