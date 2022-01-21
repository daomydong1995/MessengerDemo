import React, {memo} from 'react';
import {Platform, Text, View} from 'react-native';
import {IC_ARROW_LEFT, IC_AVATAR} from 'src/assets';
import styled from 'styled-components/native';

interface Props {
  message?: String;
  type?: 'MY' | 'YOUR';
}

const RenderHeaderCustom = memo((props: Props) => {
  return (
    <SContainer>
      <SIcon source={IC_ARROW_LEFT} />
      <SIconAvatar source={IC_AVATAR} />
      <STextTile>Appota Group</STextTile>
    </SContainer>
  );
});

export default RenderHeaderCustom;
const SContainer = styled.View`
  width: 100%;
  height: 50px;
  flex-direction: row;
  padding: 8px 8px;
  align-items: center;
`;

const STextTile = styled.Text`
    color: white;
    margin-left: 16px;
    font-size: 16px;
    font-weight: bold;
`

const SIcon = styled.Image`
  width: 36px;
  height: 36px;
  border-radius: 18px;
  margin-left: 8px;
  tint-color: pink;
`;
const SIconAvatar = styled.Image`
  width: 36px;
  height: 36px;
  border-radius: 18px;
  margin-left: 8px;
`;
