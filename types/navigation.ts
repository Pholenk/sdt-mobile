export type RootStackParamList = {
  Home: undefined;
  Details: { id: string };
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
