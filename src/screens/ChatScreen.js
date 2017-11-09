import React from 'react';
import { getMockData, postMessage } from '../services/api';
import { 
  View, 
  ImageBackground, 
  Platform, 
  KeyboardAvoidingView, 
  Text, 
  StyleSheet, 
  Button, 
  FlatList 
} from 'react-native';
import { Message, Compose } from '../components';

export default class ChatScreen extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        title: `Chat with ${navigation.state.params.user}`
    })

    state = {
        messages: []
    }

    keyboardVerticalOffset = Platform.OS === 'ios' ? 60 : 0

    componentDidMount() {
        getMockData().then((messages) => {
            this.setState({
                messages
            })
        });
    }
   

    render() {
        return (
            <ImageBackground
                style={styles.container} source={require('../assets/imgs/background.png')}> 
                <KeyboardAvoidingView 
                  behavior="padding"
                  keyboardVerticalOffset={this.keyboardVerticalOffset}
                  style={styles.container}>
                  <FlatList
                        style={styles.container}
                        data={this.state.messages}
                        renderItem={Message}
                        keyExtractor={(item, index) => (`message-${index}`)}
                    />
                    <Compose submit={postMessage} />
                </KeyboardAvoidingView>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent', 
        width: '100%'
    }
})