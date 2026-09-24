import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View
        style={[
          styles.header,
          {
            paddingTop: insets.top,
            height: 95 + insets.top,
          },
        ]}
      >
        <Pressable style={styles.menuButton}>
          <Text style={styles.menuIcon}>☰</Text>
        </Pressable>

        <TextInput
          style={styles.search}
          placeholder="Search"
          placeholderTextColor="#9A9A9A"
        />

        <Pressable style={styles.filterButton}>
          <Text style={styles.filterIcon}>☷</Text>
        </Pressable>
      </View>

      {/* Discover Feed */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.feed}
      >
        {/* User */}
        <View style={styles.userRow}>
          <Image
            source={{
              uri: "https://randomuser.me/api/portraits/men/32.jpg",
            }}
            style={styles.avatar}
          />

          <Text style={styles.username}>Amit saxena</Text>

          <Pressable style={styles.followButton}>
            <Text style={styles.followText}>Follow</Text>
          </Pressable>
        </View>

        {/* Post */}
        <View style={styles.postCard}>
          {/* Image / Video */}
          <View style={styles.mediaContainer}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
              }}
              style={styles.postImage}
            />

            <View style={styles.videoControls}>
              <Text style={styles.controlIcon}>↶</Text>
              <Text style={styles.controlIcon}>Ⅱ</Text>
              <Text style={styles.controlIcon}>↷</Text>
            </View>

            <Text style={styles.soundIcon}>🔊</Text>

            <Pressable style={styles.moreButton}>
              <Text style={styles.moreIcon}>⋮</Text>
            </Pressable>
          </View>

          {/* Comment Input */}
          <View style={styles.commentInput}>
            <Image
              source={{
                uri: "https://randomuser.me/api/portraits/women/44.jpg",
              }}
              style={styles.smallAvatar}
            />

            <TextInput
              placeholder="Add a comment..."
              placeholderTextColor="#A5A5A5"
              style={styles.commentText}
            />
          </View>

          {/* Comment */}
          <View style={styles.comment}>
            <Image
              source={{
                uri: "https://randomuser.me/api/portraits/women/65.jpg",
              }}
              style={styles.smallAvatar}
            />

            <View style={styles.commentContent}>
              <Text style={styles.commentName}>Priya chauhan</Text>

              <Text style={styles.commentMessage}>We wanted this!!!!</Text>

              <View style={styles.commentActions}>
                <Text style={styles.actionIcon}>♡</Text>
                <Text style={styles.actionIcon}>☺</Text>
              </View>
            </View>

            <Text style={styles.commentMore}>⋮</Text>
          </View>
        </View>

        {/* Second User */}
        <View style={styles.userRow}>
          <Image
            source={{
              uri: "https://randomuser.me/api/portraits/women/68.jpg",
            }}
            style={styles.avatar}
          />

          <Text style={styles.username}>Rashmi Desai</Text>

          <Pressable style={styles.followButton}>
            <Text style={styles.followText}>Follow</Text>
          </Pressable>
        </View>

        {/* Second Post */}
        <View style={styles.simplePost}>
          <Text style={styles.simplePostText}>
            Interesting stories around you
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  // Header
  header: {
    backgroundColor: "#123F4D",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
    gap: 12,
  },

  menuButton: {
    width: 40,
    alignItems: "center",
    justifyContent: "center",
  },

  menuIcon: {
    color: "#FFFFFF",
    fontSize: 30,
  },

  search: {
    flex: 1,
    height: 52,
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    paddingHorizontal: 20,
    fontSize: 16,
    color: "#222222",
  },

  filterButton: {
    width: 40,
    alignItems: "center",
    justifyContent: "center",
  },

  filterIcon: {
    color: "#FFFFFF",
    fontSize: 30,
  },

  // Feed
  feed: {
    paddingBottom: 30,
  },

  userRow: {
    height: 75,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
    backgroundColor: "#FFFFFF",
  },

  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },

  username: {
    flex: 1,
    marginLeft: 12,
    fontSize: 17,
    color: "#222222",
  },

  followButton: {
    width: 105,
    height: 38,
    borderWidth: 1.5,
    borderColor: "#123F4D",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  followText: {
    color: "#123F4D",
    fontSize: 15,
  },

  // Post
  postCard: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 12,
    borderRadius: 18,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#EEEEEE",
  },

  mediaContainer: {
    height: 360,
    position: "relative",
    backgroundColor: "#222222",
  },

  postImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  videoControls: {
    position: "absolute",
    top: "45%",
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 55,
  },

  controlIcon: {
    color: "#FFFFFF",
    fontSize: 35,
    fontWeight: "bold",
    textShadowColor: "#000000",
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowRadius: 4,
  },

  soundIcon: {
    position: "absolute",
    bottom: 18,
    left: "48%",
    fontSize: 24,
  },

  moreButton: {
    position: "absolute",
    right: 12,
    top: 10,
  },

  moreIcon: {
    color: "#FFFFFF",
    fontSize: 32,
  },

  // Comments
  commentInput: {
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
  },

  smallAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },

  commentText: {
    flex: 1,
    marginLeft: 12,
    fontSize: 15,
    color: "#333333",
  },

  comment: {
    minHeight: 105,
    flexDirection: "row",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
  },

  commentContent: {
    flex: 1,
    marginLeft: 12,
  },

  commentName: {
    fontSize: 14,
    color: "#777777",
    marginBottom: 5,
  },

  commentMessage: {
    fontSize: 17,
    color: "#222222",
  },

  commentActions: {
    flexDirection: "row",
    gap: 15,
    marginTop: 8,
  },

  actionIcon: {
    fontSize: 20,
    color: "#777777",
  },

  commentMore: {
    fontSize: 24,
    color: "#888888",
  },

  // Second post
  simplePost: {
    marginHorizontal: 12,
    marginBottom: 20,
    padding: 20,
    backgroundColor: "#F5F5F5",
    borderRadius: 15,
  },

  simplePostText: {
    fontSize: 17,
    color: "#444444",
  },
});
