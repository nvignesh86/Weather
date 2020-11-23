import React, { Component } from 'react';
import getCurrentTemp, {getTodaysWeather} from '../Util/Util';

export default class ForecastCmp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanderIndex: null,
            isExpand: false
        }
    }

    expandOrCollapse = (index) => {
        if (this.state.expanderIndex === index && this.state.isExpand) {
            this.setState({ expanderIndex: index, isExpand: false });
        } else {
            this.setState({ expanderIndex: index, isExpand: true });
        }
    }

    buildData = () => {
        const { showToday, data} = this.props;

        let dataList = (
            <div>
                {data && data.list && data.list.map((item, index) => {
                    if (showToday && index >0){
                        return;
                    }
                    let expandItem = this.state.expanderIndex;
                    let isExpand = this.state.isExpand;
                    return <div key={index}>
                        <div className='top-div' style={{cursor: 'pointer'}} onClick={this.expandOrCollapse.bind(this, index)}>
                            <div className='inner-div'>{showToday ? data.city.name : new Date(item.dt * 1000).toDateString()}</div>
                            <div className='inner-div'>{item.weather[0].description +' - '+ getTodaysWeather(item.speed)}</div>
                            <div className='inner-div'>{getCurrentTemp(item.temp)}<span className='degreesign'>C</span></div>
                            <div className='inner-div'>{item.temp.max}<span className='degreesign'>C</span></div>
                            <div className='inner-div'>{item.temp.min}<span className='degreesign'>C</span></div>
                            <div className='inner-div' style={{fontSize: '18px' }}>{isExpand && expandItem === index ? '-' : '+'}</div>
                        </div>
                        {
                            expandItem === index && isExpand &&
                            <div className='expander-top'>
                                <div className='expander-inner'><span>Humidity</span><span className='humidity'>{item.humidity}</span></div>
                                <div className='expander-inner'><span>Pressure</span><span>{item.pressure}hPa</span></div>
                                <div className='expander-inner'><span>Sunrise</span><span>{new Date(item.sunrise * 1000).toLocaleTimeString()}</span></div>
                                <div className='expander-inner'><span>Sunset</span><span>{new Date(item.sunset * 1000).toLocaleTimeString()}</span></div>
                            </div>
                        }
                    </div>
                })}
            </div>
        )

        return(
            <div style={{ border: '1px solid #e6e5e5', marginBottom: '10px', background: '#fff'}}>
                {dataList}
            </div>
        )
    }

    render() {
        const { showToday} = this.props;
        const items = this.buildData();
        return (
            <React.Fragment>
                <div className='location-cls'>{showToday ? 'Today forecast' : '14-day forecast'}</div>
                {items}
            </React.Fragment>
        )
    }
}