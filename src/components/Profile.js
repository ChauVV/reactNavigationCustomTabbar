import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import PropTypes from 'prop-types';

class Profile extends Component {
    render() {
        return (
            <SafeAreaView style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text>Profile</Text>
            </SafeAreaView>
        );
    }
}

export default Profile;