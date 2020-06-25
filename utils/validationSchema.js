import * as Yup from "yup";

export default Yup.object().shape({
  LastName: Yup.string()
    .min(2, 'Too Short!')
    .required('Required'),
  FirstName: Yup.string()
    .min(2, 'Too Short!')
    .required('Required'),
  OtherName: Yup.string()
    .min(2, 'Too Short!'),
  Gender: Yup.string()
    .oneOf(['Male', 'Female'], "Gender must be Male or Female"),
  DateOfBirth: Yup.date(),
  GuardianFirstName: Yup.string()
    .min(2, 'Too Short!')
    .required('Required'),
  GuardianLastName: Yup.string()
    .min(2, 'Too Short!')
    .required('Required'),
  GuardianOtherName: Yup.string()
    .min(2, 'Too Short!')
    .required('Required'),
  GuardianGender: Yup.string()
    .oneOf(['Male', 'Female'], "Gender must be Male or Female"),
  GuardianPhoneNo: Yup.string()
    .matches(/ 1234 regex/),
  GuardianEmailAddress: Yup.string()
    .email('must be a valid email'),
  GuardianRelationship: Yup.string()
    .min(2, 'Provide relationship')
    .required('no relationship provided'),
  GuardianAddress: Yup.string()
});