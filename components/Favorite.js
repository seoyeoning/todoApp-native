import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Favorite = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.colorBox, { backgroundColor: data.color }]}></View>
      <View style={styles.exInfo}>
        <Image style={styles.exImage} source={{ uri: data.imageUrl }} />
        <View style={styles.exText}>
          <Text style={styles.titleText}>{data.title}</Text>
          <Text style={styles.text}>{data.location}</Text>
          <Text style={styles.text}>
            {data.startDate} ~ {data.endDate}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Favorite;

const styles = StyleSheet.create({
  container: {
    borderColor: "#CECCC8",
    borderBottomWidth: 2,
    backgroundColor: "#F6F5F5",
    width: 393,
    height: 133,
    flexDirection: "row",
  },
  colorBox: {
    width: 20,
    height: 133,
    borderColor: "#CECCC8",
    borderBottomWidth: 2,
  },
  exInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  exImage: {
    width: 90,
    height: 113,
  },
  exText: {
    marginLeft: 10,
  },
  titleText: {
    color: "#4A4A4A",
    marginBottom: 30,
  },
  text: {
    color: "#4A4A4A",
  },
});
