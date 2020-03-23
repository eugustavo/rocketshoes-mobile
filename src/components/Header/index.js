import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Content,
  Logo,
  LogoContent,
  CartContainer,
  ItemCount,
} from './styles';

export default function Header() {
  const cartSize = useSelector(state => state.cart.length);
  const navigation = useNavigation();

  return (
    <Container>
      <Content>
        <LogoContent onPress={() => navigation.navigate('Home')}>
          <Logo />
        </LogoContent>
        <CartContainer onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" color="#FFF" size={24} />
          <ItemCount>{cartSize}</ItemCount>
        </CartContainer>
      </Content>
    </Container>
  );
}
