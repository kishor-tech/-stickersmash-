import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.texstyle}>Test</Text>
      <Link href="/about" style={styles.button}>
        Go to About
      </Link>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
        justifyContent: "center",
        alignItems: "center",
  backgroundColor:"#25292e",
  },
  texstyle:{
    color:"#fff",
    fontSize: 20,
  },
  button: {
    fontSize: 18,
    textDecorationLine: "underline",
    color: "#fff",
  },
})