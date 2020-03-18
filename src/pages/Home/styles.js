import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { darken } from 'polished';

export const Container = styled.View`
  flex: 1;
  background: #191920;
`;

export const ProductList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  padding: 20px;
  width: 100%;
  margin-bottom: 10px;
`;

export const Product = styled.View`
  background: #fff;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 4px;
`;

export const ProductImage = styled.Image`
  width: 250px;
  height: 250px;
  align-self: center;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
  margin: 4px 0;
`;

export const ProductPrice = styled.Text`
  font-weight: bold;
  font-size: 24px;
`;

export const AddCart = styled(RectButton)`
  background: #7159c1;
  border-radius: 4px;
  flex-direction: row;
  margin-top: 10px;
  align-items: center;
  height: 50px;

  /* overflow: hidden;
  position: relative; */
`;

export const ProductAmount = styled.View`
  border-radius: 4px;

  flex-direction: row;
  justify-content: center;
  align-items: center;

  height: 50px;
  width: 60px;

  background: ${darken(0.05, '#7159c1')};
`;

export const ProductAmountText = styled.Text`
  color: #fff;
  margin-left: 2px;
`;

export const AddCartText = styled.Text`
  flex: 1;
  text-align: center;
  color: #fff;
  font-weight: bold;
`;
