import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

interface SubtitleProps {
  children: React.ReactNode
}

export default function Subtitle({ children }: SubtitleProps) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  subtitleContainer: {
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 4,
    borderBottomColor: '#f5e9e1',
    borderBottomWidth: 2
  },
  subtitle: {
    color: '#f5e9e1',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  }
})