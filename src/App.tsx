import React, {useCallback, useEffect, useState} from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  RefreshControl,
  SafeAreaView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import styled from 'styled-components/native';
import RenderInputTextCustom from 'src/Component/RenderInputTextCustom';
import RenderMessageItem from 'src/Component/RenderMessageItem';
import RenderHeaderCustom from './Component/RenderHeaderCustom';
import {mockApiGet} from './helper/MockApiService';
import {LIST_MESSAGES_GET} from './helper/MockUrls';
import MessageModel from './model/MessageModel';
const LIMIT = 10;
const App = () => {
  const isDarkMode = useColorScheme() === 'light';
  const [listData, setListData] = useState<[MessageModel]>();
  const [page, setPage] = useState(1);
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setIsRefreshing(true)
    let param = {
      page: 1,
      limit: LIMIT,
      sortBy: 'id',
      order: 'desc',
    };
    mockApiGet(LIST_MESSAGES_GET, param).then((data: any) => {
      setListData(data);
      setIsRefreshing(false)
      setPage(1)
    }).catch(err => {
      setIsRefreshing(false)
    });
  };

  const loadMore = () => {
    const isMaxData = page * LIMIT === listData?.length;
    if (isMaxData) {
      setIsRefreshing(true)
      let param = {
        page: page + 1,
        limit: LIMIT,
        sortBy: 'id',
        order: 'desc',
      };
      mockApiGet(LIST_MESSAGES_GET, param).then((data: any) => {
        setPage(page + 1)
        let newList = listData.concat(data)
        setListData(newList);
        setIsRefreshing(false)
      }).catch(err => {
        setIsRefreshing(false)
      });
    }
  }

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  const renderText = useCallback(({item, index}) => {
    return (
      <RenderMessageItem
        message={item.messange}
        type={item.type ? 'MY' : 'YOUR'}
      />
    );
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <RenderHeaderCustom />
      <KeyboardAvoidingView
        behavior="padding"
        style={{flex: 1}}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -500}>
        <SFlatlist
          data={listData}
          renderItem={renderText}
          keyExtractor={(item, index) => index.toString()}
          inverted={true}
          initialNumToRender={10}
          contentContainerStyle={{ paddingBottom: 40 }}
          onEndReached={loadMore}
          onEndReachedThreshold={0.01}

          // refreshControl={
          //   <RefreshControl
          //     refreshing={isRefreshing}
          //     onRefresh={loadData}
          //     title={'Đang tải...'}
          //     titleColor={'#FFCC00'}
          //     tintColor={'#FFCC00'}
          //   />
          // }
        />
        <RenderInputTextCustom />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const SFlatlist = styled(FlatList)`
  width: 100%;
  height: 100%;
  flex: 1;
  background-color: white;
`;

export default App;
