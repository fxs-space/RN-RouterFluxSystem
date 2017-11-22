import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';
import PropTypes from 'prop-types';

export default class Test2 extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        // console.log('===========',this.props.content);
        return (
            <View style={styles.container}>
                <Text onPress={() => Actions.Detail1({callBackJump: (v)=> alert(v)})}>点我进入详情页</Text>
                <Text style={{marginTop:15}}>{this.props.content}</Text>
            </View>
        );
    }
}

Test2.PropTypes = {
    content: PropTypes.string,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});