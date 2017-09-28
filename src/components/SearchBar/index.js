import React, {Component} from 'react';


export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {term: ''};
    }

    handleChange = (event) => this.setState({term: event.target.value});
    onFromSubmit = (event) => {
      event.preventDefault();
      // @todo: fetch weather data
    };

    render() {
        return (
            <form className="input-group" onSubmit={this.onFromSubmit}>
                <input type="text"
                       className="form-control"
                       value={this.state.term}
                       onChange={this.handleChange}
                       placeholder="input city"
                />
                <span className="input-group-btn">
                    <button className="btn btn-secondary">Search</button>
                </span>
            </form>
        )
    }
}