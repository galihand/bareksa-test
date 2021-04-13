import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'
import React, { useState } from 'react'
import parserUserCategory from '../helper/parserUserCategory'
require('highcharts/modules/variable-pie')(Highcharts)

const UsersChart = props => {
  const [data] = useState(parserUserCategory(props.data))

  let options = {
    chart: {
      type: 'variablepie'
    },
    title: {
      text: ''
    },
    tooltip: {
      pointFormat: '<b>{point.y}</b>'
    },
    plotOptions: {
      variablepie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false
        },
        showInLegend: true
      }
    },
    series: [{
      zMin: 0,
      data
    }],
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

export default UsersChart