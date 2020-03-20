import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { formatPrice } from '../../util/format';

import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
  Content,
  CartList,
  Product,
  ProductImage,
  ProductInfo,
  ProductTitle,
  ProductPrice,
  ProductAmount,
  AmountButtonDecrement,
  AmountButtonIncrement,
  AmountNumber,
  DeleteButton,
  Checkout,
  CheckoutTotal,
  CheckoutTitle,
  CheckoutValue,
  CheckoutButton,
  CheckoutButtonText,
} from './styles';

function Cart({ cart, removeFromCart, updateAmountRequest, total }) {
  function increment(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmountRequest(product.id, product.amount - 1);
  }

  return (
    <Container>
      <Content>
        <CartList
          data={cart}
          keyExtractor={product => String(product.id)}
          renderItem={({ item: product }) => (
            <Product>
              <ProductImage source={{ uri: product.image }} />
              <ProductInfo>
                <ProductTitle>{product.title}</ProductTitle>
                <ProductPrice>{product.subtotal}</ProductPrice>
                <ProductAmount>
                  <AmountButtonDecrement onPress={() => decrement(product)}>
                    <Icon
                      name="remove-circle-outline"
                      color="#7159c1"
                      size={20}
                    />
                  </AmountButtonDecrement>
                  <AmountNumber>{product.amount}</AmountNumber>
                  <AmountButtonIncrement onPress={() => increment(product)}>
                    <Icon name="add-circle-outline" color="#7159c1" size={20} />
                  </AmountButtonIncrement>
                </ProductAmount>
              </ProductInfo>
              <DeleteButton onPress={() => removeFromCart(product.id)}>
                <Icon name="delete-forever" color="#7159c1" size={24} />
              </DeleteButton>
            </Product>
          )}
        />
        <Checkout>
          <CheckoutTotal>
            <CheckoutTitle> Total </CheckoutTitle>
            <CheckoutValue> {total} </CheckoutValue>
          </CheckoutTotal>
          <CheckoutButton>
            <Icon name="credit-card" color="#7159c1" size={20} />
            <CheckoutButtonText> PAGAR </CheckoutButtonText>
          </CheckoutButton>
        </Checkout>
      </Content>
    </Container>
  );
}

Cart.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      image: PropTypes.string,
      priceFormatted: PropTypes.string,
      subtotal: PropTypes.string,
    })
  ).isRequired,
  removeFromCart: PropTypes.func.isRequired,
  updateAmountRequest: PropTypes.func.isRequired,
  total: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
