import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Favorite from "./Favorite";
import { SwipeRow } from "react-native-swipe-list-view";

const exhibition = [
  {
    title: "참조점",
    imageUrl:
      "https://art-map.co.kr/art-map/public//upload/2023/05/exhibition/fa3fba495cdbf61d5d50f96c2315bf27_.jpg",
    location: "더레퍼런스/서울",
    startDate: "2023.05.19",
    endDate: "2023.05.28",
    color: "#F5E7CE",
  },
  {
    title: "강우솔, 임아진:(불)응하는 몸",
    imageUrl:
      "https://art-map.co.kr/art-map/public//upload/2023/05/exhibition/9d1b2eafad0bf994af86e2264f1101b5_aeba0a70bccda99b615dc39434ea5976_345622143_206535278842503_6575964803203688317_n.jpg",
    location: "스페이스 미라주/서울",
    startDate: "2023.05.18",
    endDate: "2023.06.01",
    color: "#F1C7C8",
  },
  {
    title: "캐브 먼데이:Making a Scene",
    imageUrl:
      "https://art-map.co.kr/art-map/public//upload/2023/05/exhibition/d77cf291d6214dadbf64b1d74d704203_.jpg",
    location: "VIVIAN CHOI GALLERY(비비안초이갤러리)/서울",
    startDate: "2023.05.18",
    endDate: "2023.06.10",
    color: "#DDDBE8",
  },
  {
    title: "봄의제전",
    imageUrl:
      "https://art-map.co.kr/art-map/public//upload/2023/05/exhibition/6a11c73de2f36c10613ef5b859f17bad_.png",
    location: "프린트베이커리 더현대서울점/서울",
    startDate: "2023.05.18",
    endDate: "2023.06.07",
    color: "#A0C896",
  },
  {
    title: "봄의제전",
    imageUrl:
      "https://art-map.co.kr/art-map/public//upload/2023/05/exhibition/6a11c73de2f36c10613ef5b859f17bad_.png",
    location: "프린트베이커리 더현대서울점/서울",
    startDate: "2023.05.18",
    endDate: "2023.06.07",
    color: "#7C7773",
  },
  {
    title: "봄의제전",
    imageUrl:
      "https://art-map.co.kr/art-map/public//upload/2023/05/exhibition/6a11c73de2f36c10613ef5b859f17bad_.png",
    location: "프린트베이커리 더현대서울점/서울",
    startDate: "2023.05.18",
    endDate: "2023.06.07",
    color: "#F5E7CE",
  },
];

// 스프롤뷰만 적용한 버전
// const Favorites = () => {
//   return (
//     <ScrollView>
//       <View>
//         {exhibition.map((data, index) => {
//           return <Favorite key={index} data={data} />;
//         })}
//       </View>
//     </ScrollView>
//   );
// };
// const styles = StyleSheet.create({});

// 스와이프 리스트용
// const Favorites = () => {
//   return (
//     <View style={styles.container}>
//       <SwipeListView
//         data={exhibition}
//         renderItem={(data, rowMap) => <Favorite data={data.item} />}
//         renderHiddenItem={(data, rowMap) => (
//           <View style={styles.rowBack}>
//             <Text>delete</Text>
//           </View>
//         )}
//         disableRightSwipe={true}
//         rightOpenValue={-75}
//       />
//     </View>
//   );
// };

// swiperow
const Favorites = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {exhibition.map((data, index) => (
          <SwipeRow rightOpenValue={-75} disableRightSwipe={true} key={index}>
            <View style={styles.rowBack}>
              <Text>Delete</Text>
            </View>
            <Favorite data={data} />
          </SwipeRow>
        ))}
      </View>
    </ScrollView>
  );
};

// 스와이프용
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  rowBack: {
    alignItems: "center",
    backgroundColor: "#AAAAAA",
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingRight: 15,
  },
});

export default Favorites;
