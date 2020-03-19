import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { formatPrice } from '../../util/format';

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

  const navigation = useNavigation();

  // eslint-disable-next-line no-unused-vars
  async function handleAddProduct(item) {
    navigation.navigate('Cart', { transitionStyle: 'inverted' });
  }

  return (
    <Container>
      <ProductList
        data={products}
        keyExtractor={product => String(product.id)}
        renderItem={({ item }) => (
          <Product>
            <ProductImage source={{ uri: item.image }} />
            <ProductTitle>{item.title}</ProductTitle>
            <ProductPrice>{item.priceFormatted}</ProductPrice>
            <AddCart onPress={() => handleAddProduct(item)}>
              <ProductAmount>
                <>
                  <Icon name="add-shopping-cart" color="#FFF" size={20} />
                  <ProductAmountText>{1}</ProductAmountText>
                </>
              </ProductAmount>
              <AddCartText>ADD TO CART</AddCartText>
            </AddCart>
          </Product>
        )}
      />
    </Container>
  );
}
