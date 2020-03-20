import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { formatPrice } from '../../util/format';

import * as CartActions from '../../store/modules/cart/actions';

import api from '../../services/api';

import {
  Container,
  ProductList,
  Product,
  ProductImage,
  ProductTitle,
  ProductPrice,
  AddCart,
  ProductAmount,
  ProductAmountText,
  AddCartText,
} from './styles';

function Home({ addToCart, amount }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');
      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }
    loadProducts();
  }, []);

  return (
    <Container>
      <ProductList
        data={products}
        keyExtractor={product => String(product.id)}
        renderItem={({ item: product }) => (
          <Product>
            <ProductImage source={{ uri: product.image }} />
            <ProductTitle>{product.title}</ProductTitle>
            <ProductPrice>{product.priceFormatted}</ProductPrice>
            <AddCart onPress={() => addToCart(product)}>
              <ProductAmount>
                <>
                  <Icon name="add-shopping-cart" color="#FFF" size={20} />
                  <ProductAmountText>
                    {amount[product.id] || 0}
                  </ProductAmountText>
                </>
              </ProductAmount>
              <AddCartText>ADICIONAR AO CARRINHO</AddCartText>
            </AddCart>
          </Product>
        )}
      />
    </Container>
  );
}

Home.propTypes = {
  addToCart: PropTypes.func.isRequired,
  amount: PropTypes.shape({
    amount: PropTypes.number,
  }).isRequired,
};

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
