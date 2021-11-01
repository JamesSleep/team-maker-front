import { Platform, ToastAndroid, Alert } from "react-native"

export const postMessage = (text) => {
  if(Platform.OS === "android") {
    ToastAndroid.show(text, ToastAndroid.SHORT);
  } else {
    Alert.alert(text);
  }
} 