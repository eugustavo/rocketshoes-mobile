import { Alert } from 'react-native';

export default function StockLimit(stockAmount) {
  return Alert.alert(
    'Atenção',
    `A quantidade solicitada ultrapassa a quantidade que temos em estoque, que é de apenas ${stockAmount} produtos.`,
    [{ text: 'OK', onPress: () => {} }],
    { cancelable: true }
  );
}
