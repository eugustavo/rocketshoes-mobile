import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
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
  EmptyContent,
  EmptyText,
  EmptyButton,
  EmptyButtonText,
} from './styles';

export default function Cart() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((totalSum, product) => {
        return totalSum + product.price * product.amount;
      }, 0)
    )
  );
  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  );

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }
  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  return (
    <Container>
      <Content>
        {cart.length === 0 ? (
          <EmptyContent>
            <Icon name="remove-shopping-cart" color="#7159c1" size={64} />
            <EmptyText>Carrinho vazio :/</EmptyText>
            <EmptyButton onPress={() => navigation.navigate('Home')}>
              <Icon name="shopping-cart" color="#FFF" size={20} />
              <EmptyButtonText>FAZER COMPRAS</EmptyButtonText>
            </EmptyButton>
          </EmptyContent>
        ) : (
          <>
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
                        <Icon
                          name="add-circle-outline"
                          color="#7159c1"
                          size={20}
                        />
                      </AmountButtonIncrement>
                    </ProductAmount>
                  </ProductInfo>
                  <DeleteButton
                    onPress={() =>
                      dispatch(CartActions.removeFromCart(product.id))
                    }
                  >
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
          </>
        )}
      </Content>
    </Container>
  );
}
