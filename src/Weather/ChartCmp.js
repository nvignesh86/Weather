import React from 'react';
import { CanvasJSChart } from 'canvasjs-react-charts';

export default class ChartCmp extends React.Component {

    buildDataPoints=(isMax)=>{
        const {data} = this.props;
        if (data && data.list){
            var datapoints = [];
            let filteredList = data.list.slice(0, 7);
            for (let filteredData of filteredList){
                let date = new Date(filteredData.dt * 1000);
                datapoints.push({
                    y : isMax ? filteredData.temp.max : filteredData.temp.min,
                    label : date.toDateString(),
                    description: filteredData.weather[0].description,
                    currentDay: days[date.getDay()]
                });
            }
            return datapoints;
        }
    }

    contentFormatter=(cmp, e)=>{
        let str = '';
        let breakLine = '<br/><br/>';
        str += `${cmp.props.config.tooltipDay} - ${e.entries[0].dataPoint.currentDay} ${breakLine}`;    
        for (let item of e.entries){
            str += `${item.dataSeries.name} - ${item.dataPoint.y} <span class="degreesign">C</span> ${breakLine}`;
        }
        str += `${cmp.props.config.tooltipDesc} - ${e.entries[0].dataPoint.description} ${breakLine}`;
        return (str);
    }

    buildChartData = () => {
        const { config } = this.props;
        let options = {
            animationEnabled: true,
            title: {text: config.chartTitle},
            axisY: {title: config.axisYTitle},
            axisX: {title: config.axisXName, labelAngle:0},
            toolTip: {shared: true, contentFormatter: (e) => this.contentFormatter(this, e)}
        };

        options.data = [{
            type: "spline",
            name: config.axisYName,
            showInLegend: true,
            dataPoints: this.buildDataPoints(true)
        },
        {
            type: "spline",
            name: config.axisYName,
            showInLegend: true,
            dataPoints: this.buildDataPoints()
        }]

        return options;
    }
    render() {
        const options = this.buildChartData();
        return (
            <CanvasJSChart options={options} />
        );
    }
}

const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
