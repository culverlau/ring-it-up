import React from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import { Formik } from 'formik';

function CreatePostScreen(props) {
  return (
    <Formik
    initialValues={{ email: '' }}
    onSubmit={(values) => console.log(values)}
  >
    {({ handleChange, handleBlur, handleSubmit, values }) => (
      <View style={styles.container}>
        <Text>This is a test</Text>
        <TextInput
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          value={values.email}
        />
        <Button onPress={handleSubmit} title='Submit' />
      </View>
    )}
  </Formik>
  );
}

export default CreatePostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aa73b7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
