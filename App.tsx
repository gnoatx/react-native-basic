import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList } from './src/services/RootStackParamList';
import Homepage from './src/screens/Homepage';
import Gallery from './src/screens/Gallery';
import Credits from './src/screens/Credits';
import { View } from 'react-native';

export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>()

  return (
    <NavigationContainer>
      <View style={{flex: 1, backgroundColor: '#252525'}}>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={Homepage} options={{title: 'Página Inicial', ...headerStyle}}/>
          <Stack.Screen name='Gallery' component={Gallery} initialParams={{ name: 'nargacuga' }} options={{title: 'Galeria', ...headerStyle}}/>
          <Stack.Screen name='Credits' component={Credits} options={{title: 'Créditos', ...headerStyle}}/>
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}

const headerStyle = {
  headerStyle: {
    backgroundColor: '#111',
  },
  headerTintColor: '#eee',
  cardOverlay: () => (
    <View
      style={{
        flex: 1,
        backgroundColor: '#111'
      }}
    />
  )
}