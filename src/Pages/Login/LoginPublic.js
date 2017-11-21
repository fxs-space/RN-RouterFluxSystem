import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

import {Button, NavigationBar, Input} from 'teaset';

import LoginInput from './Component/LoginInput';

import {observer} from 'mobx-react/native';
import {observable, computed, action, runInAction} from 'mobx';


@observer
export default class LoginPublic extends Component {

    @observable mobile = '';
    @observable verification = '123456';
    @observable password = '';
    @observable newPassword = '';
    @observable againPass = '';
    @observable isImage = false;
    @observable verifyIconUrl = Config.baseApi + '/icon/getIconCode';

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.container}>
                <NavigationBar
                    title={
                        <View style={{flex: 1, paddingLeft: 4, paddingRight: 4, alignItems: 'center'}}>
                            <Text style={{fontSize: FONT_SIZE(16), color:'#333'}}>{this.props.headerTitle}</Text>
                        </View>
                    }
                    style={{height: 64, backgroundColor: 'white'}}
                    statusBarStyle='default'
                    rightView={
                        <TouchableOpacity onPress={() => Actions.pop()} style={{marginRight: 15}}>
                            <Text>关闭</Text>
                        </TouchableOpacity>
                    }
                />
                <View style={{backgroundColor: 'white', marginTop: px2dp(128)}}>
                    <LoginInput placeholder='请输入手机号'
                                maxLength={11}
                                onChangeText={(text) => {
                                    this.mobile = text;
                                }}
                    />
                    <LoginInput placeholder='请输入验证码'
                                isVerify={true}
                                getVerifyCode={() => {
                                    this.isImage = true;
                                }}
                                onChangeText={(text) => {
                                    this.verification = text;
                                }}
                    />
                    {this.props.headerTitle === '重置密码' ?
                        <LoginInput placeholder='输入新密码'
                                    onChangeText={(text) => {
                                        this.newPassword = text;
                                    }}
                        /> :
                        <LoginInput placeholder='设置密码'
                                    onChangeText={(text) => {
                                        this.password = text;
                                    }}
                        />
                    }
                    <LoginInput placeholder='确认密码'
                                onChangeText={(text) => {
                                    this.againPass = text;
                                }}
                    />
                    {this.props.headerTitle === '创建账号' ?
                        <Button title={'注册'}
                                style={styles.loginButtonStyle}
                                titleStyle={{fontSize: FONT_SIZE(14), color: '#fff'}}
                                onPress={() => this._onRegisterPress()}
                        /> :
                        <Button title={'重置密码'}
                                style={styles.loginButtonStyle}
                                titleStyle={{fontSize: FONT_SIZE(14), color: '#fff'}}
                                onPress={() => this._onResetPress()}
                        />
                    }
                </View>
            </View>
        );
    }

    _onResetPress = () => {

    };

    _onRegisterPress = () => {

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    loginButtonStyle: {
        marginLeft: px2dp(108),
        marginRight: px2dp(108),
        height: px2dp(80),
        marginTop: px2dp(164),
        backgroundColor: '#07f',
        borderColor: Theme.transparentColor,
        borderRadius: 10
    },
});