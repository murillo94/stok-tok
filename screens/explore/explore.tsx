import React from 'react';
import { ScrollView, View, Text } from 'react-native';

import { Image, TouchableOpacity } from 'components';

import { getResponsiveWidth } from 'utils';

import { CATEGORIES_FURNITURE, CATEGORIES_ACCESSORIES } from './utils';

import useExploreScreen from './explore.hook';

import styles from './styles';

const WIDTH: number = getResponsiveWidth(20);
const HEIGHT: number = getResponsiveWidth(20);

export default function ExploreScreen() {
  const { handleGoToCategorie } = useExploreScreen();

  return (
    <ScrollView style={styles.scroll}>
      <Text style={styles.title}>Móveis</Text>
      <View style={styles.container}>
        {CATEGORIES_FURNITURE.map((item) => (
          <TouchableOpacity
            key={item.name}
            accessibilityLabel={`Navegar para a página de ${item.name}`}
            onPress={() => handleGoToCategorie(item)}
            style={styles.containerItem}
          >
            <View style={styles.containerImage}>
              <Image
                accessibilityRole="imagebutton"
                accessibilityLabel={item.name}
                source={{
                  uri: item.imageUrl,
                }}
                width={WIDTH}
                height={HEIGHT}
              />
            </View>
            <View style={styles.containerDescription}>
              <Text style={styles.description}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.title}>Acessórios</Text>
      <View style={styles.container}>
        {CATEGORIES_ACCESSORIES.map((item) => (
          <TouchableOpacity
            key={item.name}
            accessibilityLabel={`Navegar para a página de ${item.name}`}
            onPress={() => handleGoToCategorie(item)}
            style={styles.containerItem}
          >
            <View style={styles.containerImage}>
              <Image
                accessibilityRole="imagebutton"
                accessibilityLabel={item.name}
                source={{
                  uri: item.imageUrl,
                }}
                width={WIDTH}
                height={HEIGHT}
              />
            </View>
            <View style={styles.containerDescription}>
              <Text style={styles.description}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}
