import React, {Component} from 'react';
import {connect} from 'react-redux';

import SearchBar from '../../components/SearchBar';

const mapStateToProps = (state) => state;


export default connect(mapStateToProps)(SearchBar);