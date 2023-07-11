import { StatusBar } from "expo-status-bar";
import { onValue, ref } from "firebase/database";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { database } from "./component/config/firebase";

export default function App() {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    const starCountRef = ref(database, "Message");

    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      setData(data);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start workin your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
