import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface ListProps {
  data: string[]
}

export default function List({ data }: ListProps) {
  return (
    <>
      {data.map(dataPoint => (
        <View key={dataPoint} style={styles.listItem}>
          <Text style={styles.itemText}>{dataPoint}</Text>
        </View>
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: '#f5e9e1'
  },
  itemText: {
    color: '#382e24',
    textAlign: 'center'
  }
})