import React from 'react';
import styled from 'styled-components/native';
import {Dimensions, useWindowDimensions} from 'react-native';
import PropTypes from 'prop-types';

// 양쪽에 20px씩 남기고 띄워주기 위해 width 크기를 조절
const StyledInput = styled.TextInput.attrs(({theme}) => ({
  placeholderTextColor: theme.main,
}))`
  width: ${({width}) => width - 40}px;
  height: 60px;
  margin: 3px 0;
  padding: 15px 20px;
  border-radius: 10px;
  font-size: 25px;
  background-color: ${({theme}) => theme.itemBackground};
  color: ${({theme}) => theme.text};
`;

const Input = ({placeholder, value, onChangeText, onSubmitEditing, onBlur}) => {
  // 사용하는 기기의 화면의 크기(width)를 가져옴
  //   const width = Dimensions.get('window').width;
  const width = useWindowDimensions().width;
  return (
    <StyledInput
      width={width}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing}
      onBlur={onBlur}
      maxLength={50}
      //  대문자로 시작 안하기
      autoCapitalize="none"
      //  밑에는 아이폰 전용 (오타안잡아주기, return키를 done으로 보여주기, 키보드 다크모드)
      autoCorrect={false}
      returnKeyType="done"
      keyboardAppearance="dark"
    />
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  onSubmitEditing: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};

export default Input;
