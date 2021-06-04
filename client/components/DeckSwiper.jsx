import React from "react";
import { Image, StyleSheet, Dimensions } from "react-native";
import { DeckSwiper, View } from "native-base";

const { width } = Dimensions.get("window");
export default function BannerDeckSwiper() {
  const cards = [
    {
      text: "Card One",
      name: "One",
      image: require("../assets/banner-civika.png"),
    },
    {
      text: "Card One",
      name: "Two",
      image: require("../assets/banner-civika2.png"),
    },
    {
      text: "Card One",
      name: "Three",
      image: require("../assets/banner-civika3.png"),
    },
    {
      text: "Card One",
      name: "Four",
      image: require("../assets/banner-civika4-min.png"),
    },
  ];

  return (
    <View style={{ flex: 1.5 }}>
      <DeckSwiper
        dataSource={cards}
        renderItem={(item) => (
          <Image style={styles.image} source={item.image} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 198,
    width: width,
    flex: 1,
    alignSelf: "center",
  },
});
