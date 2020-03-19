import React from 'react';

import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

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

export default function Cart() {
  const products = [
    {
      id: 1,
      title: 'Tênis VR Caminhada Confortável Detalhes Couro Masculino',
      price: 139.9,
      priceFormatted: 'R$ 139.90',
      image:
        'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
    },
    {
      id: 2,
      title: 'Tênis de Caminhada Leve Confortável',
      price: 179.9,
      priceFormatted: 'R$ 179.90',
      image:
        'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
    },
    {
      id: 3,
      title: 'Tênis VR Caminhada Confortável Detalhes Couro Masculino',
      price: 139.9,
      priceFormatted: 'R$ 139.90',
      image:
        'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
    },
    {
      id: 4,
      title: 'Tênis de Caminhada Leve Confortável',
      price: 179.9,
      priceFormatted: 'R$ 179.90',
      image:
        'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
    },
    {
      id: 5,
      title: 'Tênis VR Caminhada Confortável Detalhes Couro Masculino',
      price: 139.9,
      priceFormatted: 'R$ 139.90',
      image:
        'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
    },
    {
      id: 6,
      title: 'Tênis de Caminhada Leve Confortável',
      price: 179.9,
      priceFormatted: 'R$ 179.90',
      image:
        'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
    },
  ];

  return (
    <Container>
      <Content>
        <CartList
          data={products}
          keyExtractor={product => String(product.id)}
          renderItem={({ item }) => (
            <Product>
              <ProductImage source={{ uri: item.image }} />
              <ProductInfo>
                <ProductTitle>{item.title}</ProductTitle>
                <ProductPrice>{item.priceFormatted}</ProductPrice>
                <ProductAmount>
                  <AmountButtonDecrement>
                    <Icon
                      name="remove-circle-outline"
                      color="#7159c1"
                      size={20}
                    />
                  </AmountButtonDecrement>
                  <AmountNumber>2</AmountNumber>
                  <AmountButtonIncrement>
                    <Icon name="add-circle-outline" color="#7159c1" size={20} />
                  </AmountButtonIncrement>
                </ProductAmount>
              </ProductInfo>
              <DeleteButton>
                <Icon name="delete-forever" color="#7159c1" size={24} />
              </DeleteButton>
            </Product>
          )}
        />
        <Checkout>
          <CheckoutTotal>
            <CheckoutTitle> Total </CheckoutTitle>
            <CheckoutValue> R$1.400,00 </CheckoutValue>
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
