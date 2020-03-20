import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
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

function Home({ addToCartRequest, amount }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingProducts, setLoadingProducts] = useState(false);

  useEffect(() => {
    setLoadingProducts(true);
    async function loadProducts() {
      const response = await api.get('products');
      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
      setLoadingProducts(false);
    }
    loadProducts();
  }, []);

  async function handleAddProduct(id) {
    setLoading(true);
    addToCartRequest(id);
    setTimeout(function load() {
      setLoading(false);
    }, 550); // Geralmente o tempo de resposta da API
  }

  return (
    <Container>
      {loadingProducts ? (
        <ActivityIndicator
          color="#7159c1"
          size={48}
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        />
      ) : (
        <ProductList
          data={products}
          keyExtractor={product => String(product.id)}
          renderItem={({ item: product }) => (
            <Product>
              <ProductImage source={{ uri: product.image }} />
              <ProductTitle>{product.title}</ProductTitle>
              <ProductPrice>{product.priceFormatted}</ProductPrice>
              <AddCart onPress={() => handleAddProduct(product.id)}>
                <ProductAmount>
                  <>
                    <Icon name="add-shopping-cart" color="#FFF" size={20} />
                    <ProductAmountText>
                      {amount[product.id] || 0}
                    </ProductAmountText>
                  </>
                </ProductAmount>
                {loading ? (
                  <ActivityIndicator
                    color="#FFF"
                    size={32}
                    style={{ flex: 1, alignItems: 'center' }}
                  />
                ) : (
                  <AddCartText>ADICIONAR AO CARRINHO</AddCartText>
                )}
              </AddCart>
            </Product>
          )}
        />
      )}
    </Container>
  );
}

Home.propTypes = {
  addToCartRequest: PropTypes.func.isRequired,
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
