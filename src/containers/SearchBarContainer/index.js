import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../../actions'

import SearchBar from '../../components/SearchBar';


const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => bindActionCreators({fetchWeather}, dispatch);

export default connect(null, mapDispatchToProps)(SearchBar);
