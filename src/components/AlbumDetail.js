import React from 'react';
import { Text, View, Image } from 'react-native';
import { Card, CardSection } from './common';
import LinkBar from './LinkBar';

const AlbumDetail = ({ profile }) => {
    const { profile_pic,
      name,
      title,
      github_account,
      twitter_account,
      instagram_account } = profile;
    const { headerContainerStyle,
            thumbnailStyle,
            thumbnailContainerStyle,
            headerTextStyle,
            linksContainerStyle
          } = styles;
    return (
      <Card>
      <CardSection>
      <View style={thumbnailContainerStyle}>
      <Image source={{ uri: profile_pic }} style={thumbnailStyle} />
      </View>
      <View style={headerContainerStyle}>
        <Text style={headerTextStyle}>{title}</Text>
        <Text>{name}</Text>
      </View>
      </CardSection>
      <CardSection>
      <View style={linksContainerStyle}>
        <LinkBar github_account={github_account} twitter_account={twitter_account} instagram_account={instagram_account} />
      </View>
      </CardSection>
      </Card>
    );
};

  const styles = {
    headerContainerStyle: {
      justifyContent: 'space-around',
      flexDirection: 'column'
    },
    headerTextStyle: {
      fontSize: 18
    },
    linksContainerStyle: {
      flexDirection: 'row',
      flex: 1
    },
    thumbnailStyle: {
      height: 50,
      width: 50
    },
    imageStyle: {
      height: 300,
      flex: 1,
      width: null
    },
    thumbnailContainerStyle: {
      justifyContent: 'center',
      alignItems: 'center',
            marginLeft: 10,
            marginRight: 10
    }
  };
  export default AlbumDetail;
