import React from 'react';
import axios from 'axios';

import { connect } from "react-redux";
import { apiURL } from '../api/api'
import { fetchData, loadData } from '../actions/index'

class Home extends React.Component {

  state = {
    firstParam: true
  }

  componentDidMount() {
    this.props.fetchData();
    axios.get(`${apiURL}`)
      .then(res => {
        this.props.loadData(res.data);
      })
  }

  handleFilter = (event) => {

    let url = new URL(window.location.href);
    let urlParams = new URLSearchParams(url.search);
    let filterByValue = event.target.name;
    if (urlParams.has(filterByValue)) {
      let newUrl = window.location.href;
      let replaceValue = window.location.search.split(/([?,&])/).find(item =>
        item.includes(filterByValue)
      );
      window.history.pushState(null, null, newUrl.replace(replaceValue, `${filterByValue}=${event.target.value}`));
    }
    else {
      if (this.state.firstParam) {
        window.history.pushState(null, null, `${window.location.href}?${filterByValue}=${event.target.value}`);
        this.setState({ firstParam: false });
      }
      else {
        window.history.pushState(null, null, `${window.location.href}&${filterByValue}=${event.target.value}`);
      }
    }

  }

  render() {
    return (<React.Fragment>
      <h1>{this.props.name}</h1>
      <button onClick={this.handleFilter} name="launch_year" value="2014">2014</button>
      <button onClick={this.handleFilter} name="launch_year" value="2015">2015</button>
      <h3>Launch success</h3>
      <button onClick={this.handleFilter} name="launch_success" value="true">True</button>
      <button onClick={this.handleFilter} name="launch_success" value="false">False</button>
      <div className="container">
        {!this.props.loading ? this.props.data.map((item, index) =>
          <p key={index}>{item.mission_name}</p>
        ) : <h2>Loading. . . . .</h2>
        }
      </div>

    </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  console.log(state);
  return state;
};

export default connect(mapStateToProps, { fetchData, loadData })(Home);
