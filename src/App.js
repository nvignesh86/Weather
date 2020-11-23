import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import WeatherCmp from './Weather/WeatherCmp';
import Media from 'react-media';
import './App.css';

class App extends Component {
  componentDidMount = () => {
    this.fetchData()
  }

  async fetchData() {
    const { props: { dispatch } } = this;
    let response = await fetch('https://openweathermap.org/data/2.5/forecast/daily?id=1880251&units=metric&appid=439d4b804bc8187953eb36d2a8c26a02');
    let json = await response.json();
    dispatch({ type: 'FETCH_DATA', payload: json });
  }

  render() {
    return (
      <div>
        <Media queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
        }}>
          {matches => (
            <Fragment>
              {matches.small && <WeatherCmp/>}
              {matches.medium && <WeatherCmp/>}
              {matches.large && <WeatherCmp/>}
            </Fragment>
          )}
        </Media>

      </div>
    )
  }
}

export default connect(null, null)(App);