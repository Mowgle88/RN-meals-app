import { Image, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';

interface MealItemProps {
  title: string,
  imageUrl: string,
  duration: number,
  complexity: string,
  affordability: string,
}

export default function MealItem({ title, imageUrl, duration, complexity, affordability }: MealItemProps) {
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => pressed ? styles.buttonPressed : null}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image style={styles.image} source={{ uri: imageUrl }} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailItem}>{duration}m</Text>
            <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden'
  },
  buttonPressed: {
    opacity: 0.5
  },
  image: {
    width: '100%',
    height: 200
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 8
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,

  }
})