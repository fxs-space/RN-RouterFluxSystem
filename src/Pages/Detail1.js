import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import {NavigationBar, Label} from 'teaset';

export default class Detail1 extends Component {
    static defaultProps = {
        callBackJump: () => {}
    };
    static propTypes = {
        callBackJump: PropTypes.func
    };

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillUnmount() {
        this.props.callBackJump && this.props.callBackJump('回调函数传参');
    }

    render() {
        return (
            <View style={styles.container}>
                <NavigationBar
                    title={
                        <View style={{flex: 1, paddingLeft: 4, paddingRight: 4, alignItems: 'center'}}>
                            <Label style={{color: '#333', fontSize: FONT_SIZE(16)}} text='详情页1'/>
                        </View>
                    }
                    style={{height: 64, backgroundColor: '#5ff'}}
                    statusBarStyle='default'
                    leftView={
                        <NavigationBar.BackButton title='返回' onPress={() => Actions.pop()}/>
                    }
                    rightView={
                        <View style={{marginRight: 15}}>
                            <Text>右标题</Text>
                        </View>
                    }
                />
                <Text>欢迎进入详情页</Text>
                <Text style={{marginTop: 15}} onPress={() => Actions.pop({refresh:{content:'pop方法传参'}})}>点击pop方法传参</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});