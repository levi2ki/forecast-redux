import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../../actions';
import SearchBar from '../../components/SearchBar';


const mapDispatchToProps = (dispatch) => bindActionCreators({ fetchWeather }, dispatch);
const enchance = connect(null, mapDispatchToProps);

export const SearchBarContainer = enchance(SearchBar);
