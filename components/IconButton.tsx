import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

interface IconButtonProps {
  icon: 'star' | 'star-outline',
  color: string,
  onPress: () => void
}

export default function IconButton({ icon, color, onPress }: IconButtonProps) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7
  }
})