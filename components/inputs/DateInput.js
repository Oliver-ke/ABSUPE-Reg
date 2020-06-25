import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { withFormikControl } from 'react-native-formik';
import DatePicker from '@react-native-community/datetimepicker';

const DateInput = ({ setFieldValue, label }) => {
  const [date, setDate] = useState(new Date());
  const [showWiget, setShowWidget] = useState(false);

  const handleOnChange = (e, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowWidget(false);
    setDate(currentDate);
    setFieldValue(currentDate.toLocaleDateString())
  }

  return (
    <TouchableOpacity style={styles.container} onPress={() => setShowWidget(true)}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputWrapper}>
        {showWiget && <DatePicker mode="date" onChange={handleOnChange} value={date} />}
        <Text style={styles.inputVal}>{date.toLocaleDateString()}</Text>
        <AntDesign name="calendar" size={20} color="black" />
      </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 15
  },
  inputWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingBottom: 8
  },
  label: {
    marginBottom: 10,
    color: 'rgba(0,0,0,0.6)',
    fontSize: 16
  },
  inputVal: {
    fontSize: 16
  }
})

export default withFormikControl(DateInput);