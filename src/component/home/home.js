import React from "react";
import "./home.scss";
import { connect } from "react-redux";
import styled from "styled-components";
import { fetchData, firstQueryParam, applyFilters } from "../../actions/index";
import SpaceTileComponent from "../spaceTileComponent/spaceTileComponent";
import { FilterComponent } from "../filterComponent/filterComponent";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const FilterWrapper = styled.div``;

const TileContainer = styled.div``;

const ZeroResults = () => <h2>No Results Found . . .</h2>;

const Loading = () => <div className="loading">
  <span className="loader animation-1"></span>
  <span className="loader animation-2"></span>
  <span className="loader animation-3"></span>
  <span className="loader animation-4"></span>
  <span className="loader animation-5"></span>
</div>;

class Home extends React.PureComponent {
  componentDidMount() {
    this.props.fetchData();
  }

  handleFilter = (event) => {
    if (event.target.name && event.target.value) {
      let url = new URL(window.location.href);
      let urlParams = new URLSearchParams(url.search);
      let filterByValue = event.target.name;
      if (urlParams.has(filterByValue)) {
        let newUrl = window.location.href;
        let replaceValue = window.location.search
          .split(/([?,&])/)
          .find((item) => item.includes(filterByValue));
        window.history.pushState(
          null,
          null,
          newUrl.replace(replaceValue, `${filterByValue}=${event.target.value}`)
        );
      } else {
        if (this.props.isFirstQueryParam) {
          window.history.pushState(
            null,
            null,
            `${window.location.href}?${filterByValue}=${event.target.value}`
          );
          this.props.firstQueryParam(false);
        } else {
          window.history.pushState(
            null,
            null,
            `${window.location.href}&${filterByValue}=${event.target.value}`
          );
        }
      }
      this.props.applyFilters(filterByValue, event.target.value);
    }
  };

  clearAllFilters = () => {
    let url = new URL(window.location.origin);
    window.history.pushState(
      null,
      null,
      url
    );
    this.props.fetchData();
  };

  render() {
    return (
      <Container>
        <FilterWrapper className="filter_wrapper" onClick={this.handleFilter}>
          <FilterComponent />
          <br />
          <button className="filter-button" onClick={this.clearAllFilters}>
            Clear all
          </button>
        </FilterWrapper>

        <TileContainer className="spacex_tile_container" ref={this.rootRef}>
          {!this.props.loading ? (
            this.props.data.length > 0 ? (
              this.props.data.map((item, index) => (
                <SpaceTileComponent item={item} key={index} />
              ))
            ) : (
              <ZeroResults />
            )
          ) : (
            <Loading />
          )}
        </TileContainer>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, {
  fetchData,
  applyFilters,
  firstQueryParam
})(Home);
