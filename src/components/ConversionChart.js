import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'
import React, { useState } from 'react'
import parserConversion from '../helper/parserConversion'

const ConversionChart = props => {
  const [data, setData] = useState(parserConversion(props.data))

  let options = {
    chart: {
      type: 'pie'
    },
    title: {
      text: ''
    },
    tooltip: {
      pointFormat: '<b>$ {point.y}</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false
        },
        showInLegend: true
      }
    },
    series: [{
      data
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

export default ConversionChart