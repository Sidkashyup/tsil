import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


const { width, height } = Dimensions.get('window');

const Signup = ({ navigation }) => {
  const [panNumber, setPanNumber] = useState('');
  const [gstNumber, setGstNumber] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [mobileOtp, setMobileOtp] = useState('');
  const [emailOtp, setEmailOtp] = useState('');

  const handleVerifyMobile = () => {
    // Add your verification logic here
    console.log('Verifying mobile number:', mobileNumber);
  };

  const handleVerifyEmail = () => {
    // Add your verification logic here
    console.log('Verifying email:', email);
  };

  const handleSubmit = () => {
    // Add your form submission logic here
    console.log('Submitting signup form');
    // Redirect to login page
    navigation.navigate('Login');
  };

  return (
    <LinearGradient colors={['white', 'green']} style={styles.container}>
      <View style={styles.formContainer}>
       <Text style={[styles.heading, { textAlign: 'center', color: '#66bb6a' }]}>Create New Account</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, { width: '100%' }]}
            placeholder="Enter your PAN Number"
            value={panNumber}
            onChangeText={setPanNumber}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, { width: '100%' }]}
            placeholder="Enter your GST Number"
            value={gstNumber}
            onChangeText={setGstNumber}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, { width: '100%' }]}
            placeholder="Enter your Mobile Number"
            value={mobileNumber}
            onChangeText={setMobileNumber}
          />

        </View>
         <View style={styles.inputContainer}>
        <TextInput
         style={[styles.input, { width: '70%' }]}
          placeholder="Enter OTP for Mobile"
          value={mobileOtp}
          onChangeText={setMobileOtp}
        />
                  <TouchableOpacity style={styles.button} onPress={handleVerifyMobile}>
            <Text style={{ textAlign: 'center', color: 'white' }}>Verify</Text>
          </TouchableOpacity>
          </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, { width: '100%' }]}
            placeholder="Enter your Email"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View  style={styles.inputContainer}>
        <TextInput
          style={[styles.input, { width: '70%' }]}
          placeholder="Enter OTP for Email"
          value={emailOtp}
          onChangeText={setEmailOtp}
        />
          <TouchableOpacity style={styles.button} onPress={handleVerifyEmail}>
            <Text style={{ textAlign: 'center', color: 'white' }}>Verify</Text>
          </TouchableOpacity>
          
        </View>
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={{ color: 'white',fontWeight: 'bold' }}>Submit</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={{ textAlign: 'center', color: 'white' }}>Already have an account? Login here</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  formContainer: {
    width: '100%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: height * 0.08,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#66bb6a',
    color: '#10B981',
    padding: 10,
    borderRadius: 5
  },
  submitButton: {
    backgroundColor: '#66bb6a',
    color: 'red',
    fontWeight: 'bold',
    width: '100%',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    marginTop: 10
  },

});

export { Signup };
