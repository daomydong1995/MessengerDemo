import React, {memo} from 'react';
import {Platform, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { IC_AVATAR } from 'src/assets';
import styled from 'styled-components/native';

interface Props {
  message: String;
  type: 'MY' | 'YOUR';
}

const RenderMessageItem = memo((props: Props) => {
  return (
    <SContentView type={props.type}>
      {props.type === 'YOUR' && <SIcon source={IC_AVATAR} /> }
      <SViewMessage
        start={{ x: -0.1, y: 0.1 }}
        end={{ x: 0.1, y: 1.0 }}
        locations={[0, 0.9, 0.6]}
        colors={['#E33B3B', '#E33B3B']}
        type={props.type}>
        <STextMessage>{props.message}</STextMessage>
      </SViewMessage>
    </SContentView>
  );
});

export default RenderMessageItem;
//
const SContentView = styled.View<{type: 'MY' | 'YOUR'}>`
  width: 100%;
  padding: 12px;
  margin-top: ${props => (props.type === 'MY' ? 0 : 10)}px;
  justify-content: ${props => (props.type === 'MY' ? 'flex-end' : 'flex-start')};
  align-items: flex-end;
  flex-direction: row;
`;

const SViewMessage = styled(LinearGradient)<{type: 'MY' | 'YOUR'}>`
  padding: 8px;
  border-radius: 20px;
  max-width: 80%;
`;

const STextMessage = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: 600;
`

const SIcon = styled.Image`
  width: 28px;
  height: 28px;
  border-radius: 18px;
  margin-right: 8px;
`;
