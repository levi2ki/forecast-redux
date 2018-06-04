import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Chart } from '../../components/Chart';
import { GMap } from '../../components/GMap';


const mapStateToProps = ({ weather }) => ({
  weather,
});

const enchance = connect(mapStateToProps);


class WeatherListView extends Component {
  static renderWeather(cityData) {
    const temps = cityData.list.map(w => w.main.temp);
    const pressure = cityData.list.map(w => w.main.pressure);
    const humidity = cityData.list.map(w => w.main.humidity);

    const { id, coord: {lon, lat} } = cityData.city;

    return (
      <tr key={id} >
        <td className='g-map'><GMap lat={lat} lng={lon} /></td>
        <td className='table-item' ><Chart data={temps} color='red' units='K' /></td>
        <td className='table-item' ><Chart data={pressure} color='blue' units='hPa' /></td>
        <td className='table-item' ><Chart data={humidity} color='green' units='%' /></td>
      </tr>
    );
  }

  render() {
    return (
      <table className='table table-hover'>
        <thead>
        <tr>
          <th>City</th>
          <th>Temperature (K)</th>
          <th>Pressure (hPa)</th>
          <th>Humidity (%)</th>
        </tr>
        </thead>
        <tbody>
        {this.props.weather.map(WeatherListView.renderWeather)}
        </tbody>
      </table>
    );
  }
}



export const WeatherList = enchance(WeatherListView);
