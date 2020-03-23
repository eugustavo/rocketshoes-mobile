import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
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

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingProducts, setLoadingProducts] = useState(false);

  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;
      return sumAmount;
    }, {})
  );
  const dispatch = useDispatch();

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
    dispatch(CartActions.addToCartRequest(id));
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
