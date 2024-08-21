import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './style'
import { AntDesign } from '@expo/vector-icons';
import DATACLI from '../../Data/DataCliente';

export default function PerfilCliente() {
  const route = useRoute();
  const navigation = useNavigation();
  const { id } = route.params || {};

  // Busca o cliente com o id correspondente
  const cliente = DATACLI.find((cli) => cli.id === id);

  return (
    <View style={styles.viewContainer}>
      <Image 
        resizeMode='stretch' 
        style={styles.imageBanner} 
        source={cliente.imgCliente} 
      />
      <TouchableOpacity 
        style={styles.backButton} 
        onPress={() => navigation.goBack()}
      > 
        <AntDesign name="leftcircle" size={35} color="white" /> 
      </TouchableOpacity>
      <View style={{ marginTop: 350 }} />
      {cliente ? (
        <>
          <Text style={styles.textBanner} >ID: {cliente.id}</Text>
          <Text style={styles.textBanner} >Nome: {cliente.nomeCliente}</Text>
          <Text style={styles.textBanner} >ID: {cliente.emailCliente}</Text>
          <Text style={styles.textBanner} >Nome: {cliente.senhaCliente}</Text>
          <Image 
            style={styles.clienteImage} 
            source={{ uri: cliente.imgCliente }} 
          />
          {/* Exibir outros dados conforme necessário */}
        </>
      ) : (
        <Text style={styles.textBanner}>Cliente não encontrado.</Text>
      )}
    </View>
  );
}