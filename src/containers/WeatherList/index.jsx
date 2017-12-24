import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchWeather } from '../../actions/index'
import {weather} from '../../reducers/weather';

import { Sparklines, SparklinesLine } from "react-sparklines";

class WeatherList extends Component {
  renderWeather(cityData) {
    const temps = cityData.list.map(w => w.main.temp)
    return (
      <tr key={cityData.city.id}>
        <td>{cityData.city.name}</td>
        <td>
          <Sparklines height={80} width={180} data={temps}>
          <SparklinesLine color="red" />
          </Sparklines>
          </td>
      </tr>
    )
  }
  render() { 
    return ( 
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
     );
  }
}

const mapStateToProps = ({weather}) => ({
  weather
});

export default connect(mapStateToProps)(WeatherList);