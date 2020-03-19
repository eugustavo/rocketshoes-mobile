import React from 'react';
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

function Header() {
  const navigation = useNavigation();

  return (
    <Container>
      <Content>
        <LogoContent onPress={() => navigation.navigate('Home')}>
          <Logo />
        </LogoContent>
        <CartContainer onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" color="#FFF" size={24} />
          <ItemCount>{1}</ItemCount>
        </CartContainer>
      </Content>
    </Container>
  );
}

export default Header;
