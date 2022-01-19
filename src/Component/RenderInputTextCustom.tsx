import React, {memo} from 'react';
import {Platform, Text, View} from 'react-native';
import { IC_ARROW_LEFT, IC_ARROW_RIGHT, IC_AVATAR, IC_LIKE } from 'src/assets';
import styled from 'styled-components/native';

interface Props {
  message?: String;
  type?: 'MY' | 'YOUR';
}

const RenderInputTextCustom = memo((props: Props) => {
  return (
    <SContainer>
      <SIcon source={IC_ARROW_RIGHT}/>
      <SInputText />
      <SIcon source={IC_LIKE}/>
    </SContainer>
  );
});

export default RenderInputTextCustom;
const SContainer = styled.View`
  width: 100%;
  height: 50px;
  flex-direction: row;
  padding: 8px 8px;
  align-items: center;
`;

const SInputText = styled.TextInput`
  width: 80%;
  height: 100%;
  background-color: #FFFFFF;
  border-radius: 16px;
  padding-left: 16px;
  padding-right: 16px;
`;

const SIcon = styled.Image`
	width: 28px;
	height: 28px;
  margin-left: 8px;
  tint-color: red;
`;
