import React from "react";
import { AntDesign } from "@expo/vector-icons"
import { Text, TouchableOpacity, StyleSheet } from "react-native";


const Button = ({ title, onPress, containerStyle, iconName, iconColor, textStyle }) => {
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={containerStyle ? { ...styles.containerStyle, ...containerStyle } : styles.containerStyle}
    >
      <Text style={textStyle ? { ...styles.textStyle, ...textStyle } : styles.textStyle}>{title}</Text>
      {iconName && (<AntDesign name={iconName} size={16} color={iconColor ? iconColor : "#F5C42F"} />)}
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  containerStyle: {
    marginBottom: 10,
    backgroundColor: "#2D2254",
    paddingVertical: 13,
    flexDirection: "row",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    borderColor: "#2D2254",
    borderWidth: 2,
  },
  textStyle: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
    marginRight: 10
  },
});

Button.defaultProps = {
  containerStyle: styles.containerStyle
}


export default Button;
