import React from 'react';
import axios from 'axios';
import './home.css'
import { connect } from "react-redux";
import { InView } from 'react-intersection-observer';

import { apiURL, generateApiUrl } from '../../api/api'
import { fetchData, loadData, firstQueryParam } from '../../actions/index'
import SpaceTileComponent from "../spaceTileComponent/spaceTileComponent";
import { FilterComponent } from "../filterComponent/filterComponent";

class Home extends React.PureComponent {

componentDidMount() {
  this.props.fetchData();
  axios.get(`${apiURL}`)
    .then(res => {
      this.props.loadData(res.data);
    })
}

handleFilter = (event) => {
  if (event.target.name && event.target.value) {
    let url = new URL(window.location.href);
    let urlParams = new URLSearchParams(url.search);
    let filterByValue = event.target.name;
  
    if (urlParams.has(filterByValue)) {
      let newUrl = window.location.href;
      let replaceValue = window.location.search.split(/([?,&])/).find(item =>
        item.includes(filterByValue)
      );
      window.history.pushState(null, null, newUrl.replace(replaceValue, `${filterByValue}=${event.target.value}`));
    } else {
      if (this.props.isFirstQueryParam) {
        window.history.pushState(null, null, `${window.location.href}?${filterByValue}=${event.target.value}`);
        this.props.firstQueryParam(false);
      } else {
        window.history.pushState(null, null, `${window.location.href}&${filterByValue}=${event.target.value}`);
      }
    }

    this.props.fetchData();

    axios.get(generateApiUrl())
      .then(res => {
        this.props.loadData(res.data);
      });
  }
}

clearAllFilters = () => {
  this.props.fetchData();

  axios.get(`${apiURL}`)
    .then(res => {
      this.props.loadData(res.data);
      this.props.firstQueryParam(true);
      window.history.pushState(null, null, `${window.location.pathname}`);
    });
  }

  render() {
    return (<div className="inner_container">

      <div className="filter_wrapper" onClick={this.handleFilter}>

        <FilterComponent />
        <br/>
        <button className="filter-button" onClick={this.clearAllFilters}>Clear all</button>
      </div>

      <div className="spacex_tile_container">
        {!this.props.loading ? this.props.data.length > 0 ? this.props.data.map((item, index) =>
          <InView triggerOnce={true} >
            {({ inView, ref, entry }) => (
              <SpaceTileComponent item={item} key={index} />
            )}
           
            </InView>
        ) : <h2>No results found . . .</h2> : <h2>Loading. . . . .</h2>
        }
      </div>
    </div>
    )
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { fetchData, loadData, firstQueryParam })(Home);
