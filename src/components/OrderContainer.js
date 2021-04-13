
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import React, { useState } from 'react'
import { DateRange } from 'react-date-range';
import Status from './Status';
import { add, format } from 'date-fns';
import { Card, Col, Row } from 'react-bootstrap';

const OrderContainer = props => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ])
  const [data, setData] = useState(props.data)

  const filterDataHandler = () => {
    let temp = []
    props.data.forEach(item => {
      if (new Date(item.start_date) >= date[0].startDate && new Date(item.start_date) <= add(date[0].endDate, { hours: 23, minutes: 59 })) {
        temp.push(item)
      }
    })
    setData(temp)
  }

  const resetFilterHandler = () => {
    setData(props.data)
    setDate([
      {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
      }
    ])
  }

  return (
    <Row className='mt-3'>
      <Col lg={4}>
        <Card className='border-0 text-center'>
          <Card.Body>
            <DateRange
              editableDateInputs={true}
              onChange={item => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}

            />

            <div className='button-calendar'>
              <button className='btn-cancel' onClick={resetFilterHandler}>Cancel</button>
              <button className='btn-submit' onClick={filterDataHandler}>Filter</button>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={8} md={12}>
        <Card className='border-0'>
          <Card.Body>
            <h3 className='card__title mb-3'>Orders</h3>
            <div style={{ overflowX: 'scroll' }}>
              <table className='table'>
                <thead>
                  <tr>
                    <th>Order Number</th>
                    <th>Status</th>
                    <th>Operator</th>
                    <th>Location</th>
                    <th>Start Date</th>
                    <th>Due Date</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, idx) => (
                    <tr key={idx}>
                      <td>{`#${idx + 1}`}</td>
                      <td><Status variant={item.status} title={item.status} /></td>
                      <td>{item.full_name}</td>
                      <td>{item.location}</td>
                      <td>{format(new Date(item.start_date), 'dd/MM/yy HH:mm')}</td>
                      <td>{format(new Date(item.due_date), 'dd/MM/yy HH:mm')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row >
  )
}

export default OrderContainer