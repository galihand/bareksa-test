import React, { useState } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official';
import parserRevenue from '../helper/parserRevenue';


const RevenueChart = props => {
  const [data] = useState(parserRevenue(props.data))

  const options = {
    chart: {
      type: 'area'
    },
    colors: ['#789764'],
    title: { text: '' },
    xAxis: {
      categories: data.date,
      tickInterval: 10
    },
    yAxis: {
      title: {
        text: ''
      },
      labels: {
        formatter: function () {
          return `$${this.value}`;
        }
      }
    },
    tooltip: {
      formatter: function () {
        console.log(this)
        return `$${this.point.y} at ${this.key}`
      }
    },
    plotOptions: {
      area: {
        marker: {
          enabled: false,
          symbol: 'circle',
          radius: 2,
          states: {
            hover: {
              enabled: true
            }
          }
        }
      }
    },
    legend: { enabled: false },
    series: [{
      data: data.revenue
    }]
  }

  return (
    <React.Fragment>
      <HighchartsReact
        options={options}
        highchart={Highcharts}
      />
    </React.Fragment>
  )
}

export default RevenueChart