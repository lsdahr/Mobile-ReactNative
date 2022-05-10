import React, { Component } from 'react';
import { StyleSheet, Text, View, Switch, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: '',
      status2: 0,
    };
  }

  async componentDidMount() {
    await AsyncStorage.getItem('status').then((value) => {
      this.setState({ status: JSON.parse(value) });
    });

    await AsyncStorage.getItem('status2').then((value2) => {
      this.setState({ status2: JSON.parse(value2) });
    });
  }

  async componentDidUpdate(_, prevState) {
    const status = this.state.status;
    const status2 = this.state.status2;

    await AsyncStorage.setItem('status', JSON.stringify(status));
    await AsyncStorage.setItem('status2', JSON.stringify(status2));
  }

  render() {
    return (
      <View
        style={{
          backgroundColor: `${this.state.status == 1 ? 'black' : 'white'}`,
          paddingTop: 50,
        }}>
        <ScrollView>
          <Text
            style={{
              backgroundColor: `${this.state.status == 1 ? 'white' : 'black'}`,
              color: `${this.state.status == 1 ? 'black' : 'white'}`,
              textAlign: 'center',
              fontSize: 30,
              fontWeight: 'bold',
              paddingTop: 35,
              padding: 10,
            }}>
            Frases
          </Text>
          <Text
            style={{
              fontSize: `${this.state.status2 == 1 ? 35 : 25}`,
              textAlign: 'center',
              color: `${this.state.status == 1 ? 'white' : 'black'}`,
              marginTop: 10,
            }}>

            Frases Aplicação

          </Text>

          <View style={styles.inline}>
            <View style={{ flexDirection: 'row' }}>
              <MaterialCommunityIcons
                style={{
                  marginRight: 10,
                  color: `${this.state.status == 1 ? 'white' : 'black'}`,
                }}
                name="weather-night"
                size={35}
              />
              <Switch
                value={this.state.status == 1 ? true : false}
                onValueChange={(valorSwitch) =>
                  this.setState({ status: valorSwitch ? 1 : 0 })
                }
                thumbColor={this.state.status == 0 ? 'black' : 'white'}
              />
            </View>

            <View style={{ flexDirection: 'row' }}>
              <Octicons
                style={{
                  marginRight: 10,
                  color: `${this.state.status == 1 ? 'white' : 'black'}`,
                }}
                name="text-size"
                size={35}
              />
              <Switch
                value={this.state.status2 == 1 ? true : false}
                onValueChange={(valorSwitch) =>
                  this.setState({ status2: valorSwitch ? 1 : 0 })
                }
                thumbColor={this.state.status2 == 0 ? 'black' : 'white'}
              />
            </View>
          </View>
          <Text
            style={{
              fontSize: `${this.state.status2 == 1 ? 20 : 15}`,
              color: `${this.state.status == 1 ? 'white' : 'black'}`,
              textAlign: 'center',
              fontStyle: 'italic',
            }}>
            “The loneliest moment in someone’s life is when they {'\n'} are watching their whole world fall apart, and all they can do is stare blankly.”{'\n'}
          </Text>
          <Text
            style={{
              fontSize: `${this.state.status2 == 1 ? 20 : 15}`,
              color: `${this.state.status == 1 ? 'white' : 'black'}`,
              textAlign: 'center',
              fontWeight: '700',
              marginBottom: 30,
            }}>
            - F. Scott Fitzgerald
          </Text>

          <Text
            style={{
              fontSize: `${this.state.status2 == 1 ? 20 : 15}`,
              color: `${this.state.status == 1 ? 'white' : 'black'}`,
              textAlign: 'center',
              fontStyle: 'italic',
            }}>
            “I don't exactly know what I mean {'\n'} by that, but I mean it.”{'\n'}
          </Text>
          <Text
            style={{
              fontSize: `${this.state.status2 == 1 ? 20 : 15}`,
              color: `${this.state.status == 1 ? 'white' : 'black'}`,
              textAlign: 'center',
              fontWeight: '700',
              marginBottom: 30,
            }}>
            - J.D. Salinger, The Catcher in the Rye
          </Text>

          <Text
            style={{
              fontSize: `${this.state.status2 == 1 ? 20 : 15}`,
              color: `${this.state.status == 1 ? 'white' : 'black'}`,
              textAlign: 'center',
              fontStyle: 'italic',
            }}>
            “Anyway, I keep picturing all these little kids playing some game in this big field of rye and all. Thousands of little kids, and nobody's around - nobody big, I mean - except me. And I'm standing on the edge of some crazy cliff. What I have to do, I have to catch everybody if they start to go over the cliff - I mean if they're running and they don't look where they're going I have to come out from somewhere and catch them. That's all I do all day. I'd just be the catcher in the rye and all. I know it's crazy, but that's the only thing I'd really like to be.”{'\n'}
          </Text>
          <Text
            style={{
              fontSize: `${this.state.status2 == 1 ? 20 : 15}`,
              color: `${this.state.status == 1 ? 'white' : 'black'}`,
              textAlign: 'center',
              fontWeight: '700',
              marginBottom: 30,
            }}>
            - J.D. Salinger, The Catcher in the Rye
          </Text>

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titulo: {
    textAlign: 'center',
    fontSize: 30,
    backgroundColor: 'gray',
    color: 'white',
    fontWeight: 'bold',
    paddingTop: 35,
    padding: 15,
  },
  inline: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 50,
    paddingBottom: 50,
  },
});

export default App;
