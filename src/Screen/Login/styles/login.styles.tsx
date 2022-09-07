import { Image, Text, TextInput, View } from 'react-native';
import styled from 'styled-components/native';
import { WIDTH } from '../../../common/theme';

interface LoginStylesProps {
  color: string;
}

export const LoginStyles = {
  Container: styled(View)`
    width: 100%;
    height: 100%;
  `,
  Cover: styled(View)`
    flex: 1;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1;
    justify-content: flex-end;
    align-items: center;
    padding-left: ${WIDTH * 0.1}px;
    padding-right: ${WIDTH * 0.1}px;
    padding-bottom: ${WIDTH * 0.25}px;
  `,
  ImageView: styled(View)`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
  `,
  Image: styled(Image)`
    width: 100%;
    height: 100%;
  `,
  TitleView: styled(View)`
    width: 100%;
    justify-content: flex-start;
    margin-bottom: 20px;
  `,
  Title: styled(Text)`
    color: #e5e9f2;
    font-size: ${WIDTH * 0.08}px;
    font-weight: bold;
  `,
  InputContainer: styled(View)`
    width: 100%;
    justify-content: flex-start;
  `,
  InputView: styled(View)`
    width: 100%;
    height: ${WIDTH * 0.13}px;
    padding-left: 20px;
    margin-bottom: 30px;
    border-color: #e42346;
    border-width: 1px;
    border-radius: 30px;
    flex-direction: row;
    align-items: center;
  `,
  TextInput: styled(TextInput)`
    width: 100%;
    height: ${WIDTH * 0.125}px;
    padding-left: 7px;
    font-size: 17px;
  `,
  ButtonContainer: styled(View)`
    width: 100%;
    height: 70px;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
  `,
  Button: styled(View)<LoginStylesProps>`
    width: ${WIDTH * 0.8}px;
    height: ${WIDTH * 0.13}px;
    background-color: ${({ color }) => color};
    border-radius: 30px;
    justify-content: center;
    align-items: center;
  `,
  ButtonText: styled(Text)<LoginStylesProps>`
    color: ${({ color }) => color};
    font-size: ${WIDTH * 0.05}px;
    font-weight: bold;
  `,
};
