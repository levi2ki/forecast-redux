import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';


export class Chart extends Component {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.number),
    color: PropTypes.string,
    units: PropTypes.string,
  };

  getAverage() {
    const { data } = this.props;
    const avg = data.reduce( (a,b) => a+b ,0) / data.length;
    return (avg - (~~avg)) > 0.5 ? Math.ceil(avg) : Math.floor(avg);
  }

  render() {
    const { data, color, units } = this.props;
    return (
      <div>
        <Sparklines height={100} width={180} data={data}>
          <SparklinesLine color={color} />
          <SparklinesReferenceLine type="avg" />
        </Sparklines>
        <div>
          {`${this.getAverage()} ${units}`}
        </div>
      </div>
    );
  }
}
