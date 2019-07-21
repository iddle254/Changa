import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';


class UserProfileList extends Component {
  state = { profiles: [] };
  componentWillMount() {
    axios.get('https://api.myjson.com/bins/phrtz')
    .then(response => this.setState({ profiles: response.data }));
  }
  renderProfiles() {
    return this.state.profiles.map(profile =>
       <AlbumDetail key={profile.name} profile={profile} />
     );
  }
  render() {
  return (
    <ScrollView>
      {this.renderProfiles()}
    </ScrollView >
  );
}
}


export default UserProfileList;
