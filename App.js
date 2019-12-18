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
    comment: '',
    commentList: []
  }

  componentDidMount() {
    firebase.firestore().collection("commentList")
    .onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        this.setState({
          commentList: this.state.commentList.concat(change.doc.data())
        })
      })
    })
  }

  handleSubmit() {
    // let tempList = this.state.commentList
    // tempList.push(this.state.comment)
    // this.setState({commentList: tempList})

    firebase.firestore().collection('commentList').add({
      comment: this.state.comment,
      created_at: new Date()
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
          <ScrollView style={{flex: 1, backgroundColor: 'gray'}}>
            {this.state.commentList.map((value, index) => {
              return (
                <Text key={index}>{value.comment}</Text>
              )
            })}
          </ScrollView>
          <TextInput
            style={{backgroundColor: 'white'}}
            onChangeText={(text) => this.setState({comment: text})}
            value={this.state.comment}
          />
          <Button title="送信" onPress={() => this.handleSubmit()}/>
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
