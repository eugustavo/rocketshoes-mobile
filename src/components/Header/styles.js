import styled from 'styled-components/native';

import logo from '../../assets/logo.png';

export const Container = styled.SafeAreaView`
  flex: 0;
  flex-direction: row;
`;

export const Content = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
  margin-right: 140px; /* GAMBIARRA */
`;

export const BasketContainer = styled.TouchableOpacity`
  height: 24px;
  width: 24px;
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
  margin-top: 10px; /* GAMBIARRA */
`;

export const ItemCount = styled.Text`
  position: absolute;
  text-align: center;
  top: -8px;
  right: -8px;
  min-width: 18px;
  min-height: 18px;
  background: #7159c1;
  color: #fff;
  font-size: 12px;
  padding: 2px;
  border-radius: 9px;
  overflow: hidden;
`;
