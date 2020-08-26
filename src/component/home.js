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

  handleYearClick = (event) => {

    let url = new URL(window.location.href);
    let urlParams = new URLSearchParams(url.search);

    // console.log(urlParams.has("launch_year"));
    // if (urlParams.has("launch_year")) {
    //   let newUrl = window.location.href;
    //   let launchYear = window.location.search.split("? | &").find(item =>
    //     item.includes("launch_year")
    //   );
    //   console.log(launchYear);
    //   window.history.pushState(null, null, newUrl.replace(launchYear, `launch_year=${event.target.value}`));
    // }
    // else {
    //   if(this.state.firstParam) {
    //     window.history.pushState(null, null, `${window.location.href}?launch_year=${event.target.value}`);
    //     this.setState({firstParam: false});
    //   }
    //   else{
    //     window.history.pushState(null, null, `${window.location.href}&launch_year=${event.target.value}`);
    //   }
    // }
    window.history.pushState(null, null, `${window.location.href}?launch_year=${event.target.value}`);
  }

  handleLaunchSuccess = event => {
    // let urlParams = new URLSearchParams(window.location.search);
    // if (urlParams.has("launch_success")) {
    //   let newUrl = window.location.href;
    //   let launchSuccess = window.location.search.split("?").find(item =>
    //     item.includes("launch_success")
    //   )
    //   window.history.pushState(null, null, newUrl.replace(launchSuccess, `launch_success=${event.target.value}`));
    // }
    // else {
    //   window.history.pushState(null, null, `${window.location.href}?launch_success=${event.target.value}`);
    // }
  }

  render() {
    return (<React.Fragment>
      <h1>{this.props.name}</h1>
      <button onClick={this.handleYearClick} value="2014">2014</button>
      <button onClick={this.handleYearClick} value="2015">2015</button>
      <h3>Launch success</h3>
      <button onClick={this.handleLaunchSuccess} value="true">True</button>
      <button onClick={this.handleLaunchSuccess} value="false">False</button>
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
