import React from 'react';
import { View, Text } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { Entypo } from '@expo/vector-icons'
import { StyleSheet } from 'react-native';
import { withFormikControl } from 'react-native-formik';
import { arrayOf, object } from 'prop-types';

class SelectionInput extends React.Component {
  render() {
    const { options, setFieldValue, label } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <RNPickerSelect
          onValueChange={setFieldValue}
          style={{
            ...pickerSelectStyles, iconContainer: {
              top: -10,
              right: 4,
            }
          }}
          placeholder={{
            label: `select ${label.toLowerCase()}`,
            value: null,
            color: 'rgba(0,0,0,0.6)',
          }}
          Icon={() => {
            return <Entypo name="chevron-small-down" size={24} color="gray" />
          }}
          useNativeAndroidPickerStyle={false}
          items={options}
        />
      </View>
    )
  }

}

SelectionInput.propTypes = {
  options: arrayOf(object).isRequired,
}

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
  },
});

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    color: 'black',
  },
  label: {
    marginBottom: 10,
    color: 'rgba(0,0,0,0.6)',
    fontSize: 16
  },
})

export default withFormikControl(SelectionInput);