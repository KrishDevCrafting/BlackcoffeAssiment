import { Pressable, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>BWStory</Text>

        <Pressable>
          <Text style={styles.profile}>Profile</Text>
        </Pressable>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.heading}>Discover</Text>
        <Text style={styles.subtitle}>
          Discover interesting stories around you
        </Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Welcome to BWStory</Text>

          <Text style={styles.cardText}>
            Explore stories, people and places.
          </Text>
          <text>Krish Kapoor</text>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Explore</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  header: {
    height: 60,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#eeeeee",
  },

  logo: {
    fontSize: 22,
    fontWeight: "bold",
  },

  profile: {
    fontSize: 16,
  },

  content: {
    padding: 20,
  },

  heading: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 5,
  },

  subtitle: {
    fontSize: 15,
    color: "#666666",
    marginBottom: 20,
  },

  card: {
    padding: 20,
    borderRadius: 15,
    backgroundColor: "#f5f5f5",
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },

  cardText: {
    fontSize: 14,
    color: "#555555",
    marginBottom: 15,
  },

  button: {
    backgroundColor: "#000000",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },

  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
});
