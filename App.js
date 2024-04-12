import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable, SafeAreaView } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <Swipeable
          renderRightActions={() => (
            <View style={{ width: 100, backgroundColor: "red" }} />
          )}
        >
          <Pressable
            onPress={() => alert("pressed!")}
            style={{
              padding: 20,
              backgroundColor: "pink",
              alignItems: "center",
            }}
          >
            <Text>Nested pressable</Text>
          </Pressable>
        </Swipeable>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
