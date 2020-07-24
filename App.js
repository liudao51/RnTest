/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '张三2',
            age: '18',
            sex: 'man',
        };
    }

    render() {
        return (
            <View style={styles.Container1}>
                <View style={styles.Box1}>
                    <Text>第1个模块:{this.state.name}</Text>
                </View>
                <View style={styles.Box2}>
                    <Text>第2个模块:{this.state.age}</Text>
                </View>
                <View style={styles.Box3}>
                    <Text>第3个模块:{this.state.sex}</Text>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    Container1: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    Box1: {
        flex: 3,
        justifyContent:'flex-start',
        backgroundColor: 'red',
        width: 100,
        height: 100,
    },
    Box2: {
        backgroundColor: 'green',
        width: 100,
        height: 100,
    },
    Box3: {
        flex: 2,
        backgroundColor: 'blue',
        width: 100,
        height: 100,
    },
});

export default App;
