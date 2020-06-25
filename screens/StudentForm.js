import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { classes, Nationalites, stateOfOrigins, terms, localgovernments } from '../utils/mockedData';
import { ScrollView } from 'react-native-gesture-handler'
import AppHeader from '../components/header/Header'
import validationSchema from '../utils/validationSchema';
import TextInput from '../components/inputs/TextInput';
import SelectionInput from '../components/inputs/SelectionInput';
import DateInput from '../components/inputs/DateInput';
import { AntDesign } from '@expo/vector-icons'
import { Formik } from "formik";
import Button from '../components/button/Button';
import { withNextInputAutoFocusForm } from "react-native-formik";

const Form = withNextInputAutoFocusForm(View);

const StudentForm = ({ navigation }) => {
  const [header, setHeader] = useState("Student details");
  const [currentStep, setCurrentStep] = useState(1);
  const [scroller, setScroller] = useState(0);

  const handleStepChange = (header, step) => {
    setHeader(header);
    setCurrentStep(step);
    scroller.scrollTo({ x: 0, y: 0 });
  }

  return (
    <View keyboardShouldPersistTaps="handled" style={styles.container}>
      <AppHeader hasBackBtn={true} navigation={navigation} >
        Add New Student
      </AppHeader>
      <ScrollView
        ref={(s) => setScroller(s)}
        contentContainerStyle={styles.formWrapper}
        style={styles.container}
      >
        <Formik
          onSubmit={values => console.log(values, "this ishh")}
          // validationSchema={validationSchema}
          initialValues={{
            LastName: '',
            FirstName: '',
            OtherName: '',
            Gender: "",
            DateOfBirth: ""
          }}
        >
          {({ handleSubmit, isSubmitting, handleChange }) => {
            return (
              <Form style={{ padding: 10 }}>
                <View style={styles.headerWrapper}>
                  <Text style={styles.headerText}>
                    {header}
                  </Text>
                  <AntDesign name="adduser" size={24} color="#F5C42F" />
                </View>
                {currentStep === 1 && (
                  <View>
                    <TextInput label="Last Name" name="LastName" type="text" />
                    <TextInput label="First Name" name="FirstName" type="text" />
                    <TextInput label="Other Name" name="OtherName" type="text" />
                    <SelectionInput
                      options={[
                        { label: 'Male', value: 'Male' },
                        { label: 'Female', value: 'Female' }]
                      }
                      label="Gender"
                      name="Gender"
                    />
                    <DateInput label="Date of Birth" handleChange={handleChange} name="DateOfBirth" />
                    <SelectionInput name="NationalityId" options={Nationalites} label="Country of Origin" />
                    <SelectionInput options={stateOfOrigins} label="State of Origin" />
                    <SelectionInput options={localgovernments} label="Local Government" />
                    <DateInput label="Admission Date" handleChange={handleChange} name="DateOfBirth" />
                    <SelectionInput options={classes} label="Class Admitted" />
                    <SelectionInput options={terms} label="Term Admitted" />
                    <Button iconName="arrowright" title="Next" onPress={() => handleStepChange("Guardian Details", 2)} />
                  </View>
                )}
                {currentStep === 2 && (
                  <View>
                    <TextInput label="Guardian Last Name" name="LastName" type="text" />
                    <TextInput label="Guardian First Name" name="FirstName" type="text" />
                    <TextInput label="Guardian Other Name" name="OtherName" type="text" />
                    <SelectionInput
                      options={[
                        { label: 'Male', value: 'Male' },
                        { label: 'Female', value: 'Female' }]
                      }
                      label="Guardian Gender"
                      name="Gender"
                    />
                    <TextInput
                      prefix="+234"
                      label="Guardian Phone number"
                      name="GuardianPhoneNo"
                      type="numeric"
                    />
                    <TextInput label="Guardian email" name="GuardianEmailAddress" type="text" />
                    <TextInput label="Guardian Relationship" name="GuardianRelationship" type="text" />
                    <TextInput label="Guardian Address" name="GuardianAddress" type="text" />
                    <View style={styles.btnWrapper}>
                      <Button title="Back"
                        onPress={() => handleStepChange("Student details", 1)}
                        containerStyle={{
                          backgroundColor: "#c1c1",
                          flexDirection: "row-reverse",
                          color: "#000",
                          paddingHorizontal: 5,
                          paddingVertical: 5,
                          marginTop: 10,
                          borderColor: "#c1c1"
                        }}
                        textStyle={{
                          color: "rgba(0,0,0,0.6)",
                          marginLeft: 10
                        }}
                        iconName="arrowleft"
                      />
                      <View style={styles.uploadBtnWrapper}>
                        <Button
                          title="Save Later"
                          iconName="save"
                          containerStyle={{
                            backgroundColor: "#fff"
                          }}
                          textStyle={{
                            color: "#2D2254"
                          }}
                          iconColor="#000"
                        />
                        <Button onPress={handleSubmit} title="Upload Now" iconName="clouduploado" />
                      </View>
                    </View>
                  </View>
                )}
              </Form>
            )
          }}
        </Formik>
      </ScrollView>
    </View>
  );
};



export default StudentForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  formWrapper: {
    paddingTop: 20,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 18,
    // color: "rgba(0,0,0,0.7)",
    color: "#2D2254",
    marginBottom: 10
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center"
  },
  btnWrapper: {
    justifyContent: "space-between",
    alignItems: "flex-start"
  },
  uploadBtnWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20
  }
});

