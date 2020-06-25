import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import colors from '../../constants/Colors'

const HEADER_MAX_HEIGHT = 55;
const AppHeader = ({ hasBackBtn, navigation, children, headerContentStyles }) => {
  return (
    <View
      style={styles.header}
    >
      <View
        style={headerContentStyles ? { ...styles.headerContent, ...headerContentStyles } : styles.headerContent}
      >
        <Text style={styles.headerText}>
          {children}
        </Text>
      </View>
      {hasBackBtn && (
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backArrow}>
          <MaterialIcons name="keyboard-backspace" size={24} color="#ffb75a" />
        </TouchableOpacity>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  backArrow: {
    zIndex: 20,
    position: 'absolute',
    width: 40,
    top: 14,
    left: 15,
    right: 0,
    zIndex: 3,
  },
  header: {
    backgroundColor: colors.primaryColor,
    height: HEADER_MAX_HEIGHT,
    alignItems: 'center',
    paddingVertical: 10,
    width: '100%'
  },
  headerText: {
    fontSize: 20,
    opacity: 0.8,
    color: '#fff',
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center'
  },
})

export default AppHeader;