import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  findNodeHandle,
} from "react-native";
import React, { useState, useRef, useEffect, useCallback } from "react";
import Favorite from "./Favorite";
import { SwipeRow, SwipeListView } from "react-native-swipe-list-view";
import DraggableFlatList from "react-native-draggable-flatlist";
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from "react-native-gesture-handler";
//import Animated from "react-native-reanimated";

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
  const results = exhibitionList(); // 더미 데이터들
  const [exhibitionData, setExhibitionData] = useState(results);

  function exhibitionList() {
    const exhibition1 = {
      id: 1,
      title: "참조점",
      imageUrl:
        "https://art-map.co.kr/art-map/public//upload/2023/05/exhibition/fa3fba495cdbf61d5d50f96c2315bf27_.jpg",
      location: "더레퍼런스/서울",
      startDate: "2023.05.19",
      endDate: "2023.05.28",
      color: "#F5E7CE",
    };
    const exhibition2 = {
      id: 2,
      title: "강우솔, 임아진:(불)응하는 몸",
      imageUrl:
        "https://art-map.co.kr/art-map/public//upload/2023/05/exhibition/9d1b2eafad0bf994af86e2264f1101b5_aeba0a70bccda99b615dc39434ea5976_345622143_206535278842503_6575964803203688317_n.jpg",
      location: "스페이스 미라주/서울",
      startDate: "2023.05.18",
      endDate: "2023.06.01",
      color: "#F1C7C8",
    };
    const exhibition3 = {
      id: 3,
      title: "캐브 먼데이:Making a Scene",
      imageUrl:
        "https://art-map.co.kr/art-map/public//upload/2023/05/exhibition/d77cf291d6214dadbf64b1d74d704203_.jpg",
      location: "VIVIAN CHOI GALLERY(비비안초이갤러리)/서울",
      startDate: "2023.05.18",
      endDate: "2023.06.10",
      color: "#DDDBE8",
    };
    const exhibition4 = {
      id: 4,
      title: "봄의제전",
      imageUrl:
        "https://art-map.co.kr/art-map/public//upload/2023/05/exhibition/6a11c73de2f36c10613ef5b859f17bad_.png",
      location: "프린트베이커리 더현대서울점/서울",
      startDate: "2023.05.18",
      endDate: "2023.06.07",
      color: "#A0C896",
    };
    const exhibition5 = {
      id: 5,
      title: "봄의제전",
      imageUrl:
        "https://art-map.co.kr/art-map/public//upload/2023/05/exhibition/6a11c73de2f36c10613ef5b859f17bad_.png",
      location: "프린트베이커리 더현대서울점/서울",
      startDate: "2023.05.18",
      endDate: "2023.06.07",
      color: "#7C7773",
    };
    const exhibition6 = {
      id: 6,
      title: "봄의제전",
      imageUrl:
        "https://art-map.co.kr/art-map/public//upload/2023/05/exhibition/6a11c73de2f36c10613ef5b859f17bad_.png",
      location: "프린트베이커리 더현대서울점/서울",
      startDate: "2023.05.18",
      endDate: "2023.06.07",
      color: "#F5E7CE",
    };
    const testData = [
      exhibition1,
      exhibition2,
      exhibition3,
      exhibition4,
      exhibition5,
      exhibition6,
    ];

    return testData;
  }

  // 스와이프랑 드레그 같이 구현
  // const renderItem = ({ item, index, drag, isActive }) => {
  //   return (
  //     <TouchableOpacity
  //       activeOpacity={1}
  //       onLongPress={drag}
  //       disabled={isActive}
  //     >
  //       <SwipeRow rightOpenValue={-75} disableRightSwipe={true}>
  //         <View style={styles.rowBack}>
  //           <Text>Delete</Text>
  //         </View>
  //         <Favorite data={item} />
  //       </SwipeRow>
  //     </TouchableOpacity>
  //   );
  // };

  // 스와이프 삭제 코드
  // const handleDeleteItem = (index) => {
  //   // Create a copy of the exhibitionData array
  //   const updatedData = [...exhibitionData];
  //   // Remove the item at the specified index
  //   updatedData.splice(index, 1);
  //   // Update the exhibitionData state with the modified array
  //   setExhibitionData(updatedData);
  // };

  // const renderSwipeRow = ({ item, index }) => {
  //   return (
  //     <SwipeRow rightOpenValue={-75} disableRightSwipe={true}>
  //       <TouchableOpacity
  //         style={styles.rowBack}
  //         onPress={() => handleDeleteItem(index)}
  //       >
  //         <Text>Delete</Text>
  //       </TouchableOpacity>
  //       <Favorite data={item} />
  //     </SwipeRow>
  //   );
  // };

  // 삭제 구현했는데 삭제만 적용 안됨..
  // const renderSwipeRow = ({ item, index }) => {
  //   const swipeRowRef = useRef(null);

  //   const handleDeleteItem = (index) => {
  //     const updatedData = [...exhibitionData];
  //     updatedData.splice(index, 1);
  //     setExhibitionData(updatedData);
  //     if (swipeRowRef.current) {
  //       swipeRowRef.current.closeRow();
  //     }
  //   };

  //   return (
  //     <SwipeRow ref={swipeRowRef} rightOpenValue={-75} disableRightSwipe={true}>
  //       <TouchableOpacity
  //         style={styles.rowBack}
  //         onPress={() => handleDeleteItem(index)}
  //       >
  //         <Text>Delete</Text>
  //       </TouchableOpacity>
  //       <Favorite data={item} />
  //     </SwipeRow>
  //   );
  // };

  const handleDeleteItem = (id) => {
    console.log("삭제");
    const updatedData = exhibitionData.filter(
      (exhibition) => exhibition.id !== id
    );
    setExhibitionData(updatedData);
  };
  const SwipeRowItem = useCallback(
    ({ item }) => {
      const swipeRowRef = useRef(null);

      const onDeleteItem = () => {
        handleDeleteItem(item.id);
        if (swipeRowRef.current) {
          swipeRowRef.current.closeRow();
        }
      };

      return (
        <SwipeRow ref={swipeRowRef} rightOpenValue={-75} disableRightSwipe>
          <TouchableOpacity style={styles.rowBack} onPress={onDeleteItem}>
            <Text>Delete</Text>
          </TouchableOpacity>
          <Favorite data={item} />
        </SwipeRow>
      );
    },
    [exhibitionData]
  );

  // 드레그가 부자연스럽게 된다.
  // const renderDraggableItem = ({ item, index, drag, isActive }) => {
  //   return (
  //     <TouchableOpacity
  //       activeOpacity={1}
  //       onLongPress={drag}
  //       disabled={isActive}
  //     >
  //       {renderSwipeRow({ item, index })}
  //     </TouchableOpacity>
  //   );
  // };

  class DraggableFlatListWrapper extends React.Component {
    shouldComponentUpdate(nextProps) {
      // isActive가 true일 때만 업데이트
      if (this.props.isActive || nextProps.isActive) {
        return false;
      }
      return true;
    }

    render() {
      const { isActive, ...restProps } = this.props;
      return <DraggableFlatList {...restProps} />;
    }
  }

  const handleDragEnd = ({ data }) => {
    // Update the exhibitionData state with the modified array
    setExhibitionData(data);
  };

  const renderDraggableItem = ({ item, index, drag }) => {
    const isActive = false; // 새로운 변수 isActive를 추가로 선언
    return (
      <PanGestureHandler
        onGestureEvent={drag}
        onHandlerStateChange={drag}
        activeOpacity={1}
        enabled={!isActive}
      >
        <View>
          <SwipeRowItem item={item} index={index} />
        </View>
      </PanGestureHandler>
    );
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <View>
        <DraggableFlatListWrapper
          data={exhibitionData}
          renderItem={renderDraggableItem}
          keyExtractor={(item, index) => `draggable-item-${item.id}`}
          onDragEnd={handleDragEnd}
        />
      </View>
    </GestureHandlerRootView>
  );
};

// swiperow만 구현
//   return (
//     <ScrollView>
//       <View style={styles.container}>
//         {exhibitionData.map((data, index) => (
//           <SwipeRow rightOpenValue={-75} disableRightSwipe={true} key={index}>
//             <View style={styles.rowBack}>
//               <Text>Delete</Text>
//             </View>
//             <Favorite data={data} />
//           </SwipeRow>
//         ))}
//       </View>
//     </ScrollView>
//   );
// };

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
