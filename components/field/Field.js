import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../constants/Colors';

const Field = ({ label, value }) => {
  return (
    <View style={styles.field}>
      <Text style={styles.fieldText}>{label}</Text>
      <Text style={[styles.fieldText, styles.fieldValueText]}>{value}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  field: {
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderBottomColor: '#f4f4f4',
    borderBottomWidth: 0.8,
    marginVertical: 10,
    alignItems: 'flex-start',
    height: 50,
    fontFamily: 'Montserrat',
    paddingBottom: 10
  },
  fieldText: {
    fontSize: 14,
    color: colors.primaryColor,
    opacity: 0.7
  },
  fieldValueText: {
    marginTop: 2,
    color: '#484848',
    opacity: 1,
    fontSize: 16,
    fontWeight: '600',
  },
})

export default Field;

