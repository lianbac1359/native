/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Hello!</Text>
      </View>
      <View style={styles.body}>
        <View>
          <Text style={styles.titleform}>Email{"\n"}</Text>
          <Text style={styles.valueform}>  Enter your email address</Text>
        </View>
        <View>
          <Text style={styles.titleform}>Password{"\n"}</Text>
          <Text style={styles.valueform}>  Enter your password</Text>
        </View>
        <View>
          <Text style={styles.forgot}>Forgot your Password</Text>
        </View>
        
        <View>
          <Text style={styles.login}>Login</Text>
        </View>
        
    </View>
      <View style={styles.duoi}>
        <View  style={styles.duoi1}>
          <View style={styles.formfg1}><Text>Google</Text></View>
          <View style={styles.formfg2}><Text>Facebook</Text></View>
        </View>
        <View style={styles.duoi2}>
          <Text style={{textAlign:'center'}}>Don't have an account{"\n"}</Text>
          <Text style={styles.create}>Create account</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  container:{
    flex:1,
  },
  header:{
    flex:2.5,
  },
  title:{
    padding:30,
    fontSize:50,
    color:"black",
    fontStyle:"italic",
    fontFamily:"",
  },
  body:{
    flex:4,
    padding:20,
  },
  duoi:{
    height:200,
    width:"100%"
  },
  titleform:{
    color:"black",
  },
  valueform:{
    fontSize:15,
    backgroundColor:'#fff',
    width:350, 
    paddingBottom:10,
    paddingTop:10,
    borderWidth:0.5,
    borderRadius:10,
    marginBottom:20
  },
  forgot:{
    textAlign:"right",
    color:'black',
    marginBottom:40
  },
  login:{
    fontSize:15,
    backgroundColor:'#000',
    width:350, 
    paddingBottom:10,
    paddingTop:10,
    borderWidth:0.5,
    textAlign:"center",
    color:'#FFF',
    marginBottom:20
  },
  duoi1:{
    flexDirection:'row',
    justifyContent:'space-around',
  },
  formfg1:{
    fontSize:17,
    backgroundColor:'#FFF',
    width:90, 
    paddingBottom:10,
    paddingTop:10,
    borderWidth:0.5,
    alignItems:'center',
    color:'#000',
  },
  formfg2:{ 
    fontSize:17,
    backgroundColor:'#FFF',
    width:100, 
    paddingBottom:10,
    paddingTop:10,
    borderWidth:0.5,
    alignItems:'center',
    color:'#000',
  },
  duoi2:{
    flexDirection:'column',
    alignSelf:'center',
    marginTop:70,
  },
  create:{
    fontSize:17,
    backgroundColor:'#F5F5F5',
    width:300, 
    paddingBottom:10,
    paddingTop:10,
    borderWidth:0.5,
    textAlign:"center",
    color:'black',
  }

});

export default App;
