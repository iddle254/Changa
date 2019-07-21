
import React from 'react';
import { View } from 'react-native';
import Profile from './src/components/Profile';
import { Header } from './src/components/common';

const App = () => {
    return (
      <View style={{ flex: 1 }}>
      <Header />
      <Profile />
      </View>
    );
};

export default App;
