import { NavigatorScreenParams } from '@react-navigation/native';

// TODO: define screens here
export type AuthStackParamList = {
  Welcome: undefined;
};

export type AppStackParamList = {
  Home: undefined;
};

export type RootStackParamList = {
  Auth: NavigatorScreenParams<AuthStackParamList>;
  App: NavigatorScreenParams<AppStackParamList>;
};
