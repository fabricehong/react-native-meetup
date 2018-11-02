import React from 'react';

import {TouchableHighlight, Text} from 'react-native';

const ScoreButton = (props)=>{
    const {text} = props;
    return (
        <TouchableHighlight onPress={this._onPressButton}>
            <Text>{text}</Text>
        </TouchableHighlight>
    )
}

export default ScoreButton;