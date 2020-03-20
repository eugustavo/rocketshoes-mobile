import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: #191920;
`;

export const Content = styled.View`
  flex: 1;
  background: #fff;
  margin: 25px 20px;
  border-radius: 8px;
`;

export const CartList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  padding: 0 20px;
`;

export const Product = styled.View`
  padding-top: 10px;
  padding-bottom: 15px;
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: #ddd;
  flex-shrink: 1;
  align-items: center;
`;

export const ProductImage = styled.Image`
  height: 90px;
  width: 90px;
  align-self: center;
  margin-right: 12px;
`;

export const ProductInfo = styled.View`
  flex-shrink: 1;
`;

export const ProductTitle = styled.Text`
  font-size: 14px;
`;

export const ProductPrice = styled.Text`
  color: #333;
  font-weight: bold;
  font-size: 18px;
`;

export const ProductAmount = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
`;

export const AmountButtonDecrement = styled.TouchableOpacity`
  margin: 0 10px 0 0;
`;

export const AmountButtonIncrement = styled.TouchableOpacity`
  margin: 0 0 0 10px;
`;

export const AmountNumber = styled.Text`
  text-align: center;
  font-weight: bold;
`;

export const DeleteButton = styled.TouchableOpacity``;

export const Checkout = styled.View`
  background: #7159c1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-radius: 7px;
`;

export const CheckoutTotal = styled.View``;

export const CheckoutTitle = styled.Text`
  color: #fff;
  text-transform: uppercase;

  font-size: 16px;
`;

export const CheckoutValue = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 24px;
`;

export const CheckoutButton = styled(RectButton)`
  background: #fff;
  border-radius: 4px;

  flex-direction: row;
  padding: 15px 20px;
`;

export const CheckoutButtonText = styled.Text`
  font-weight: bold;
  color: #7159c1;
`;

export const EmptyContent = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const EmptyText = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: #7159c1;
`;

export const EmptyButton = styled(RectButton)`
  background: #7159c1;
  border-radius: 4px;

  padding: 15px 20px;
  margin-top: 10px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const EmptyButtonText = styled.Text`
  color: #fff;
  margin-left: 5px;
`;
