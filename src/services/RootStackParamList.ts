

export type RootStackParamList = {
  Home: undefined;
  Gallery: { id: string };
  Credits: undefined;
}

const a: keyof RootStackParamList = "Home"
