import { NavigationContainer, ParamListBase } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList } from './src/services/RootStackParamList';
import Homepage from './src/screens/Homepage';
import Credits from './src/screens/Credits';

export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Homepage} options={{title: 'Página Inicial', ...headerStyle}}/>
        <Stack.Screen name='Credits' component={Credits} options={{title: 'Outra Página', ...headerStyle}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const headerStyle = {
  headerStyle: {
    backgroundColor: '#111',
  },
  headerTintColor: '#eee',
}