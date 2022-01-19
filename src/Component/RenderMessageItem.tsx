import React, {memo} from 'react';
import {Platform, Text, View} from 'react-native';
import styled from 'styled-components/native';

interface Props {
  message?: String;
  type?: 'MY' | 'YOUR';
}

const RenderMessageItem = memo((props: Props) => {
  return (
    <View style={{backgroundColor: 'red', width: '100%'}}>
      <Text>{props.message}</Text>
    </View>
  );
});

export default RenderMessageItem;

const SIcon = styled.Image`
  width: 36px;
  height: 36px;
  border-radius: 18px;
  margin-left: 8px;
  tint-color: red;
`;
