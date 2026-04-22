import { Link, Stack } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops not found" }} />
      <View style={styles.container}>
        <Link href="/" style={styles.button}>
          Go back to home
        </Link>
        <Text style={styles.textstyle}>About Screen</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292e",
  },
  textstyle: {
    color: "#fff",
    fontSize: 18,
  },
  button: {
    fontSize: 18,
    textDecorationLine: "underline",
    color: "#fff",
  },
});