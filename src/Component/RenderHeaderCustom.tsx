import React, {memo} from 'react';
import {Platform, Text, View} from 'react-native';
import {IC_ARROW_LEFT, IC_AVATAR, IC_PHONE} from 'src/assets';
import styled from 'styled-components/native';

const RenderHeaderCustom = memo((props: any) => {
  return (
    <SContainer>
      <SIconLeft source={IC_ARROW_LEFT} />
      <SIconAvatar source={IC_AVATAR} />
      <STextTile>Appota Group</STextTile>
      <SIconRight source={IC_PHONE}/>
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

const SIconRight = styled.Image`
  width: 36px;
  height: 36px;
  border-radius: 18px;
  margin-left: 8px;
  tint-color: pink;
  position: absolute;
  right: 16px;
`;
const SIconLeft = styled.Image`
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
