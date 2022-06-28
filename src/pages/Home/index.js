import { FlatList, SafeAreaView, StyleSheet, Text } from "react-native";

import Header from "../../components/Header";
import Card from "../../components/Card";
import api from "../../services/api";

export default function Home() {

  const renderItem = ({item}) => {
    return <Card {...item} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={Header}
        keyExtractor={(item) => String(item.title)}
        data={api}
        renderItem={ renderItem }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
