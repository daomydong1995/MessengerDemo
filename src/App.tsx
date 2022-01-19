import React, {useCallback} from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
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

const App = () => {
  const isDarkMode = useColorScheme() === 'light';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  const renderText = useCallback(({item, index}) => {
    return <RenderMessageItem message={'123'} type={index % 2 == 0 ?'MY':'YOUR'} />;
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <RenderHeaderCustom/>
      <KeyboardAvoidingView
        behavior="padding"
        style={{flex: 1}}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -500}>
        <SFlatlist
          data={[1, 2, 3, 4, 5, 6, 7]}
          renderItem={renderText}
          keyExtractor={(item, index) => index.toString()}
          inverted={true}
          initialNumToRender={10}
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
  background-color: #ffffff;
`;

export default App;
