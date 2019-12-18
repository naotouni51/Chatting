import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, ScrollView, Button } from 'react-native';
import firebase from "firebase";
require("firebase/firestore")


const firebaseConfig = {
  apiKey: "AIzaSyCDiOkTxAdZ3WXrr93COtZxebtzhFCVrs8",
  authDomain: "chatting-90c0e.firebaseapp.com",
  databaseURL: "https://chatting-90c0e.firebaseio.com",
  projectId: "chatting-90c0e",
  storageBucket: "chatting-90c0e.appspot.com",
  messagingSenderId: "999810274596",
  appId: "1:999810274596:web:3b1bae01ee955411720fb1"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

class App extends React.Component {
  state = {
    commentList: ['test','test','test','test','test','test',]
  }

  render() {
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
          <ScrollView style={{flex: 1, backgroundColor: 'gray'}}>
            {this.state.commentList.map((value, index) => {
              return (
                <Text key={index}>{value}</Text>
              )
            })}
          </ScrollView>
          <TextInput style={{backgroundColor: 'white'}} />
          <Button title="ボタン" onPress={() => console.log('test')}/>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    padding: 20,
  },
});

export default App
