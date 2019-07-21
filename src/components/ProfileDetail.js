import React from 'react';
import { Image, View, Text } from 'react-native';
import { Card, CardSection } from './common';

const ProfileDetail = ({ name, about, profile_pic }) => {
  return (
    <Card>
    <CardSection>
    <Image source={{ uri: profile_pic }} />
    <View>
    <Text>{name}</Text>
    <Text>{about}</Text>
    </View>
    </CardSection>
    </Card>
  );
};

export default ProfileDetail;
