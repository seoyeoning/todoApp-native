/// App.js 화면에 보는이는 것들 구현

import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View, SafeAreaView } from "react-native";
import MainScreen from "./screens/MainScreen";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return <MainScreen />;
}
