import { View, Text,StyleSheet } from "react-native";

export default function Header(){
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Header</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#694fad",
    paddingVertical: 8,
  },

  title: {
    alignSelf: "center",
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
  },
});