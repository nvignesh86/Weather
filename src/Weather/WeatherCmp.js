import React, { Component } from 'react';
import { connect } from 'react-redux';
import ForecastCmp from './ForecastCmp';
import ChartCmp from './ChartCmp';

class WeatherCmp extends Component {
    render() {
        const config = {
            chartTitle:'Weather Forecast',
            axisYTitle:'Temperature',
            axisXTitle:'Date',
            axisYName:'High',
            axisXName:'Low',
            tooltipDay:'Day',
            tooltipDesc:'Description'
        }

        const { reduxState } = this.props;

        return (
            <div className='app-root'>
                <div className='app-header'>
                    <div className='header'>Weather Forecast</div>
                </div>
                <div className='root-cls'>
                    <ForecastCmp data={reduxState} showToday={true}/>
                    <div style={{ marginBottom: '10px' }}>
                         <ChartCmp data={reduxState} config={config}/>
                    </div>
                    <ForecastCmp data={reduxState} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { reduxState: state }
}

export default connect(mapStateToProps, null)(WeatherCmp);