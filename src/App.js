import axios from 'axios';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import './App.scss';
import ConversionChart from './components/ConversionChart';
import DotMenu from './components/DotMenu';
import OrderContainer from './components/OrderContainer';
import RevenueChart from './components/RevenueChart';
import TopMenu from './components/TopMenu';
import UsersChart from './components/UsersChart';

function App() {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    axios.get('https://ecdba7fe-ec10-4d90-8d0e-80f8364c7624.mock.pstmn.io/takehometest/frontend/web/dashboard')
      .then(res => {
        setData(res.data.data)
        setLoading(false)
      })
  }, [])

  return (
    loading ? (<h1>loading</h1>) : (
      <div className="App">
        <TopMenu />
        <div className='mycontainer'>
          <Row className='mt-3'>
            <Col lg={3} md={6} sm={12} className='mb-3'>
              <Card>
                <Card.Body>
                  <div className='d-flex justify-content-between align-items-center'>
                    <h3 className='card__title'>Conversion</h3>
                    <DotMenu />
                  </div>
                  <ConversionChart data={data.orders} />
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={6} sm={12} className='mb-3'>
              <Card>
                <Card.Body>
                  <div className='d-flex justify-content-between align-items-center'>
                    <h3 className='card__title'>Users</h3>
                    <DotMenu />
                  </div>
                  <UsersChart data={data.user_category} />
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} md={12} className='mb-3'>
              <Card>
                <Card.Body>
                  <div className='d-flex justify-content-between align-items-center mb-3'>
                    <h3 className='card__title'>Revenue</h3>
                    <Button variant='outline-secondary' size='sm' disabled>
                      {`${format(new Date(data.orders[0].start_date), 'dd/MM/yy')} - ${format(new Date(data.orders[data.orders.length - 1].start_date), 'dd/MM/yy')}`}
                    </Button>
                  </div>
                  <RevenueChart data={data.orders} />
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <OrderContainer data={data.orders} />
        </div>
      </div>
    )
  );
}

export default App;
