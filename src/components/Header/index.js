import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Content,
  Logo,
  LogoContent,
  CartContainer,
  ItemCount,
} from './styles';

function Header({ navigation, cartSize }) {
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

Header.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  cartSize: PropTypes.number.isRequired,
};

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
