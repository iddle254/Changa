import React from 'react';
import { View, Linking } from 'react-native';
import { Button } from './common';

const LinkBar = ({ github_account, twitter_account, instagram_account }) => {
  const { linkingBarContainerStyle } = styles
  return (
    <View style={linkingBarContainerStyle}>
    <Button onPress={() => Linking.openURL(github_account)}>Github</Button>
    <Button onPress={() => Linking.openURL(twitter_account)}>Twitter</Button>
    <Button onPress={() => Linking.openURL(instagram_account)}>Instagram</Button>
    </View>
  );
};
const styles = {
  linkingBarContainerStyle: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};
export default LinkBar;
