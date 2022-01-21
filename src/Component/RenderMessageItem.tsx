import React, {memo, useMemo} from 'react';
import {Platform, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { IC_AVATAR } from 'src/assets';
import styled from 'styled-components/native';

interface Props {
  message: String;
  type: 'MY' | 'YOUR';
}

const RenderMessageItem = memo((props: Props) => {

  const isMy = useMemo(() => {
    return props.type === 'MY'
  }, [props.type])

  return (
    <SContentView type={isMy}>
      {!isMy && <SIcon source={IC_AVATAR} /> }
      <SViewMessage
        colors={isMy ? ['#AAC9FF', '#77A7FF', '#1877F2'] : ['#FBCCD2', '#DDD5F0']}>
        <STextMessage>{props.message}</STextMessage>
      </SViewMessage>
    </SContentView>
  );
});

export default RenderMessageItem;
//
const SContentView = styled.View<{type: Boolean}>`
  width: 100%;
  padding: 12px;
  margin-top: ${props => (props.type ? 0 : 10)}px;
  justify-content: ${props => (props.type ? 'flex-end' : 'flex-start')};
  align-items: flex-end;
  flex-direction: row;
`;

const SViewMessage = styled(LinearGradient)`
  padding: 8px;
  border-radius: 20px;
  max-width: 80%;
`;

const STextMessage = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: 400;
`

const SIcon = styled.Image`
  width: 28px;
  height: 28px;
  border-radius: 18px;
  margin-right: 8px;
`;
