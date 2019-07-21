import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import { Button, Card, CardSection } from './common';
import ProfileDetail from './ProfileDetail';

class Profile extends Component {  
    state = { profiles: [] };
  componentWillMount() {
    axios.get('https://api.myjson.com/bins/phrtz')
    .then(response => this.setState({ profiles: response.data }));
  }
  renderProfile() {
    return this.state.profiles.map(profile =>
       <ProfileDetail key={profile.name} profile={profile} name={profile.name} about={profile.about} profile_pic={profile.profile_pic} />
     );
  }
  render() {
    return (
      <Card>
      <View>
      {this.renderProfile()}
      </View>
      <CardSection>
      <Button onPress={() => {}}>Invite</Button>
      </CardSection>
      </Card>
    );
  }
}

export default Profile;
