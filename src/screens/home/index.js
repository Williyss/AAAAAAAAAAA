import React from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';  // Importa ícones da biblioteca
import DATA from '../../Data/Data'; 
import DATACLI from '../../Data/DataCliente';

export default function Home() {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.iconButtonContainer}>
        <TouchableOpacity
          onPress={() => {
            const cliente = DATACLI[0]; // Supondo que você esteja pegando o primeiro cliente da lista
            navigation.navigate('PerfilCliente', { id: cliente.id });
          }}
        >
          <Icon name="cog" size={30} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View>
          {DATA.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.containerJogos}
              onPress={() => alert(`${item.nomeProduto} selected`)}
            >
              <Image
                style={styles.images}
                source={{ uri: item.imgProduto }}
              />
              <View>
                <Text style={styles.titulo}>{item.nomeProduto}</Text>
                <Text style={styles.imgProduto}>{item.imgProduto}</Text>
                <Text style={styles.imgLoja}>{item.imgLoja}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  iconButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 10,
  },
  containerJogos: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  images: {
    width: 100,
    height: 150,
    borderRadius: 8,
    marginRight: 10,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  imgLoja: {
    fontSize: 14,
    color: '#555',
  },
  imgProduto: {
    fontSize: 14,
    color: '#999',
  }
});