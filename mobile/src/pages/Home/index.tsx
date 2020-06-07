import React, { useState, useEffect, ChangeEvent } from 'react';
import { Image, ImageBackground, View, StyleSheet, Text } from 'react-native';
import { RectButton }  from 'react-native-gesture-handler';
import { Feather as Icon } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import RNPickerSelect from 'react-native-picker-select';
import axios from 'axios';

interface IBGEUFResponse {
  sigla: string,
}

interface IBGEMunicipioResponse {
  nome: string,
}

const Home = () => {
  const navigation = useNavigation();

  const [UFs, setUFs] = useState<string[]>([])
  const [Cities, setCities] = useState<string[]>([])

  const [selectedUf, setSelectedUf] = useState<string>('0')
  const [selectedCity, setSelectedCity] = useState<string>('0')

  useEffect(() => {
    axios.get<IBGEUFResponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(response => { 
        const ufs = response.data.map(uf =>  uf.sigla );
        setUFs(ufs);
    });
  }, []);

  useEffect(() => {
      if(selectedUf === '0'){
          return
      }
      axios.get<IBGEMunicipioResponse[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`).then(response => { 
          const cities = response.data.map(city =>  city.nome );
          setCities(cities);
      });
  }, [selectedUf]);

  function handleNavigationToPoints() {
    navigation.navigate('Points', {
      uf: selectedUf,
      city: selectedCity,
    });
  }

  function handleSelectedUf(value: ChangeEvent<HTMLSelectElement>){
    setSelectedUf(String(value));
  }

  function handleSelectedCity(value: ChangeEvent<HTMLSelectElement>){
      setSelectedCity(String(value));
  }

  return (
      <ImageBackground 
          source={require('../../assets/home-background.png')} 
          style={styles.container}
          imageStyle={{width: 274, height: 368}}
      >
          <View style={styles.main}>
              <Image source={require('../../assets/logo.png')} />
              <Text style={styles.title}>Seu marketplace de coleta de redíduos</Text>
              <Text style={styles.description}>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</Text>
          </View>

          <View style={styles.footer}>
            <RNPickerSelect
              placeholder={{
                label: 'Selecione um Estado',
                value: '0',
              }}
              value={selectedUf}
              onValueChange={handleSelectedUf}
              items={UFs.map(uf => ({ key: uf,  label: uf, value: uf }))}
            />
            <RNPickerSelect 
              placeholder={{
                label: 'Selecione uma Cidade',
                value: '0',
              }}
              value={selectedCity} 
              onValueChange={handleSelectedCity}
              items={Cities.map(city => ({ key: city, label: city, value: city }))}
            />
            <RectButton style={styles.button} onPress={handleNavigationToPoints}>
              <View style={styles.buttonIcon}>
                <Icon name="arrow-right" color="#FFF" size={24}  />
              </View>
              <Text style={styles.buttonText}>Entrar</Text>
            </RectButton>
          </View>

      </ImageBackground>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 32,
    },
  
    main: {
      flex: 1,
      justifyContent: 'center',
    },
  
    title: {
      color: '#322153',
      fontSize: 32,
      fontFamily: 'Ubuntu_700Bold',
      maxWidth: 260,
      marginTop: 64,
    },
  
    description: {
      color: '#6C6C80',
      fontSize: 16,
      marginTop: 16,
      fontFamily: 'Roboto_400Regular',
      maxWidth: 260,
      lineHeight: 24,
    },
  
    footer: {},
  
    select: {},
  
    input: {
      height: 60,
      backgroundColor: '#FFF',
      borderRadius: 10,
      marginBottom: 8,
      paddingHorizontal: 24,
      fontSize: 16,
    },
  
    button: {
      backgroundColor: '#34CB79',
      height: 60,
      flexDirection: 'row',
      borderRadius: 10,
      overflow: 'hidden',
      alignItems: 'center',
      marginTop: 8,
    },
  
    buttonIcon: {
      height: 60,
      width: 60,
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      justifyContent: 'center',
      alignItems: 'center'
    },
  
    buttonText: {
      flex: 1,
      justifyContent: 'center',
      textAlign: 'center',
      color: '#FFF',
      fontFamily: 'Roboto_500Medium',
      fontSize: 16,
    }
  });

export default Home;