import React, { Component } from 'react';

import { SearchBarContainer } from '../containers/SearchBarContainer';
import { WeatherList } from '../containers/WeatherList';


export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBarContainer />
        <WeatherList />
      </div>
    );
  }
}
